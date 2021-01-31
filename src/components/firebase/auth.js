import { useContext, useEffect } from 'react'
import { firebase } from './firebase'
import { GlobalDispatchContext } from '../../context'

export const FirebaseAuth = () => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    const unsub = firebase.auth.onAuthStateChanged(data => {
      const user = boildownUser(data)
      // console.log('user', user)
      dispatch({ type: 'setAuth', data: { ready: true, user } })
    })
    return unsub
  }, [dispatch])

  return null
}

export function translateErrorMsg(code) {
  return (
    {
      // "Unable to load external reCAPTCHA dependencies!"
      'auth/internal-error':
        'Сервис временно недоступен. Повторите попытку позднее.',
      // The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.
      'auth/invalid-verification-code': 'Неверный код. Повторите попытку.',
      // 'auth/requires-recent-login': `Для обновления email профиля требуется свежая авторизация. Используйте прежний email или нажмите "${USE_OTHER_PHONE}" и повторите попытку.`,
      'auth/too-many-requests':
        'Подозрительно много запросов. Номер временно заблокирован. Повторите попытку позднее.',
      // 'There is no user record corresponding to this identifier. The user may have been deleted.',
      'auth/user-not-found':
        'Пользователь не найден. Если вводимые данные верны, свяжитесь с поддержкой. Возможно, доступ приостановлен.',
      // 'The password is invalid or the user does not have a password.',
      'auth/wrong-password':
        'Неверный пароль. Повторите попытку или свяжитесь с поддержкой для восстановления доступа.'
    }[code] || 'Неизвестная ошибка. Свяжитесь с нами.'
  )
}

export function boildownUser(data) {
  let user = data
  if (user) {
    // Keep only data needed
    const { phoneNumber, email, uid, displayName } = user
    user = {
      phoneNumber,
      email,
      uid,
      displayName
    }
  }
  return user
}

export const SignOutHandler = ({ callback, ...rest }) => {
  async function signOut() {
    try {
      await firebase.auth.signOut()
      if (callback) callback()
    } catch (error) {
      console.log('signOut() error', error)
    }
  }

  return <div style={{ display: `inline-block` }} onClick={signOut} {...rest} />
}
