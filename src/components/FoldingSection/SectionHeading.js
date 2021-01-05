import { Button, Heading } from 'grommet'
import { GLOBAL_LETTER_SPACING } from '../../theme-custom'

export const SectionHeading = ({ title, onClick, disabled, ...rest }) => (
  <Button onClick={onClick} disabled={disabled}>
    <Heading
      size="small"
      style={{
        // fontSize: 30,
        lineHeight: 1,
        letterSpacing: GLOBAL_LETTER_SPACING,
      }}
      {...rest}
    >
      {title}
    </Heading>
  </Button>
)
