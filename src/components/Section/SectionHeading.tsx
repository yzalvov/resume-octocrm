import { Heading, HeadingProps } from 'grommet'
import { GLOBAL_LETTER_SPACING } from '../../theme-custom'

interface SectionHeadingProps {
  title: string
}

export const SectionHeading = ({
  title,
  ...rest
}: SectionHeadingProps & HeadingProps) => (
  <Heading
    size="small"
    style={{
      lineHeight: 1,
      letterSpacing: GLOBAL_LETTER_SPACING
    }}
    // as="h1"
    // level={2}
    {...rest}
  >
    {title}
  </Heading>
)
