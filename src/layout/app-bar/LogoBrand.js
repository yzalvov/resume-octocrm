import { Box, Text } from 'grommet'
import { Brand, Logo } from '../../svg'

export const LogoBrand = ({ color, height = 30 }) => (
  <Text
    as="div"
    color={color}
    style={{ paddingTop: 3, paddingBottom: 3 }} // To match with Logout button height.
  >
    <Box direction="row" align="center">
      <Logo height={height} />
      <Brand height={height - 2} />
    </Box>
  </Text>
)
