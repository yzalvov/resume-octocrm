import { Box, BoxTypes } from 'grommet'
import styled from 'styled-components'

export const TertiaryHoverInteractiveContainer = (prop: BoxTypes) => {
  return <StyledBox elevation="xxxsmall" round="small" {...prop} />
}

const StyledBox = styled(Box)`
  transition: background-color 0.07s ease-in, color 0.07s ease-in !important;
  transition: opacity 0.1s ease-in;
  &:hover {
    color: unset;
  }
  &:focus {
    outline: none;
  }
`
