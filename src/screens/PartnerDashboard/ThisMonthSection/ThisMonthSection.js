import { Box } from 'grommet'
import { startOfMonth, endOfMonth } from 'date-fns'
import { FoldingSection, useOperatorFirstPlaceId } from '../../../components'
import { useThisMonthFacade } from './useThisMonthFacade'
import { ChartWidget } from './ChartWidget'
import { StatsWidget } from './StatsWidget'

const INITIAL_PERIOD_DATES = [startOfMonth(new Date()), endOfMonth(new Date())]

export const ThisMonthSection = ({ title, isSectionDisabled }) => {
  const { placeId } = useOperatorFirstPlaceId()
  const { paymentRecords, isLoading } = useThisMonthFacade({
    initialPeriodDates: INITIAL_PERIOD_DATES,
    placeId
  })
  return (
    <FoldingSection
      title={title}
      isSectionDisabled={isSectionDisabled}
      isLoading={isLoading}
    >
      <Box direction="row">
        <StatsWidget data={paymentRecords} />
        <ChartWidget
          flex
          pad={{ horizontal: 'large', bottom: 'medium' }}
          margin={{ left: 'medium' }}
          data={paymentRecords}
        />
      </Box>
    </FoldingSection>
  )
}
