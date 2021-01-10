import { Box } from 'grommet'
import { ThisMonthSection } from './ThisMonthSection'
import { ReviewsSection } from './ReviewsSection'
import { VisitsSection } from './VisitsSection'
import * as routes from '../../routes'
// import { ScreenCenterProgress } from '../../layout'

const PLACE_ID = 'tB2oNxV24u25Ba1wGwZz' // #testing

const placeNewTabPath = (path, id) => path.split(':').shift() + id

function openNewTab(path) {
  const win = window.open(path, '_blank')
  win.focus()
}

function handleTabClick(routerPath) {
  const path = placeNewTabPath(routerPath, PLACE_ID)
  openNewTab(path)
}

const reviewsTabsParams = {
  titleTab1: 'новые',
  titleTab2: 'архив',
  handleClickTab2: () => handleTabClick(routes.REVIEWS),
}
const historyTabsParams = {
  titleTab1: 'активные',
  titleTab2: 'история',
  handleClickTab2: () => handleTabClick(routes.VISITS),
}

export const PartnerDashboardScreen = () => {
  return (
    <Box gap="large" margin={{ vertical: 'xlarge' }}>
      {/* <ThisMonthSection title="В этом месяце" />
      <ReviewsSection
        title="Отзывы"
        isSectionDisabled
        tabsParams={reviewsTabsParams}
      /> */}
      <VisitsSection title="Визиты" tabsParams={historyTabsParams} />
    </Box>
  )
  // return <ScreenCenterProgress />
}
