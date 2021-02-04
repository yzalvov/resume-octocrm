import { Box, BoxTypes, Text } from 'grommet'
import { BackgroundType, ColorType } from 'grommet/utils'
import styled from 'styled-components'
import {
  Button,
  ProgressiveButtonType,
  TertiaryHoverInteractiveContainer
} from '../../../../components'

const ButtonLabelContainer = styled(Box).attrs({
  pad: { vertical: 'small' }
})`
  pointer-events: none; /* For click through onClickOutside drop. */
`
const ButtonLabel = styled(Text).attrs({
  size: 'small'
})`
  pointer-events: none; /* For click through onClickOutside drop. */
`

interface StyledSubmitButtonTypes extends ProgressiveButtonType {
  background?: BackgroundType
  hoverBackground?: ColorType
  meterDown?: number
  boxProps?: BoxTypes
}

export const StyledSubmitButton = ({
  label,
  loadingLabel,
  background,
  hoverBackground,
  boxProps,
  ...rest
}: StyledSubmitButtonTypes) => {
  const Label = () => (
    <ButtonLabelContainer>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonLabelContainer>
  )

  return (
    <TertiaryHoverInteractiveContainer
      fill
      justify="center"
      background={background}
      hoverIndicator={{ color: hoverBackground }}
      onClick={() => null} // Need for the hoverIndicator to work.
      elevation="none"
      focusIndicator={false}
      {...boxProps}
    >
      <Box pad={{ horizontal: 'small' }}>
        <Button label={<Label />} plain fill gap="xsmall" {...rest} />
      </Box>
    </TertiaryHoverInteractiveContainer>
  )
}
