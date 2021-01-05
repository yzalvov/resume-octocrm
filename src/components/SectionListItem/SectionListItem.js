import { Box } from 'grommet'
import { SectionListItemContainer } from './SectionListItemContainer'
import { SectionListItemAvatar } from './SectionListItemAvatar'
import { SectionListItemContentContainer } from './SectionListItemContentContainer'
import { SectionListItemButton } from './SectionListItemButton'
// import { SemiBgButton } from '../buttons'

export const SectionListItem = ({ children, buttonProps }) => {
  return (
    <SectionListItemContainer>
      <SectionListItemAvatar size="xxlarge" />
      <SectionListItemContentContainer flex>
        {children}
      </SectionListItemContentContainer>
      <Box
        // pad="xsmall"
        margin={{ horizontal: 'large' }}
        justify="center"
      >
        <SectionListItemButton {...buttonProps} />
      </Box>
    </SectionListItemContainer>
  )
}
