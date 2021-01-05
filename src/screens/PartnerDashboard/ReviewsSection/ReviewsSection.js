import { FoldingSection } from '../../../components'
import { NewReviewsList } from './NewReviewsList'

export const ReviewsSection = ({ title, isSectionDisabled, tabsParams }) => {
  return (
    <FoldingSection
      title={title}
      isSectionDisabled={isSectionDisabled}
      tabsParams={tabsParams}
    >
      <NewReviewsList />
    </FoldingSection>
  )
}
