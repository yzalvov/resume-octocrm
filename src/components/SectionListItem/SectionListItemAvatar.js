import { Box, Text } from 'grommet'
import { PersonCircle } from '../../svg'
import { useColorSchemeOption, byThemeTextHeight } from '../../theme-custom'

export const SectionListItemAvatar = ({ size, ...rest }) => {
  const color = useColorSchemeOption({ light: 'light-4', dark: 'dark-4' })
  const height = byThemeTextHeight(size)
  return (
    <Box align="center" justify="center" {...rest}>
      <Box style={{ height: height, width: height }}>
        <Text style={{ lineHeight: 0 }} color={color}>
          <PersonCircle />
        </Text>
      </Box>
    </Box>
  )
}
