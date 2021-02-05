import { Box } from 'grommet'
import { NoContentFallbackNote } from '../../components'

export const NoVisitsInPeriodNote = (prop: {
  dateString: string
  note: string
}) => {
  return (
    <Box
      flex
      margin={{ left: 'medium' }}
      animation={[
        {
          type: 'fadeIn',
          delay: 50,
          duration: 300
        },
        {
          type: 'slideRight',
          duration: 300
        }
      ]}
    >
      <Box align="start" gap="xsmall">
        <NoContentFallbackNote note={prop.dateString} size="large" />
        <NoContentFallbackNote note={prop.note} />
      </Box>
    </Box>
  )
}
