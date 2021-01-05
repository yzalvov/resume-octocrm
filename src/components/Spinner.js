// import React from 'react'
import { Box } from 'grommet'
import { Spinning } from '../svg'
import { colors, byThemeTextHeight } from '../theme-custom'

export const Spinner = ({ color, size, ...rest }) => {
  const height = byThemeTextHeight(size)
  return (
    <Box align="center" justify="center" {...rest}>
      <Box style={{ height }}>
        <Spinning color={colors[color]} />
      </Box>
    </Box>
  )
}
