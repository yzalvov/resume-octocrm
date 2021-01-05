import { Box, Form } from 'grommet'
import { Button } from '../../components/index'
import { FormInput } from './FormInput'
import { useSignInFormFacade } from './useSignInFormFacade'

export const SignInForm = ({ buttonSize }) => {
  const {
    formValue,
    setFormValue,
    handleSignIn,
    isLoading,
    emailInputError,
  } = useSignInFormFacade({
    emailInputName: 'email',
    passwordInputName: 'password',
    emailErrorMsg: 'Исправьте email',
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
        <Button primary label="Войти" type="submit" size={buttonSize} />
      </Box>
    </Form>
  )
}
