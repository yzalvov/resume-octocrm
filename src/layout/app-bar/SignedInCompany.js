import { Box, Heading } from 'grommet'
import { GrayText } from '../../components'

const LINE_HEIGHT = 1.2

export const SignedInCompany = ({
  // companyName = 'ООО “Фитнес Бро”',
  companyName,
  companyEmail,
  companyNameColor,
}) => (
  <Box>
    {companyName && (
      <Heading
        as="span"
        level="5"
        color={companyNameColor}
        style={{ fontWeight: 700, lineHeight: LINE_HEIGHT }}
      >
        {companyName}
      </Heading>
    )}
    <GrayText
      size="xsmall"
      weight={600}
      color="dark-4"
      style={{ letterSpacing: 'normal', lineHeight: LINE_HEIGHT }}
    >
      {companyEmail}
    </GrayText>
  </Box>
)
