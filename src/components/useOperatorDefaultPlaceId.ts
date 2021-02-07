import { useContext } from 'react'
import { GlobalStateContext } from '../context'

export function useOperatorDefaultPlaceId() {
  const { profile } = useContext(GlobalStateContext)
  const [placeId] = profile.operator && profile.operator.places
  return { placeId }
}
