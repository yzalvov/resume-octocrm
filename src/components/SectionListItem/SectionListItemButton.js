// import hexRgb from 'hex-rgb'
import { ProgressiveButton } from '../buttons'
// import { colors } from '../../theme-custom'

export const SectionListItemButton = ({ ...props }) => {
  return (
    <ProgressiveButton
      // height={{ min: 52 }}
      // width={{ min: 52 }}
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
