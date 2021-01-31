import { PaymentRecord } from '@yzalvov/octoshared-ts'
import { endOfMonth, startOfMonth } from 'date-fns'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { firebase } from '../../components/firebase'
import { GlobalStateContext } from '../../context'

const [dateLeft, dateRight] = [
  startOfMonth(new Date()),
  endOfMonth(new Date())
  // new Date(2021, 0, 22)
]

export function useVisitsHistoryFacade() {
  const [isLoading, setIsLoading] = useState(true)
  const [paymentRecords, setPaymentRecords] = useState([] as PaymentRecord[])
  const { profile } = useContext(GlobalStateContext)

  useEffect(() => {
    if (!profile.currentPlace) return
    console.log('profile.currentPlace.placeId', profile.currentPlace.placeId)
    const unsub = firebase
      .placeVisitsHistory({
        placeId: profile.currentPlace.placeId,
        dateLeft,
        dateRight
      })
      .onSnapshot(
        snapshot => {
          const list: PaymentRecord[] = []
          if (snapshot.size) {
            snapshot.forEach(doc => list.push(doc.data() as PaymentRecord))
          }
          setPaymentRecords(list)
          setIsLoading(false)
        },
        error => console.error(error)
      )
    return unsub
  }, [profile.currentPlace])

  return { isLoading, paymentRecords }
}
