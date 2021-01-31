import { useContext } from 'react'
import { GlobalStateContext } from '../context'

export function useOperatorFirstPlaceId() {
  const { profile } = useContext(GlobalStateContext)
  const [placeId] = profile.operator && profile.operator.places
  return { placeId }
}
