import { useContext } from 'react'
import { FoldingSection } from '../../../components'
import { GlobalStateContext } from '../../../context'
import { OpenVisitsList } from './OpenVisitsList'
import { useOpenVisitsFacade } from './useOpenVisitsFacade'

export const VisitsSection = ({ title, isSectionDisabled, tabsParams }) => {
  const { profile } = useContext(GlobalStateContext)
  // console.log(
  //   'profile.currentPlace && profile.currentPlace.placeId',
  //   profile.currentPlace && profile.currentPlace.placeId
  // )
  const {
    isLoading,
    openVisits,
    handleFinishVisit,
    visitBeenFinished
  } = useOpenVisitsFacade({
    placeId: profile.currentPlace && profile.currentPlace.placeId
  })
  // console.log('openVisits', openVisits)
  const listProps = {
    list: openVisits,
    handleFinishVisit,
    visitBeenFinished
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
