import { Box } from 'grommet'
import { useColorSchemeOption, themedColors } from '../../theme-custom'

export const TertiaryRoundedContainer = props => {
  const background = useColorSchemeOption(
    themedColors.tertiarySystemGroupedBackground
  )
  return (
    <Box
      round
      background={background}
      elevation="xxxsmall"
      pad={{ vertical: 'small', horizontal: 'medium' }}
      {...props}
    />
  )
}
