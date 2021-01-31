import { useState, useEffect } from 'react'
import {
  max,
  min,
  eachDayOfInterval,
  startOfDay,
  endOfDay,
  isWithinInterval
} from 'date-fns'
import { VisitsHistory } from '../../../../models/payment-records.model'
import firebase from 'firebase'

const LEVELS = 4
const RUB_STEP = 1000

export function useChartFacade(records: VisitsHistory) {
  const [chartData, setChartData] = useState({})
  useEffect(() => {
    if (!records.length) return
    const byDayTotals = getByDayTotals(records)
    const maxAmount = [...byDayTotals].sort((a, b) => a - b).pop()
    const kFactor = Math.floor((maxAmount as number) / RUB_STEP)
    const yTop = kFactor ? RUB_STEP * (kFactor + 1) : RUB_STEP
    const portion = yTop / LEVELS

    let yAxis: number[] = []
    for (let index = LEVELS; index >= 0; index--) {
      yAxis = [...yAxis, portion * index]
    }

    const values = byDayTotals
      .map((amount, index) => ({
        value: [index, amount],
        label: Math.round(amount).toString()
      }))
      .reverse() // Grommet chart uses reversed data.

    const xAxis = getLeftRightDates(records)
    setChartData({
      bounds: [
        [0, byDayTotals.length - 1],
        [0, yTop]
      ],
      // values: [
      //   { value: [1, 89.76], label: '90' },
      //   { value: [0, 300.72], label: '83' }
      // ],
      values,
      yAxis,
      xAxis
    })
  }, [records])

  return chartData
}

function getByDayTotals(records: VisitsHistory) {
  const [start, end] = getLeftRightDates(records)
  const dateList = eachDayOfInterval({ start, end })
  return dateList.map(date =>
    Number(
      getDayRecords(date, records)
        .reduce((accum, item) => accum + item.visitCost, 0)
        .toFixed(2)
    )
  )
}

const getDayRecords = (date: Date, records: VisitsHistory) => {
  const [start, end] = [startOfDay(date), endOfDay(date)]
  return records.filter(item =>
    isWithinInterval(
      (item.paymentMade as firebase.firestore.Timestamp).toDate(),
      { start, end }
    )
  )
}

const getLeftRightDates = (records: VisitsHistory) => {
  const dtList = records.map(item =>
    (item.paymentMade as firebase.firestore.Timestamp).toDate()
  )
  // Use min/max for decoupling from .orderBy('visitEnded', 'desc')
  return [min(dtList), max(dtList)]
}
