import { Box } from 'grommet'
import { OpenVisitItem } from './OpenVisitItem'

export const OpenVisitsList = ({
  list,
  handleFinishVisit,
  visitBeenFinished
}) => {
  return (
    <Box gap="small">
      {list.map((visit, index) => (
        <OpenVisitItem
          key={index}
          {...{ visit, handleFinishVisit, visitBeenFinished }}
        />
      ))}
    </Box>
  )
}
