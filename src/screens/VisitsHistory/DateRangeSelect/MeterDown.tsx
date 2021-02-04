import { Box, Meter, Text } from 'grommet'
import styled from 'styled-components'
import { themedColors, useColorSchemeOption } from '../../../theme-custom'

interface MeterDownTypes {
  meterValue: number
  meterLabel: number
}

export const MeterDown = (prop: MeterDownTypes) => {
  const background = useColorSchemeOption(themedColors.meterBackground)
  return (
    <Box align="center">
      <StackContainer>
        <Meter
          type="circle"
          background={background}
          values={[{ value: prop.meterValue }]}
          size="26"
          thickness="2"
        />
        <LabelContainer>
          <Text size="small" weight="bold">
            {prop.meterLabel}
          </Text>
        </LabelContainer>
      </StackContainer>
    </Box>
  )
}

const StackContainer = styled(Box).attrs({})`
  position: relative;
`

const LabelContainer = styled(Box).attrs({})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
