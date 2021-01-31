import { VisitsHistory } from '../../../../models/payment-records.model'

export function useStatsFacade(data: VisitsHistory) {
  return {
    earnings: countEarnings(data),
    visits: data.length,
    visitors: countVisitors(data)
  }
}

function countVisitors(list: VisitsHistory) {
  const visitorMap = new Map()
  for (const item of list) {
    const counter = visitorMap.get(item.userId)
    visitorMap.set(item.userId, counter ? counter + 1 : 1)
  }
  return visitorMap.size
}

function countEarnings(list: VisitsHistory) {
  const total = list.reduce((accum, item) => accum + item.visitCost, 0)
  return Number(total.toFixed(2))
}
