import { Heading } from 'grommet'
import { useVisitsHistoryFacade } from './useVisitsHistoryFacade'

export const VisitsHistoryScreen = () => {
  const { isLoading, paymentRecords } = useVisitsHistoryFacade()
  console.log('paymentRecords', paymentRecords)
  return (
    <>
      <Heading>VisitsHistoryScreen Here</Heading>
    </>
  )
}
