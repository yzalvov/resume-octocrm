import { Box } from 'grommet'
import { NoContentFallbackNote } from '../../../components'

export const NoActiveVisitsNote = (prop: { note: string }) => {
  return (
    <Box
      height="xsmall"
      align="center"
      justify="center"
      pad={{ bottom: 'large' }}
      animation={[
        {
          type: 'fadeIn',
          delay: 250,
          duration: 300
        },
        {
          type: 'slideRight',
          delay: 200,
          duration: 300
        }
      ]}
    >
      <NoContentFallbackNote note={prop.note} />
    </Box>
  )
}
