import { Box, Heading, Menu } from 'grommet'
import { Logout } from 'grommet-icons'
import { themedColors, useColorSchemeOption } from '../../theme-custom'

export const DropDownMenu = () => {
  const background = useColorSchemeOption(themedColors.systemGroupedBackground)
  return (
    <Menu
      dropAlign={{ left: 'left', top: 'bottom' }}
      dropBackground={{
        color: background,
        // opacity: 'medium'
      }}
      dropProps={{ elevation: 'xxsmall' }}
      items={[
        {
          label: 'Выйти',
          icon: <Logout />,
          gap: 'small',
          // onClick: () => history.push(routes.DASHBOARD),
        },
      ]}
    />
  )
}
