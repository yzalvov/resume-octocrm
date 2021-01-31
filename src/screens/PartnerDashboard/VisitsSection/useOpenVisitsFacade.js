import { useState, useEffect, useContext } from 'react'
import { firebase } from '../../../components/firebase'
import { OpenVisit } from './OpenVisit.model'

import { useOperatorFirstPlaceId } from '../../../components'

export function useOpenVisitsFacade() {
  const { placeId } = useOperatorFirstPlaceId()
  // console.log('paymentRecords', paymentRecords)
  // Subscribe to open visits.
  const [isLoading, setIsLoading] = useState(true)
  const [openVisits, setActiveVisits] = useState()
  useEffect(() => {
    const unsub = firebase.placeCurrentVisits({ placeId }).onSnapshot(
      snapshot => {
        const list = []
        if (snapshot.size) {
          snapshot.forEach(doc => list.push(new OpenVisit(doc.data())))
        }
        setActiveVisits(list)
        setIsLoading(false)
      },
      error => console.error(error)
    )
    return unsub
  }, [])

  // Handle manual finish.
  const [finishingVisitId, setFinishingVisitId] = useState()
  async function handleFinishVisit({ name, userId }) {
    const confirmed = window.confirm(`Завершить визит для ${name}?`)
    if (!confirmed) return
    try {
      setFinishingVisitId(userId)
      await firebase.finishVisit({ userId })
      // console.log('result', result)
    } catch (error) {
      console.error(error)
    } finally {
      setFinishingVisitId(null)
    }
  }

  return { isLoading, openVisits, handleFinishVisit, finishingVisitId }
}
