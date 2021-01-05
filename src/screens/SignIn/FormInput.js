import { FormField, TextInput } from 'grommet'
import { SmallFormFieldLabel } from './SmallFormFieldLabel'

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
  required,
  autoFocus,
  ...rest
}) => (
  <FormField
    label={<SmallFormFieldLabel>{label}</SmallFormFieldLabel>}
    htmlfor={name}
    name={name}
    {...rest}
  >
    <TextInput
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      autoFocus={autoFocus}
    />
  </FormField>
)
