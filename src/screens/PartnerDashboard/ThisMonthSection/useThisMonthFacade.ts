import { useState, useEffect } from 'react'
import { PaymentRecord } from '@yzalvov/octoshared-ts'
import { firebase } from '../../../components/firebase'
import { PeriodDates } from '../../../models'

export function useThisMonthFacade(arg: {
  placeId: string
  initialPeriodDates: PeriodDates
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [paymentRecords, setVisitsHistory] = useState(
    [] as Array<PaymentRecord>
  )
  useEffect(() => {
    if (!arg.placeId) return
    const unsub = firebase
      .placeVisitsHistory({
        placeId: arg.placeId,
        periodDates: arg.initialPeriodDates
      })
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
  }, [arg.placeId, arg.initialPeriodDates])

  return { isLoading, paymentRecords }
}
