import { Box, Button, Collapsible, Tabs, Tab } from 'grommet'
import { NewWindow } from 'grommet-icons'
import { SectionHeading } from './SectionHeading'
import { SectionFoldSwitch } from './SectionFoldSwitch'
import { Spinner } from '../Spinner'

export const SectionHeaderWithTabs = ({
  title,
  foldingSwitchParams,
  tabsParams,
  isSectionDisabled,
  isLoading,
}) => {
  const { isSectionOpen, handleSectionFold } = foldingSwitchParams
  const headingButtonProps = {
    disabled: isSectionDisabled,
    onClick: isSectionDisabled ? () => null : handleSectionFold,
  }
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'small' }}
    >
      <SectionHeading
        margin={{ vertical: 'medium' }}
        title={title}
        {...headingButtonProps}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {tabsParams && (
            <Box flex align="end" pad={{ horizontal: 'medium' }}>
              <Collapsible open={isSectionOpen}>
                <Tabs activeIndex={0}>
                  <Tab title={tabsParams.titleTab1} />
                  <Button
                    as="div"
                    // onClick={tabsParams.handleClickTab2}
                    disabled
                    onClick={() => null}
                  >
                    <Tab
                      title={tabsParams.titleTab2}
                      icon={<NewWindow />}
                      reverse
                      // disabled
                    />
                  </Button>
                </Tabs>
              </Collapsible>
            </Box>
          )}
          <SectionFoldSwitch
            open={isSectionOpen}
            onClick={handleSectionFold}
            disabled={isSectionDisabled}
          />
        </>
      )}
    </Box>
  )
}