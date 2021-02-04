import { Box } from 'grommet'
import { SectionHeading } from './SectionHeading'
import { Spinner } from '../Spinner'

interface HeaderWithProgressProps {
  title: string
  isLoading?: boolean
}

export const SectionHeaderWithProgress = (prop: HeaderWithProgressProps) => {
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'small' }}
    >
      <SectionHeading margin={{ vertical: 'medium' }} title={prop.title} />
      {prop.isLoading && <Spinner />}
    </Box>
  )
}
