import { DateInput, DateInputProps } from 'grommet'
import { BackgroundType } from 'grommet/utils'
import { TertiaryHoverInteractiveContainer } from '../../../components'

interface StyledDateInputTypes extends DateInputProps {
  background?: BackgroundType
}

export const StyledDateInput = ({
  inputProps,
  background,
  ...rest
}: StyledDateInputTypes) => (
  <TertiaryHoverInteractiveContainer background={background}>
    <DateInput
      inputProps={{
        plain: true,
        ...inputProps
      }}
      {...rest}
    />
  </TertiaryHoverInteractiveContainer>
)
