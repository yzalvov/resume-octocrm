// import React from 'react'
import { Box } from 'grommet'
import { Spinning, SpinningIOS14Style } from '../svg'
import { colors, byThemeTextHeight } from '../theme-custom'

export const Spinner = ({ color, size, ...rest }) => {
  const height = byThemeTextHeight(size)
  return (
    <Box align="center" justify="center" {...rest}>
      <Box style={{ height, width: height, margin: 1.5 }}>
        {/* <Spinning color={colors[color]} /> */}
        <SpinningIOS14Style color={colors[color]} />
      </Box>
    </Box>
  )
}
