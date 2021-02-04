import { RouteComponentProps } from 'react-router-dom'
import { Box, Heading } from 'grommet'
import { SecondaryRoundedContainer } from '../../components'
import { SignInForm } from './SignInForm'
import { FullHeightBox } from '../../layout'
import { useContext, useEffect } from 'react'
import { GlobalStateContext } from '../../context'
import { DASHBOARD } from '../../routes'

export const SignInScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = useContext(GlobalStateContext)

  useEffect(() => {
    if (!auth.user) return
    history.replace(DASHBOARD)
  }, [auth.user, history])

  return (
    <FullHeightBox>
      <Box width="medium" margin="auto">
        <Heading
          as="h1"
          level="3"
          textAlign="center"
          style={{ fontWeight: 700 }}
          margin={{ top: 'none', bottom: 'medium' }}
        >
          Вход для партнёров
        </Heading>
        <SecondaryRoundedContainer
          pad={{ vertical: 'medium', horizontal: 'large' }}
        >
          <SignInForm />
        </SecondaryRoundedContainer>
      </Box>
    </FullHeightBox>
  )
}
