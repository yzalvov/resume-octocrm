import { formatNumString } from '@yzalvov/octoshared-ts'
import { Box, Text } from 'grommet'
import { PaymentRecordWithId } from '../../models'
import { NoVisitsInPeriodNote } from './NoVisitsInPeriodNote'

export const SearchBox = (prop: { records: PaymentRecordWithId[] }) => {
  const visitsAmount = formatNumString(prop.records.length, 0)
  const paidTotal = formatNumString(
    prop.records.reduce(
      (accum: number, item: PaymentRecordWithId) => accum + item.visitCost,
      0
    )
  )
  return !prop.records.length ? (
    <NoVisitsInPeriodNote
      dateString="Визитов нет,"
      note="выберите другой период."
    />
  ) : (
    <Box
      direction="row"
      gap="large"
      animation={[
        {
          type: 'fadeIn',
          delay: 50,
          duration: 300
        },
        {
          type: 'slideRight',
          duration: 300
        }
      ]}
    >
      <Text weight={600}>Визитов: &nbsp;{visitsAmount}</Text>
      <Text weight={600}>Денег: &nbsp;{paidTotal} ₽</Text>
    </Box>
  )
}
