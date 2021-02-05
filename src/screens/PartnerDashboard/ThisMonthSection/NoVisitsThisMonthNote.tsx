import { Box } from 'grommet'
import { NoContentFallbackNote } from '../../../components'

export const NoVisitsThisMonthNote = (prop: {
  dateString: string
  note: string
}) => {
  return (
    <Box
      align="center"
      justify="center"
      flex
      pad={{ bottom: 'medium' }}
      animation={[
        {
          type: 'fadeIn',
          delay: 250,
          duration: 300
          // size: 'medium'
        },
        {
          type: 'slideRight',
          delay: 200,
          duration: 300
          // size: 'medium'
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
