import { Box, Footer as GrommetFooter } from 'grommet'
import { PAGE_SIDE_GAP } from '../theme-custom'
import { GrayText } from '../components'
// import { ScreenWidthContainer } from './ScreenWidthContainer'

const FooterItem = props => <GrayText size="small" weight={600} {...props} />

export const Footer = props => {
  return (
    <GrommetFooter pad={{ vertical: 'medium', ...PAGE_SIDE_GAP }}>
      <FooterItem>
        © &nbsp;{new Date().getFullYear()}&nbsp; Symbiotic LLC
      </FooterItem>
      <Box direction="row" gap="large">
        <FooterItem>Оферта</FooterItem>
        <FooterItem>Поддержка</FooterItem>
      </Box>
    </GrommetFooter>
  )
}
