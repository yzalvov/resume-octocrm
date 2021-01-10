import { Box } from 'grommet'

import { OpenVisitItem } from './OpenVisitItem'

// export const ANIM_PROPS = {
//   anim: {
//     opacity: 0,
//     scale: 0.96,
//     transition: { duration: 0.2, ease: 'easeIn' },
//   },
//   active: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.2,
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.96,
//     transition: { duration: 0 },
//   },
// }

export const OpenVisitsList = ({ list, handleFinishVisit, finishingUID }) => {
  return (
    <Box gap="small">
      {!list
        ? null
        : list.map((visit, index) => {
            return (
              <OpenVisitItem
                key={index}
                {...{ visit, handleFinishVisit, finishingUID }}
              />
            )
          })}
    </Box>
  )
}
