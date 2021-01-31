import { FoldingSection } from '../../../components'
import { OpenVisitsList } from './OpenVisitsList'
import { useOpenVisitsFacade } from './useOpenVisitsFacade'

export const VisitsSection = ({ title, isSectionDisabled, tabsParams }) => {
  const {
    isLoading,
    openVisits,
    handleFinishVisit,
    finishingVisitId
  } = useOpenVisitsFacade()
  // console.log('openVisits', openVisits)
  const listProps = {
    list: openVisits,
    handleFinishVisit,
    finishingVisitId
  }
  return (
    <FoldingSection
      title={title}
      tabsParams={tabsParams}
      isSectionDisabled={isSectionDisabled}
      isLoading={isLoading}
    >
      <OpenVisitsList {...listProps} />
    </FoldingSection>
  )
}
