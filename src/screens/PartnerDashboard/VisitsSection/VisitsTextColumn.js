import { Box, Text } from 'grommet'

export const VisitsTextColumn = ({
  mainText,
  secondText,
  secondColor,
  secondOpacity,
  ...props
}) => {
  return (
    <Box {...props}>
      <Text size="large" weight="bold">
        {mainText}
      </Text>
      <Text
        size="small"
        weight={600}
        color={secondColor}
        style={{ opacity: secondOpacity }}
      >
        {secondText}
      </Text>
    </Box>
  )
}
