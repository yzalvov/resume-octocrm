import { Box, BoxTypes, Heading, Text } from 'grommet'
import styled from 'styled-components'

const HeaderContainer = styled(Box).attrs({})`
  /* position: sticky; */
  /* z-index: 1; */
  /* top: 0; */
`

export const LongreadStickyHeader = (prop: {
  title: string
  subtitle: string
  containerProp: BoxTypes
}) => {
  return (
    <HeaderContainer {...prop.containerProp}>
      <Heading
        margin="none"
        style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.4 }}
      >
        {prop.title}
      </Heading>
      <Text size="small" weight={600}>
        {prop.subtitle}
      </Text>
    </HeaderContainer>
  )
}
