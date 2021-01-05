import { Box } from 'grommet'
import { FoldingSection } from '../../../components'
import { ChartWidget } from './ChartWidget'
import { StatsWidget } from './StatsWidget'

const DATA = {
  stats: {},
  chart: {},
}

export const ThisMonthSection = ({ title, isSectionDisabled }) => {
  return (
    <FoldingSection title={title} isSectionDisabled={isSectionDisabled}>
      <Box direction="row">
        <StatsWidget data={DATA.stats} />
        <ChartWidget
          flex
          pad={{ horizontal: 'large', bottom: 'medium' }}
          margin={{ left: 'medium' }}
          data={DATA.chart}
        />
      </Box>
    </FoldingSection>
  )
}
