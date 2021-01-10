import { useContext } from 'react'
import { Box, Text } from 'grommet'
import { Power } from 'grommet-icons'
import { Button } from '../../components'
import { LogoBrand } from './LogoBrand'
import { SignedInCompany } from './SignedInCompany'
import {
  themedColors,
  useColorSchemeOption,
  SECONDARY_TEXT_COLOR,
  PAGE_SIDE_GAP,
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
  const isPartnerReady = Boolean(auth.user && profile.partner)
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
        <LogoBrand color={textGrayColor} />
      </Button>
      {isPartnerReady && (
        <Box direction="row" align="center" gap="xlarge">
          <SignedInCompany
            companyName={profile.partner.companyName}
            companyEmail={auth.user && auth.user.email}
            companyNameColor={textGrayColor}
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
    </Box>
  )
}
