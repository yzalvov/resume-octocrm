// import styled from 'styled-components'
import { Button } from './Button'
import { Spinner } from '../Spinner'

const SpinnerIcon = () => (
  <Spinner
  // color={color}
  // size={label ? 'large' : 'xlarge'}
  // margin={{ top: 'xlarge' }}
  />
)

export const ProgressiveButton = ({ isLoading, loadingLabel, ...props }) => {
  const moderatedProps = {
    ...props,
    ...(isLoading
      ? {
          icon: <SpinnerIcon />,
          label: loadingLabel,
          onClick: () => null,
        }
      : {}),
  }
  return <Button {...moderatedProps} />
}
