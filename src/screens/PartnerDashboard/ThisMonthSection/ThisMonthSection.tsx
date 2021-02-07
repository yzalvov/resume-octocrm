import { Box } from 'grommet'
import { startOfMonth, endOfMonth, format } from 'date-fns'
import { FoldingSection, useOperatorDefaultPlaceId } from '../../../components'
import { useThisMonthFacade } from './useThisMonthFacade'
import { ChartWidget } from './ChartWidget'
import { StatsWidget } from './StatsWidget'
import { NoVisitsThisMonthNote } from './NoVisitsThisMonthNote'
import { PeriodDates } from '../../../models'

const INITIAL_PERIOD_DATES: PeriodDates = [
  startOfMonth(new Date()),
  endOfMonth(new Date())
]

export const ThisMonthSection = (prop: {
  title: string
  isSectionDisabled: boolean
}) => {
  const { placeId } = useOperatorDefaultPlaceId()
  const { paymentRecords, isLoading } = useThisMonthFacade({
    initialPeriodDates: INITIAL_PERIOD_DATES,
    placeId
  })

  const dateString = format(new Date(), 'MMMM yyyy')

  return (
    <FoldingSection
      title={prop.title}
      isSectionDisabled={prop.isSectionDisabled}
      isLoading={isLoading}
    >
      <Box direction="row">
        <StatsWidget data={paymentRecords} />
        {paymentRecords.length ? (
          <ChartWidget
            flex
            pad={{ horizontal: 'large', bottom: 'medium' }}
            margin={{ left: 'medium' }}
            data={paymentRecords}
          />
        ) : (
          <NoVisitsThisMonthNote
            dateString={`${dateString},`}
            note="визитов нет."
          />
        )}
      </Box>
    </FoldingSection>
  )
}
