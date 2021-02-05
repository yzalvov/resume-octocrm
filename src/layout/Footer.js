import { Box, Footer as GrommetFooter } from 'grommet'
import { PAGE_SIDE_GAP } from '../theme-custom'
import { Button, GrayText, Link } from '../components'
import * as routes from '../routes'

const FooterItem = props => <GrayText size="small" weight={600} {...props} />

export const Footer = () => {
  return (
    <GrommetFooter
      pad={{ vertical: 'medium', ...PAGE_SIDE_GAP }}
      align="baseline"
    >
      <FooterItem>{new Date().getFullYear()} Symbiotic LLC</FooterItem>
      <Box direction="row" gap="large" align="baseline">
        <Link to={routes.OFFER}>
          <FooterItem>Оферта</FooterItem>
        </Link>
        <Button
          label={<FooterItem>Поддержка</FooterItem>}
          plain
          href="mailto:support@octopass.ru"
        />
      </Box>
    </GrommetFooter>
  )
}
