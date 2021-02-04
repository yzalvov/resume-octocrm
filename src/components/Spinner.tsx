// import React from 'react'
import { Box, BoxTypes } from 'grommet'
import { SpinningIOS14Style } from '../svg'
import { colors, byThemeTextHeight } from '../theme-custom'

interface SpinnerProps extends BoxTypes {
  color?: string
  size?: string | number
}

export const Spinner = ({ color, size, ...rest }: SpinnerProps) => {
  const height = byThemeTextHeight(size)
  const currentColor = color ? colors[color] : undefined
  return (
    <Box align="center" justify="center" {...rest}>
      <Box style={{ height, width: height, margin: 1.5 }}>
        {/* <Spinning color={colors[color]} /> */}
        <SpinningIOS14Style color={currentColor} />
      </Box>
    </Box>
  )
}
