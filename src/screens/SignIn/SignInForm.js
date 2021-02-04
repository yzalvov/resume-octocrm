import { Box, Form } from 'grommet'
import { ProgressiveButton } from '../../components/index'
import { FormInput } from './FormInput'
import { useSignInFormFacade } from './useSignInFormFacade'
import { SignInErrorNotification } from './SignInErrorNotification'

export const SignInForm = ({ buttonSize = undefined }) => {
  const {
    formValue,
    setFormValue,
    handleSignIn,
    isLoading,
    emailInputError,
    errorNotif,
    resetErrorNotif
  } = useSignInFormFacade({
    emailInputName: 'email',
    passwordInputName: 'password',
    emailErrorMsg: 'Исправьте email'
  })
  return (
    <Form value={formValue} onChange={setFormValue} onSubmit={handleSignIn}>
      <FormInput
        label="Email"
        name="email"
        type="email"
        // placeholder="name@company.com"
        required
        error={emailInputError}
        autoFocus
      />
      <FormInput
        label="Пароль"
        name="password"
        type="password"
        // placeholder="••••••••••••••"
        required
      />
      <Box pad={{ top: 'medium', bottom: 'small' }}>
        {/* <Button primary label="Войти" type="submit" size={buttonSize} /> */}
        <ProgressiveButton
          primary
          label="Войти"
          loadingLabel="Авторизуем..."
          isLoading={isLoading}
          size={buttonSize}
          type="submit"
        />
      </Box>
      {errorNotif && (
        <SignInErrorNotification
          message={errorNotif}
          handleClose={resetErrorNotif}
        />
      )}
      {/* <SignInErrorNotification
        message="Неверный пароль. Повторите попытку или свяжитесь с поддержкой для восстановления доступа."
        // message="Неверный пароль. Повторите попытку или свяжитесь с поддержкой для восстановления доступа. Неверный пароль. Повторите попытку или свяжитесь с поддержкой для восстановления доступа."
        handleClose={resetErrorNotif}
      /> */}
    </Form>
  )
}
