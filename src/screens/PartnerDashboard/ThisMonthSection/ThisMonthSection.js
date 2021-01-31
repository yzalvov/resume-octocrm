import { Box } from 'grommet'
import { FoldingSection, useOperatorFirstPlaceId } from '../../../components'
import { useThisMonthFacade } from './useThisMonthFacade'
import { ChartWidget } from './ChartWidget'
import { StatsWidget } from './StatsWidget'

export const ThisMonthSection = ({ title, isSectionDisabled }) => {
  const { placeId } = useOperatorFirstPlaceId()
  const { paymentRecords, isLoading } = useThisMonthFacade({ placeId })
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
