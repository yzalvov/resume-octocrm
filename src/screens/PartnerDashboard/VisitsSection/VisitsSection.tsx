import { useContext } from 'react'
import { FoldingSection } from '../../../components'
import { GlobalStateContext } from '../../../context'
import { OpenVisitsList } from './OpenVisitsList'
import { useOpenVisitsFacade } from './useOpenVisitsFacade'
import { NoActiveVisitsNote } from './NoActiveVisitsNote'

export const VisitsSection = (prop: {
  title: string
  isSectionDisabled?: boolean
  tabsParams: any
}) => {
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
      title={prop.title}
      tabsParams={prop.tabsParams}
      isSectionDisabled={prop.isSectionDisabled}
      isLoading={isLoading}
    >
      {openVisits.length ? (
        <OpenVisitsList {...listProps} />
      ) : (
        <NoActiveVisitsNote note="Активных визитов нет." />
      )}
    </FoldingSection>
  )
}
