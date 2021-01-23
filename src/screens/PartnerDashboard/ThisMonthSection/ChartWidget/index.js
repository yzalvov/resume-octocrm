import { Box, Chart, Stack, Text } from 'grommet'
import { format } from '../../../../components/date-fns'
import { useChartFacade } from './useChartFacade'
import { formatNumString } from 'octoshared-ts'

const ChartText = props => <Text size="small" weight="bold" {...props} />

export const ChartWidget = ({ data, ...props }) => {
  const { bounds, values, yAxis, xAxis } = useChartFacade(data)
  // console.log('values', values)
  const chartProps = {
    size: { width: 'full', height: 'small' },
    bounds,
    values
    // overflow: true,
  }

  return (
    <Box {...props}>
      {chartProps.values && (
        <>
          <Box
            direction="row"
            justify="between"
            // width="medium"
            margin={{ bottom: 'small' }}
          >
            {xAxis.map(x => {
              const val = format(x, 'd MMM')
              return <ChartText key={val}>{val}</ChartText>
            })}
          </Box>
          <Stack guidingChild="last">
            <Chart
              {...chartProps}
              type="line"
              round
              color={{ color: 'accent-3', opacity: 'strong' }}
              thickness="xxsmall"
            />
            <Box fill justify="between">
              {yAxis.map((y, index) => {
                const first = index === 0
                const last = index === yAxis.length - 1 && !first
                let align
                if (first) {
                  align = 'start'
                } else if (last) {
                  align = 'end'
                } else {
                  align = 'center'
                }
                return (
                  <Box key={y} direction="row" align={align}>
                    {first || last ? null : (
                      <Box pad={{ horizontal: 'small' }}>
                        <ChartText>{formatNumString(y)} ₽</ChartText>
                      </Box>
                    )}
                    <Box
                      border="top"
                      style={{ borderWidth: first || last ? 2 : 1 }}
                      flex
                    />
                  </Box>
                )
              })}
            </Box>
            <Chart
              {...chartProps}
              type="area"
              color={{ color: 'accent-1', opacity: 'weak' }}
              thickness="hair"
            />
          </Stack>
        </>
      )}
    </Box>
  )
}
