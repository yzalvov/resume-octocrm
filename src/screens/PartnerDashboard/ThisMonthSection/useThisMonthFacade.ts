import { useState, useEffect } from 'react'
import { firebase } from '../../../components/firebase'
import { PaymentRecord } from '@yzalvov/octoshared-ts'
import { startOfMonth, endOfMonth } from 'date-fns'

const [dateLeft, dateRight] = [
  startOfMonth(new Date()),
  endOfMonth(new Date())
  // new Date(2021, 0, 22)
]

export function useThisMonthFacade(args: { placeId: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [paymentRecords, setVisitsHistory] = useState(
    [] as Array<PaymentRecord>
  )
  useEffect(() => {
    const unsub = firebase
      .placeVisitsHistory({ dateLeft, dateRight, placeId: args.placeId })
      .onSnapshot(
        snapshot => {
          const list: Array<PaymentRecord> = []
          if (snapshot.size) {
            snapshot.forEach(doc => list.push(doc.data() as PaymentRecord))
          }
          setVisitsHistory(list)
          setIsLoading(false)
        },
        error => console.error(error)
      )
    return unsub
  }, [])

  return { isLoading, paymentRecords }
}
