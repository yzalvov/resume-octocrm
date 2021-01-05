import { useState, useEffect } from 'react'

const DAYS_AMOUNT = 28
const LEVELS = 4

export function useChartFacade(data) {
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    const daysTotals = new Array(DAYS_AMOUNT)
      .fill()
      .map(() => getRandomArbitrary())
    // console.log('daysTotals', daysTotals)
    const maxAmount = [...daysTotals].sort((a, b) => a - b).pop()
    const kFactor = Math.floor(maxAmount / 1000)
    const yTop = kFactor ? 1000 * (kFactor + 1) : 1000
    const portion = yTop / LEVELS

    let yAxis = []
    for (let index = LEVELS; index >= 0; index--) {
      yAxis = [...yAxis, portion * index]
    }
    const values = daysTotals
      .map((amount, index) => ({
        value: [index, amount],
        label: Math.round(amount).toString(),
      }))
      .reverse()

    // console.log('values', values)

    setChartData({
      bounds: [
        [0, DAYS_AMOUNT - 1],
        [0, yTop],
      ],
      values,
      yAxis,
      xAxis: [new Date(2020, 11, 1), new Date(2020, 11, DAYS_AMOUNT)],
    })
  }, [data])

  return chartData
}

function getRandomArbitrary(min = 0, max = 7900) {
  return Math.random() * (max - min) + min
}
