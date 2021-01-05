import { Box } from 'grommet'
import { PAGE_SIDE_GAP } from '../theme-custom'

export const ScreenWidthContainer = props => (
  <Box
    width={{ max: 'xlarge' }}
    margin={{ horizontal: 'auto' }}
    pad={PAGE_SIDE_GAP}
    {...props}
  />
)
