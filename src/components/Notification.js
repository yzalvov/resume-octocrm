import { Box, Button, Layer, Heading } from 'grommet'
import { FormClose } from 'grommet-icons'

// #TODO Implement autoclosing button with Meter around
// https://storybook.grommet.io/?path=/story/visualizations-meter--circle

export const Notification = ({ Icon, message, color, handleClose }) => {
  return (
    <Layer
      position="bottom"
      modal={false}
      margin={{ vertical: 'medium', horizontal: 'small' }}
      onEsc={handleClose}
      responsive={false}
      plain
      style={{ width: '100%', maxWidth: '700px' }}
    >
      <Box
        align="center"
        direction="row"
        gap="small"
        justify="between"
        round="medium"
        elevation="xxsmall"
        pad={{ vertical: 'small', horizontal: 'small' }}
        background={color}
        margin={{ horizontal: 'medium' }}
      >
        <Box align="center" direction="row" gap="xsmall">
          <Icon />
          <Heading
            as="div"
            level="5"
            style={{ letterSpacing: -0.3, maxWidth: 'unset', fontWeight: 500 }}
          >
            {message}
          </Heading>
        </Box>
        <Button icon={<FormClose />} onClick={handleClose} plain />
      </Box>
    </Layer>
  )
}
