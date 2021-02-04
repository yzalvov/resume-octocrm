import 'typeface-inter'
import { defaultProps } from 'grommet'

// console.log(defaultProps.theme)

const { global } = defaultProps.theme
// console.log(global)

export const GLOBAL_LETTER_SPACING = -0.4

export const theme = {
  global: {
    font: {
      family: `Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', sans-serif`
    },
    elevation: {
      light: {
        xxsmall: '0px 0px 1rem rgba(226, 221, 215, 0.35)',
        xxxsmall: '0px 0px .2rem rgba(226, 221, 215, .75)'
      },
      dark: {
        xxsmall: '0px 0px .6rem rgba(0, 0, 0, 0.25)',
        xxxsmall: '0px 0px .2rem rgba(0, 0, 0, 0.15)'
      }
    }
  }
}

export const colors = { ...global.colors, ...theme.global.colors }

export const themedColors = {
  systemGroupedBackground: { light: 'light-2', dark: 'dark-1' },
  secondarySystemGroupedBackground: { light: 'white', dark: 'dark-2' },
  tertiarySystemGroupedBackground: { light: 'light-1', dark: 'dark-3' },
  tertiaryButtonHoverBackground: { light: 'light-3', dark: 'dark-2' },
  meterBackground: { light: 'light-4', dark: 'dark-4' }
}

export const SECONDARY_TEXT_COLOR = {
  light: 'dark-2',
  dark: 'light-3'
}

export const PAGE_SIDE_GAP = { horizontal: 'small' }

export const byThemeTextHeight = size =>
  ({
    small: '1rem',
    large: '1.444rem',
    xlarge: '2rem',
    xxlarge: '3.45rem'
  }[size] ||
  size ||
  '1.33rem')
