import React from 'react'
import * as routes from './routes'
import { GlobalStateContext } from '../context'
import { ScreenCenterProgress } from '../layout'

export const withAuthentication = Component => {
  const WithAuthentication = props => {
    const { auth } = React.useContext(GlobalStateContext)
    // Redirect null users to SignInScreen if not already.
    React.useEffect(() => {
      if (auth.user === null && props.location.pathname !== routes.SIGN_IN) {
        props.history.replace(routes.SIGN_IN)
      }
    }, [auth, props.history, props.location.pathname])

    // return <ScreenCenterProgress label="Подключаемся..." />
    return auth.ready ? <Component {...props} /> : <ScreenCenterProgress />
  }
  return WithAuthentication
}
