import { Box } from 'grommet'
import {
  useColorSchemeOption,
  themedColors,
  PAGE_SIDE_GAP
} from '../../theme-custom'

export const SecondaryRoundedContainer = props => {
  const background = useColorSchemeOption(
    themedColors.secondarySystemGroupedBackground
  )
  return (
    <Box
      round
      background={background}
      elevation="xxsmall"
      margin={PAGE_SIDE_GAP}
      {...props}
    />
  )
}
