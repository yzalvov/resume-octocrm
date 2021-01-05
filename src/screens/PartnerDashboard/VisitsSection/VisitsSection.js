import { FoldingSection } from '../../../components'
import { OpenVisitsList } from './OpenVisitsList'

export const VisitsSection = ({ title, isSectionDisabled, tabsParams }) => {
  return (
    <FoldingSection
      title={title}
      tabsParams={tabsParams}
      isSectionDisabled={isSectionDisabled}
    >
      <OpenVisitsList />
    </FoldingSection>
  )
}
