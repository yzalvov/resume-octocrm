import styled, { css } from 'styled-components'
import { Button as GrommetButton } from 'grommet'
import { FormUp } from 'grommet-icons'

export const Button = styled(GrommetButton)`
  border-radius: 100%;
  & svg {
    transition: transform 0.2s;
    ${p =>
      !p.open &&
      css`
        transform: rotate3d(1, 0, 0, 180deg);
      `}
  }
`

export const SectionFoldSwitch = props => (
  <Button plain icon={<FormUp size="28" />} {...props} />
)
