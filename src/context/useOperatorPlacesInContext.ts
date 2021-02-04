import { Place } from '@yzalvov/octoshared-ts'
import { useEffect, useContext } from 'react'
import { GlobalStateContext, GlobalDispatchContext } from './context'
import { firebase } from '../components/firebase'

interface OperatorPlace extends Place {
  placeId: string
}

export function useOperatorPlacesInContext() {
  const { profile } = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    if (!profile.isReady) return
    const operatorPlaceIds = profile.operator && profile.operator.places
    const unsub = firebase.operatorPlaces({ operatorPlaceIds }).onSnapshot(
      snapshot => {
        const list: Array<OperatorPlace> = []
        if (snapshot.size) {
          snapshot.forEach(doc =>
            list.push({ placeId: doc.id, ...(doc.data() as Place) })
          )
        }
        dispatch({
          type: 'setProfile',
          data: { places: list, currentPlace: list[0] }
        })
      },
      error => console.error(error)
    )
    return unsub
  }, [dispatch, profile.operator, profile.isReady])

  function setCurrentPlaceContext(chosenPlace: OperatorPlace) {
    dispatch({ type: 'setProfile', data: { currentPlace: chosenPlace } })
  }

  return { setCurrentPlaceContext }
}
