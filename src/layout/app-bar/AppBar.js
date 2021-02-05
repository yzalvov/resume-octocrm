import { useContext } from 'react'
import { Box, Text } from 'grommet'
import { Power } from 'grommet-icons'
import { Button } from '../../components'
import { LogoBrand } from './LogoBrand'
import { SignedInPlace } from './SignedInPlace'
import {
  themedColors,
  useColorSchemeOption,
  SECONDARY_TEXT_COLOR,
  PAGE_SIDE_GAP
} from '../../theme-custom'
import * as routes from '../../routes'
import { GlobalStateContext } from '../../context'
import { SignOutHandler } from '../../components/firebase'

export const AppBar = ({ history }) => {
  const { auth, profile } = useContext(GlobalStateContext)
  const textGrayColor = useColorSchemeOption(SECONDARY_TEXT_COLOR)
  const buttonGrayColor = useColorSchemeOption(
    themedColors.secondarySystemGroupedBackground
  )
  const isOperatorReady = Boolean(
    auth.user && profile.operator && profile.currentPlace
  )

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'small' }}
      margin={PAGE_SIDE_GAP}
    >
      <Button onClick={() => history.push(routes.DASHBOARD)}>
        <LogoBrand color={textGrayColor} height={28} />
      </Button>
      {/* <Collapsible open={isOperatorReady}> */}
      {isOperatorReady && (
        <Box
          direction="row"
          align="center"
          gap="xlarge"
          animation={['slideDown', 'fadeIn']}
        >
          <SignedInPlace
            placeName={profile.currentPlace && profile.currentPlace.title}
            operatorEmail={auth.user && auth.user.email}
            placeNameColor={textGrayColor}
          />
          {/* <DropDownMenu /> */}
          <SignOutHandler>
            <Box elevation="xxsmall" round>
              <Button
                primary
                color={buttonGrayColor}
                icon={
                  <Power
                    size="19"
                    color={textGrayColor}
                    style={{ marginTop: -2 }}
                  />
                }
                label={
                  <Text size="small" color={textGrayColor}>
                    Выйти
                  </Text>
                }
                size="small"
                gap="xsmall"
                onClick={() => null}
              />
            </Box>
          </SignOutHandler>
        </Box>
      )}
      {/* </Collapsible> */}
    </Box>
  )
}
