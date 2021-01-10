import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { validateEmail } from './validateEmail'
import { firebase, translateErrorMsg } from '../../components/firebase'
import * as routes from '../../routes'

export function useSignInFormFacade({
  emailInputName,
  passwordInputName,
  emailErrorMsg,
}) {
  const history = useHistory()
  const [formValue, setFormValue] = useState({
    [emailInputName]: '',
    [passwordInputName]: '',
  })
  const [isLoading, setIsLoading] = useState()
  const [isEmailInvalid, setIsEmailInvalid] = useState()

  function considerEmailError(val) {
    if (isEmailInvalid && val[emailInputName] !== formValue[emailInputName]) {
      setIsEmailInvalid(false)
    }
    setFormValue(val)
  }

  const [errorNotif, setErrorNotif] = useState()
  async function handleSignIn({ value }) {
    const isEmailValid = validateEmail(value[emailInputName])
    if (!isEmailValid) {
      setIsEmailInvalid(true)
      return
    }
    setIsLoading(true)
    try {
      // console.log('value', value)
      const [email, password] = [
        value[emailInputName].replace(/\s/g, ''),
        value[passwordInputName].replace(/\s/g, ''),
      ]
      await firebase.signIn({ email, password })
      // console.log('result', result)
      history.push(routes.DASHBOARD)
    } catch (error) {
      console.log('handleSignIn error', error)
      // alert(translateErrorMsg(error.code))
      setErrorNotif(translateErrorMsg(error.code))
      setIsLoading(false)
    }
  }

  return {
    formValue,
    setFormValue: considerEmailError,
    handleSignIn,
    isLoading,
    emailInputError: isEmailInvalid ? emailErrorMsg : undefined,
    errorNotif,
    resetErrorNotif: () => setErrorNotif(null),
  }
}
