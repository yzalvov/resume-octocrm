import { useState, useEffect } from 'react'
import { firebase } from '../../../components/firebase'
import { OpenVisit } from './open-visit.model'

type OpenVisitsList = OpenVisit[]

export function useOpenVisitsFacade(args: { placeId: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [openVisits, setActiveVisits] = useState([] as OpenVisitsList)
  const [visitBeenFinished, setVisitBeenFinished] = useState(
    null as null | string
  )

  // Subscribe to open visits.
  useEffect(() => {
    if (!args.placeId) return
    const unsub = firebase
      .placeCurrentVisits({ placeId: args.placeId })
      .onSnapshot(
        snapshot => {
          const list: OpenVisitsList = []
          if (snapshot.size) {
            snapshot.forEach(doc => list.push(new OpenVisit(doc.data())))
          }
          setActiveVisits(list)
          setIsLoading(false)
        },
        error => console.error(error)
      )
    return unsub
  }, [args.placeId])

  // Handle manual finish.
  async function handleFinishVisit(args: { name: string; userId: string }) {
    const confirmed = window.confirm(`Завершить визит для ${args.name}?`)
    if (!confirmed) return
    try {
      setVisitBeenFinished(args.userId)
      await firebase.finishVisit({ userId: args.userId })
      // console.log('result', result)
    } catch (error) {
      console.error(error)
    } finally {
      setVisitBeenFinished(null)
    }
  }

  return { isLoading, openVisits, handleFinishVisit, visitBeenFinished }
}
