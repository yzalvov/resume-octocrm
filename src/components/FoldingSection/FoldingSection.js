import { useState } from 'react'
import { Box, Collapsible } from 'grommet'
import { FoldingSectionContainer } from './FoldingSectionContainer'
import { SectionHeaderWithTabs } from './SectionHeaderWithTabs'
import { SectionContent } from '../Section'

export const FoldingSection = ({
  title,
  isSectionDisabled,
  children,
  tabsParams,
  isLoading
}) => {
  const [open, setOpen] = useState(true)
  function handleSectionFold() {
    setOpen(state => !state)
  }
  const foldingSwitchParams = {
    isSectionOpen: open,
    handleSectionFold
  }
  return (
    <FoldingSectionContainer pad={{ horizontal: 'medium' }}>
      <Box pad={{ horizontal: 'small' }}>
        <SectionHeaderWithTabs
          title={title}
          isSectionDisabled={isSectionDisabled}
          tabsParams={tabsParams}
          foldingSwitchParams={foldingSwitchParams}
          isLoading={isLoading}
        />
        <Collapsible open={!isSectionDisabled && !isLoading && open}>
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
