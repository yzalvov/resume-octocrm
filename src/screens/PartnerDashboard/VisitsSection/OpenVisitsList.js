import { Box, Text } from 'grommet'
import { Clock } from 'grommet-icons'
import { Logout } from 'grommet-icons'
import { useColorSchemeOption } from '../../../theme-custom'
import { useOpenVisitsFacade } from './useOpenVisitsFacade'
import { SectionListItem } from '../../../components'
import { VisitsTextColumn } from './VisitsTextColumn'

const SECOND_OPACITY = 0.7

export const OpenVisitsList = props => {
  const secondColor = useColorSchemeOption({
    light: 'dark-4',
    dark: 'status-unknown',
  })
  const openVisits = useOpenVisitsFacade()
  const buttonProps = {
    icon: <Logout />,
    color: 'status-critical',
  }
  return (
    <Box gap="small">
      {openVisits.map((item, index) => {
        const [h, m] = item.duration
        return (
          <SectionListItem key={index} buttonProps={buttonProps}>
            <Box direction="row" gap="large">
              <VisitsTextColumn
                flex
                mainText={item.personDetails.name}
                secondText={item.personDetails.phone}
                secondColor={secondColor}
                secondOpacity={SECOND_OPACITY}
              />
              <Box direction="row" gap="large" width="68%">
                <Box align="center">
                  <VisitsTextColumn
                    mainText={item.visitDetails.startedStr}
                    secondText={`начало визита ${item.visitDetails.sessionId}`}
                    secondColor={secondColor}
                    secondOpacity={SECOND_OPACITY}
                  />
                </Box>
                <Box align="center">
                  <VisitsTextColumn
                    // mainText={item.duration}
                    mainText={
                      <Box direction="row" align="center" gap="xsmall">
                        <Clock
                          color={secondColor}
                          style={{ opacity: SECOND_OPACITY }}
                        />
                        <Text size="inherit">
                          <Text size="inherit">{h}</Text>
                          <Text weight="bold"> ч </Text>
                          <Text size="inherit">{m}</Text>
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
        )
      })}
    </Box>
  )
}
