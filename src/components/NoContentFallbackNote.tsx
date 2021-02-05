import { Text, TextProps } from 'grommet'
// import { themedColors, useColorSchemeOption } from '../theme-custom'

export const NoContentFallbackNote = (prop: { note: string } & TextProps) => {
  const { note, ...textProps } = prop
  // const color = useColorSchemeOption(themedColors.meterBackground)
  return (
    <Text
      // color={color}
      color="status-unknown"
      size="1rem"
      weight={600}
      style={{ lineHeight: 0.9 }}
      {...textProps}
    >
      {note}
    </Text>
  )
}
