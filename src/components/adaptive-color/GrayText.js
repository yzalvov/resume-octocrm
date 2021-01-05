import { Text } from 'grommet'
import { useColorSchemeOption } from '../../theme-custom'

export const GrayText = props => {
  const color = useColorSchemeOption({ light: 'dark-4', dark: 'dark-4' })
  return <Text color={color} {...props} />
}
