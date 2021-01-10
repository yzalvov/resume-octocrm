import { FoldingSection } from '../../../components'
import { OpenVisitsList } from './OpenVisitsList'
import { useOpenVisitsFacade } from './useOpenVisitsFacade'

export const VisitsSection = ({ title, isSectionDisabled, tabsParams }) => {
  const {
    isLoading,
    openVisits,
    handleFinishVisit,
    finishingUID,
  } = useOpenVisitsFacade()
  // console.log('openVisits', openVisits)
  const listProps = {
    list: openVisits,
    handleFinishVisit,
    finishingUID,
  }
  return (
    <FoldingSection
      title={title}
      tabsParams={tabsParams}
      isSectionDisabled={isLoading || isSectionDisabled}
      isLoading={isLoading}
    >
      <OpenVisitsList {...listProps} />
    </FoldingSection>
  )
}
