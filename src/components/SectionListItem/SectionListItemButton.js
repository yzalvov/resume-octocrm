// import hexRgb from 'hex-rgb'
import { Box, Button, Stack, Text } from 'grommet'
// import { colors } from '../../theme-custom'

export const SectionListItemButton = ({ ...props }) => {
  return (
    <Button
      plain={false}
      // primary
      {...props}
    />
  )
}

// function getRgba(hex, alfa) {
//   const rgb = hexRgb(hex, { format: 'array' })
//   rgb.pop()
//   return [...rgb, alfa].join(',')
// }
