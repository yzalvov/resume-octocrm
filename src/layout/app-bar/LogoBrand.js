import { Box, Text } from 'grommet'
import { Brand, Logo } from '../../svg'

// import GradientLogo_webp from '../../images/gradient-logo-octopass.webp'
// import GradientLogo_png from '../../images/gradient-logo-octopass@50x.png'

// const GradientLogo = () => (
//   <picture style={{ display: 'flex', flexDirection: 'column' }}>
//     <source srcSet={GradientLogo_webp} type="image/webp" />
//     <img
//       src={GradientLogo_png}
//       alt="octopass"
//       type="image/png"
//       width="38"
//       height="auto"
//     />
//   </picture>
// )

export const LogoBrand = ({ color, height = 30 }) => (
  <Text
    as="div"
    color={color}
    style={{ paddingTop: 3, paddingBottom: 3 }} // To match with Logout button height.
  >
    <Box direction="row" align="center">
      <Logo height={height} />
      {/* <GradientLogo /> */}
      <Brand height={height - 2} />
    </Box>
  </Text>
)
