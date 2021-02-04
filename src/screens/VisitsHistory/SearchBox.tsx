import { formatNumString } from '@yzalvov/octoshared-ts'
import { Box, Text } from 'grommet'
import { PaymentRecordWithId } from '../../models'

export const SearchBox = (prop: { records: PaymentRecordWithId[] }) => {
  const visitsAmount = formatNumString(prop.records.length, 0)
  const paidTotal = formatNumString(
    prop.records.reduce(
      (accum: number, item: PaymentRecordWithId) => accum + item.visitCost,
      0
    )
  )
  return (
    <Box direction="row" gap="medium">
      <Text>Визитов: {visitsAmount}</Text>
      <Text>Всего: {paidTotal} ₽</Text>
      <Text></Text>
    </Box>
  )
}
