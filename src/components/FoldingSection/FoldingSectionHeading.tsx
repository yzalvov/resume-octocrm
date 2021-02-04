import { Button, HeadingProps } from 'grommet'
import { SectionHeading } from '../Section'

interface FoldingSectionHeadingProps extends HeadingProps {
  title: string
  onClick?: () => void
  disabled?: boolean
}

export const FoldingSectionHeading = ({
  title,
  onClick,
  disabled,
  ...rest
}: FoldingSectionHeadingProps) => (
  <Button {...{ onClick, disabled }}>
    <SectionHeading {...{ title, ...rest }} />
  </Button>
)
