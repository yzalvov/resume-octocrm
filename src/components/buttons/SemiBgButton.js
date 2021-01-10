import hexRgb from 'hex-rgb'
import styled from 'styled-components'
import { colors } from '../../theme-custom'

function getRgba(hex, alfa) {
  const rgb = hexRgb(hex, { format: 'array' })
  rgb.pop()
  return [...rgb, alfa].join(',')
}

const Button = styled.button`
  position: relative;
  /* display: inline-block; */
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 1;
  min-width: 52px;
  min-height: 52px;
  border-radius: 1rem;
  overflow: hidden;
  &:hover {
    /* box-shadow: 0px 0px 0px 2px #ff4040; */
    box-shadow: ${p => `0px 0px 0px 2px rgba(${getRgba(p.color, p.opacity)})`};
  }
`
const Layer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const Background = styled(Layer)`
  background-color: ${p => p.color};
  opacity: ${p => p.opacity};
`
const Inner = styled.div`
  position: relative;
  padding: 12px;
  /* background-color: lightblue; */
  color: ${p => p.color};
`

export const SemiBgButton = ({ children, grommetColor, opacity, ...props }) => {
  const color = colors[grommetColor]
  return (
    <Button color={color} opacity={opacity} {...props}>
      <Background color={color} opacity={opacity} />
      <Inner color={color}>{children}</Inner>
    </Button>
  )
}
