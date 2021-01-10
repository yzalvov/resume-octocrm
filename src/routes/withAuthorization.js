import React, { useContext, useEffect } from 'react'
import { firebase } from '../components/firebase'
import { GlobalDispatchContext, GlobalStateContext } from '../context'
import { withAuthentication as withAuthen } from './withAuthentication'
import { ScreenCenterProgress } from '../layout'
import { NoPartnerFallback } from '../components'

export const withAuthorization = Component => {
  const WithAuthorization = props => {
    const dispatch = useContext(GlobalDispatchContext)
    const { auth, profile } = useContext(GlobalStateContext)

    // const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      if (!auth.user) return
      const unsub = firebase.getProfileRef().onSnapshot(
        snapshot => {
          dispatch({
            type: 'setProfile',
            data: { ready: true, partner: snapshot.data() },
          })
          // setIsLoading(false)
        },
        error => console.error(error)
      )

      return () => {
        unsub()
        // Reset profile considering that withAuthen redirects to SignInScreen if user == null.
        dispatch({ type: 'cleanProfile' })
      }
    }, [auth, dispatch])

    return !profile.ready ? (
      <ScreenCenterProgress />
    ) : profile.partner ? (
      <Component {...props} />
    ) : (
      <NoPartnerFallback />
    )
  }

  return withAuthen(WithAuthorization)
}
