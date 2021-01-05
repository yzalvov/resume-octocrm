import { Box, Text } from 'grommet'
import {
  // FingerPrint,
  // Logout,
  Power,
} from 'grommet-icons'
import { Button } from '../../components'
import { LogoBrand } from './LogoBrand'
import { SignedInCompany } from './SignedInCompany'
import {
  themedColors,
  useColorSchemeOption,
  SECONDARY_TEXT_COLOR,
  PAGE_SIDE_GAP,
} from '../../theme-custom'
// import { DropDownMenu } from './DropDownMenu'
import * as routes from '../../routes'
// import { ScreenWidthContainer } from '../../layout'

export const AppBar = ({ history }) => {
  const textGrayColor = useColorSchemeOption(SECONDARY_TEXT_COLOR)
  const buttonGrayColor = useColorSchemeOption(
    themedColors.secondarySystemGroupedBackground
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
        <LogoBrand color={textGrayColor} />
      </Button>
      <Box direction="row" align="center" gap="xlarge">
        <SignedInCompany companyNameColor={textGrayColor} />
        {/* <DropDownMenu /> */}
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
      </Box>
    </Box>
  )
}
