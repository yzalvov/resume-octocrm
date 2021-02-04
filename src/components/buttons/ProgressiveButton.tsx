// import styled from 'styled-components'
import { Button } from './Button'
import { Spinner } from '../Spinner'
import { ButtonType } from 'grommet'

const SpinnerIcon = () => (
  <Spinner
  // color={color}
  // size={label ? 'large' : 'xlarge'}
  // margin={{ top: 'xlarge' }}
  />
)

export interface ProgressiveButtonType extends ButtonType {
  isLoading?: boolean
  loadingLabel?: React.ReactNode
}

export const ProgressiveButton = ({
  isLoading,
  loadingLabel,
  ...props
}: ProgressiveButtonType) => {
  const moderatedProps = {
    ...props,
    ...(isLoading
      ? {
          icon: <SpinnerIcon />,
          label: loadingLabel,
          onClick: () => null
        }
      : {})
  }
  return <Button {...moderatedProps} />
}
