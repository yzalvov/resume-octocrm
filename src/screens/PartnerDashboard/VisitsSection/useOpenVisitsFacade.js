import { useState, useEffect } from 'react'
import { firebase } from '../../../components/firebase'
import { OpenVisit } from './OpenVisit.model.ts'

// const DUMMY_DATA = [
//   {
//     uid: 'test-ELENA-uid',
//     personDetails: {
//       name: 'Elena A.',
//       phone: '+7 ••• ••• 38 22',
//     },
//     visitDetails: {
//       startedStr: '2020-10-14  14:40',
//       sessionId: '2LDy-v2wE',
//     },
//     duration: [0, 42],
//   },
//   {
//     uid: 'test-MAXIM-uid',
//     personDetails: {
//       name: 'Максим B.',
//       phone: '+7 ••• ••• 14 21',
//     },
//     visitDetails: {
//       startedStr: '2020-10-14 13:30',
//       sessionId: 'v2wE-2LDy',
//     },
//     duration: [1, 25],
//   },
//   {
//     personDetails: {
//       name: 'Олег C.',
//       phone: '+7 ••• ••• 55 78',
//     },
//     visitDetails: {
//       startedStr: '2020-10-14  10:20',
//       sessionId: 'M1Uu-y4iH',
//     },
//     duration: [2, 11],
//   },
// ]

export function useOpenVisitsFacade() {
  // Subscribe to open visits.
  const [isLoading, setIsLoading] = useState(true)
  const [openVisits, setOpenVisits] = useState()
  useEffect(() => {
    const unsub = firebase.getPartnerCurrentVisitors().onSnapshot(
      snapshot => {
        const list = []
        if (snapshot.size) {
          snapshot.forEach(doc =>
            list.push(new OpenVisit({ uid: doc.id, ...doc.data() }))
          )
        }
        setOpenVisits(list)
        setIsLoading(false)
      },
      error => console.error(error)
    )
    return unsub
  }, [])

  // Handle manual finish.
  const [finishingUID, setFinishingUID] = useState()
  async function handleFinishVisit({ name, uid, session }) {
    const confirmed = window.confirm(`Завершить визит для ${name}?`)
    if (!confirmed) return
    try {
      setFinishingUID(uid)
      let result = await firebase.endVisitByPartner({
        user: { name, uid, session }
      })
      console.log('result', result)
    } catch (error) {
      console.error(error)
      setFinishingUID(null)
    }
  }

  return { isLoading, openVisits, handleFinishVisit, finishingUID }
}
