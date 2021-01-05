import { Box } from 'grommet'
import { TertiaryRoundedContainer } from '../adaptive-color'

export const SectionListItemContainer = ({ children, ...props }) => (
  <TertiaryRoundedContainer {...props}>
    <Box direction="row" align="center" margin={{ vertical: 'small' }}>
      {children}
    </Box>
  </TertiaryRoundedContainer>
)
