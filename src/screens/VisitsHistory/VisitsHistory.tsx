import { match, RouteComponentProps } from 'react-router-dom'
import { sub, startOfMonth, endOfMonth } from 'date-fns'
import { Box } from 'grommet'
import { PageContentContainer } from '../../layout'
import { Section } from '../../components'
import { DateRangeSelect } from './DateRangeSelect'
import { SearchBox } from './SearchBox'
import { PaymentRecordsTable } from './PaymentRecordsTable'
import { useVisitsHistoryFacade } from './useVisitsHistoryFacade'
import { PeriodDates } from '../../models'

const INITIAL_PERIOD_DATES: PeriodDates = [
  sub(startOfMonth(new Date()), { months: 1 }),
  endOfMonth(new Date())
]

interface VisitHistryScreenProps extends RouteComponentProps<any> {
  match: match & {
    params: {
      placeId: string
    }
  }
}

export const VisitsHistoryScreen: React.FC<VisitHistryScreenProps> = ({
  match
}) => {
  const placeId = match && match.params && match.params.placeId
  const {
    isReady,
    isLoading,
    paymentRecords,
    periodDates,
    setPeriodDates
  } = useVisitsHistoryFacade({
    initialPeriodDates: INITIAL_PERIOD_DATES,
    placeId
  })
  return (
    <PageContentContainer margin={{ vertical: 'large' }}>
      <Section title="История визитов" {...{ isReady }}>
        {isReady && (
          <Box gap="medium">
            <Box direction="row" gap="medium" align="center" justify="between">
              <DateRangeSelect
                {...{ isLoading, periodDates, setPeriodDates }}
              />
              <SearchBox records={paymentRecords} />
            </Box>
            <PaymentRecordsTable records={paymentRecords} />
          </Box>
        )}
      </Section>
    </PageContentContainer>
  )
}
