import { useState } from 'react'
import { validateEmail } from './validateEmail'

export function useSignInFormFacade({
  emailInputName,
  passwordInputName,
  emailErrorMsg,
}) {
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

  async function handleSignIn({ value }) {
    const isEmailValid = validateEmail(value[emailInputName])
    if (!isEmailValid) {
      setIsEmailInvalid(true)
      return
    }
    setIsLoading(true)
    try {
      // const emailString = value.phone.replace(/\s/g, '')
      // const result = await firebase.auth.signInWithPhoneNumber(
      //   phoneStr,
      //   recaptcha.verifier
      // )
    } catch (error) {
      console.log('handleSignIn error', error)
      // alert(translateErrorMsg(error.code))
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formValue,
    setFormValue: considerEmailError,
    handleSignIn,
    isLoading,
    emailInputError: isEmailInvalid ? emailErrorMsg : undefined,
  }
}
