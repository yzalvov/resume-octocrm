import { Box, Heading } from 'grommet'
import { SecondaryRoundedContainer } from '../../components'
import { SignInForm } from './SignInForm'
import { FullHeightBox, ScreenCenterProgress } from '../../layout'

export const SignInScreen = () => {
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
  // return <ScreenCenterProgress />
}
