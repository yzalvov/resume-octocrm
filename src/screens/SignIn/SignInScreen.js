import { Box, Heading, Main } from 'grommet'
import { SecondaryRoundedContainer } from '../../components'
import { SignInForm } from './SignInForm'
// import {
//   // ScreenCenterProgress,
//   ScreenWidthContainer,
// } from '../../layout'

export const SignInScreen = () => {
  return (
    <Box height="82vh">
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
        {/* <ScreenCenterProgress label="Подключаемся..." /> */}
      </Box>
    </Box>
  )
}
