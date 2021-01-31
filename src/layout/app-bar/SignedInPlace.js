import { Box, Heading } from 'grommet'
import { GrayText } from '../../components'

const LINE_HEIGHT = 1.1

export const SignedInPlace = ({ placeName, operatorEmail, placeNameColor }) => (
  <Box>
    {placeName && (
      <Heading
        as="span"
        level="5"
        color={placeNameColor}
        style={{ fontWeight: 700, lineHeight: LINE_HEIGHT }}
      >
        {placeName}
      </Heading>
    )}
    <GrayText
      size="xsmall"
      weight={600}
      color="dark-4"
      style={{ letterSpacing: 'normal', lineHeight: LINE_HEIGHT }}
    >
      {operatorEmail}
    </GrayText>
  </Box>
)
