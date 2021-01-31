import React, { useContext, useEffect } from 'react'
import { firebase, firebaseApp } from '../components/firebase'
import {
  GlobalDispatchContext,
  GlobalStateContext,
  useOperatorPlacesInContext
} from '../context'
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
      const unsub = firebase.operatorProfile().onSnapshot(
        snapshot => {
          // console.log('operator profile: ', snapshot.data())
          dispatch({
            type: 'setProfile',
            data: { isReady: true, operator: snapshot.data() }
          })
          // setIsLoading(false)
        },
        error => console.error(error)
      )

      return () => {
        unsub()
        // Reset profile considering that withAuthen redirects to SignInScreen if user == null.
        dispatch({ type: 'clearProfile' })
      }
    }, [auth, dispatch])

    useOperatorPlacesInContext()

    // // #testing
    // useEffect(() => {
    //   if (!auth.user) return
    //   async function logOperatorCustomClaims() {
    //     try {
    //       const idTokenResult = await firebaseApp
    //         .auth()
    //         .currentUser.getIdTokenResult()
    //       console.log('idTokenResult.claims', idTokenResult.claims)
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }

    //   logOperatorCustomClaims()
    // }, [auth])

    return !profile.isReady ? (
      <ScreenCenterProgress />
    ) : profile.operator ? (
      <Component {...props} />
    ) : (
      <NoPartnerFallback />
    )
  }

  return withAuthen(WithAuthorization)
}
