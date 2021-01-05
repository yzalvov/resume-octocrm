import { Box, Heading } from 'grommet'
import { TertiaryRoundedContainer } from '../../../../components'
import { useColorSchemeOption } from '../../../../theme-custom'
import { formatRub, formatNum } from '../../../../helpers'
import { useStatsFacade } from './useStatsFacade'

const ColumnsContainer = props => <Box direction="row" {...props} />
const Column = props => (
  <Box
    pad={{ horizontal: 'medium', vertical: 'medium' }}
    margin={{ horizontal: 'small' }}
    {...props}
  />
)
const StatsLine = props => (
  <Heading as="span" level="4" margin={{ vertical: 'xsmall' }} {...props} />
)

export const StatsWidget = ({ data, ...props }) => {
  const secondaryColor = useColorSchemeOption({
    light: 'dark-4',
    dark: 'status-unknown',
  })
  const { earnings, visits, visitors } = useStatsFacade(data)
  return (
    <Box {...props}>
      <TertiaryRoundedContainer flex pad="none">
        <ColumnsContainer>
          <Column>
            <StatsLine>Заработано</StatsLine>
            <StatsLine color={secondaryColor}>Визитов</StatsLine>
            <StatsLine color={secondaryColor}>Посетителей</StatsLine>
          </Column>
          <Column>
            <StatsLine>{formatRub(earnings, 2)} ₽</StatsLine>
            <StatsLine color={secondaryColor}>{formatNum(visits)}</StatsLine>
            <StatsLine color={secondaryColor}>{formatNum(visitors)}</StatsLine>
          </Column>
        </ColumnsContainer>
      </TertiaryRoundedContainer>
    </Box>
  )
}
