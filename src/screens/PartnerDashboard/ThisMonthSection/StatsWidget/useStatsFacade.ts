import { PaymentRecordWithId } from '../../../../models'

export function useStatsFacade(data: PaymentRecordWithId[]) {
  return {
    earnings: countEarnings(data),
    visits: data.length,
    visitors: countVisitors(data)
  }
}

function countVisitors(list: PaymentRecordWithId[]) {
  const visitorMap = new Map()
  for (const item of list) {
    const counter = visitorMap.get(item.userId)
    visitorMap.set(item.userId, counter ? counter + 1 : 1)
  }
  return visitorMap.size
}

function countEarnings(list: PaymentRecordWithId[]) {
  const total = list.reduce((accum, item) => accum + item.visitCost, 0)
  return Number(total.toFixed(2))
}
