import { useState, useEffect } from 'react'
import { firebase } from '../../components/firebase'
import { PaymentRecordWithId, PeriodDates, SetPeriodDates } from '../../models'

export function useVisitsHistoryFacade(args: {
  placeId?: string
  initialPeriodDates: PeriodDates
}): {
  isReady: boolean
  isLoading: boolean
  paymentRecords: PaymentRecordWithId[]
  periodDates: PeriodDates
  setPeriodDates: SetPeriodDates
} {
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [periodDates, setPeriodDates] = useState(args.initialPeriodDates)
  const [paymentRecords, setPaymentRecords] = useState(
    [] as PaymentRecordWithId[]
  )

  useEffect(() => {
    if (!args.placeId) return
    setIsLoading(true)
    const unsub = firebase
      .placeVisitsHistory({
        placeId: args.placeId,
        periodDates
      })
      .onSnapshot(
        snapshot => {
          const list: PaymentRecordWithId[] = []
          if (snapshot.size) {
            snapshot.forEach(doc =>
              list.push({
                paymentRecordId: doc.id,
                ...doc.data()
              } as PaymentRecordWithId)
            )
          }
          // console.log('paymentRecords list', list)
          setPaymentRecords(list)
          setIsLoading(false)
          setIsReady(true)
        },
        error => console.error(error)
      )
    return unsub
  }, [args.placeId, periodDates])

  return { isReady, isLoading, paymentRecords, periodDates, setPeriodDates }
}
