import { Box, Button, Collapsible, Tabs, Tab } from 'grommet'
import { NewWindow } from 'grommet-icons'
import { FoldingSectionHeading } from './FoldingSectionHeading'
import { SectionFoldSwitch } from './SectionFoldSwitch'
import { Spinner } from '../Spinner'

export const SectionHeaderWithTabs = ({
  title,
  foldingSwitchParams,
  tabsParams,
  isSectionDisabled,
  isLoading
}) => {
  const { isSectionOpen, handleSectionFold } = foldingSwitchParams
  const headingButtonProps = {
    disabled: isSectionDisabled,
    onClick: isSectionDisabled ? () => null : handleSectionFold
  }

  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ vertical: 'small' }}
    >
      <FoldingSectionHeading
        margin={{ vertical: 'medium' }}
        title={title}
        {...headingButtonProps}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {!isSectionDisabled && tabsParams && (
            <Box flex align="end" pad={{ horizontal: 'medium' }}>
              <Collapsible open={isSectionOpen}>
                <Tabs activeIndex={0}>
                  <Tab title={tabsParams.titleTab1} />
                  <Button
                    as="div"
                    onClick={tabsParams.handleClickTab2}
                    // disabled
                    // onClick={() => null}
                  >
                    <Tab
                      title={tabsParams.titleTab2}
                      icon={<NewWindow />}
                      reverse
                      onClick={tabsParams.handleClickTab2}
                    />
                  </Button>
                </Tabs>
              </Collapsible>
            </Box>
          )}
          <SectionFoldSwitch
            open={!isSectionDisabled && isSectionOpen}
            onClick={handleSectionFold}
            disabled={isSectionDisabled}
          />
        </>
      )}
    </Box>
  )
}
