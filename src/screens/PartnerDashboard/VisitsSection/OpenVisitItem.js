import { useState } from 'react'
import { Box, Text } from 'grommet'
import { Clock, Logout } from 'grommet-icons'
// import { motion, AnimatePresence } from 'framer-motion'
import { useColorSchemeOption } from '../../../theme-custom'
import { SectionListItem } from '../../../components'
import { VisitsTextColumn } from './VisitsTextColumn'
import { useInterval } from '../../../customHooks'

const SECOND_OPACITY = 0.7

export const OpenVisitItem = ({
  visit,
  handleFinishVisit,
  visitBeenFinished
}) => {
  const secondColor = useColorSchemeOption({
    light: 'dark-4',
    dark: 'status-unknown'
  })
  const buttonProps = { icon: <Logout />, color: 'status-critical' }

  const [duration, setDuration] = useState(visit.duration)
  useInterval(() => setDuration(visit.duration), duration ? 1000 : null)

  return (
    //<AnimatePresence key={index}>
    //  <motion.div
    //    initial={ANIM_PROPS.anim}
    //    animate={ANIM_PROPS.active}
    //    exit={ANIM_PROPS.exit}
    //  >
    <SectionListItem
      // key={index}
      buttonProps={{
        ...buttonProps,
        onClick: () =>
          handleFinishVisit({
            name: visit.personDetails.name,
            userId: visit.userId
          }),
        isLoading: visitBeenFinished && visitBeenFinished === visit.userId
      }}
    >
      <Box direction="row" gap="large">
        <VisitsTextColumn
          flex
          mainText={visit.personDetails.name}
          secondText={visit.personDetails.phone}
          secondColor={secondColor}
          secondOpacity={SECOND_OPACITY}
        />
        <Box direction="row" gap="large" width="68%">
          <Box align="center">
            <VisitsTextColumn
              mainText={
                <Box direction="row" gap="small">
                  <Text size="inherit">{visit.visitDetails.startedDay}</Text>
                  <Text size="inherit">{visit.visitDetails.startedTime}</Text>
                </Box>
              }
              secondText={`начало визита ${visit.visitDetails.maskedVisitId}`}
              secondColor={secondColor}
              secondOpacity={SECOND_OPACITY}
            />
          </Box>
          <Box align="center">
            <VisitsTextColumn
              mainText={
                <Box direction="row" align="center" gap="xsmall">
                  <Clock
                    color={secondColor}
                    style={{ opacity: SECOND_OPACITY }}
                  />
                  <Text size="inherit">
                    <Text size="inherit">{duration.hours}</Text>
                    <Text weight="bold"> ч </Text>
                    <Text size="inherit">{duration.minutes}</Text>
                    <Text weight="bold"> м </Text>
                  </Text>
                </Box>
              }
              secondText="длительность"
              secondColor={secondColor}
              secondOpacity={SECOND_OPACITY}
            />
          </Box>
        </Box>
      </Box>
    </SectionListItem>
    // </motion.div>
    // </AnimatePresence>
  )
}
