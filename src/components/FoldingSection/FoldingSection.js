import { useState } from 'react'
import { Box, Collapsible } from 'grommet'
import { FoldingSectionContainer } from './FoldingSectionContainer'
import { SectionHeaderWithTabs } from './SectionHeaderWithTabs'
import { SectionContent } from './SectionContent'

// const MARGIN =

export const FoldingSection = ({
  title,
  isSectionDisabled,
  children,
  tabsParams,
}) => {
  const [open, setOpen] = useState(!isSectionDisabled && true)
  function handleSectionFold() {
    setOpen(state => !state)
  }
  const foldingSwitchParams = {
    isSectionOpen: open,
    handleSectionFold,
  }
  return (
    <FoldingSectionContainer pad={{ horizontal: 'medium' }}>
      <Box pad={{ horizontal: 'small' }}>
        <SectionHeaderWithTabs
          title={title}
          isSectionDisabled={isSectionDisabled}
          tabsParams={tabsParams}
          foldingSwitchParams={foldingSwitchParams}
        />
        <Collapsible open={open}>
          <SectionContent
            margin={{ bottom: 'medium' }}
            pad={{ bottom: 'small' }}
          >
            {children}
          </SectionContent>
        </Collapsible>
      </Box>
    </FoldingSectionContainer>
  )
}
