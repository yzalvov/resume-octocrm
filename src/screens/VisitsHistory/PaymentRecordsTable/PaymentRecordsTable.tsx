import { Box, DataTable } from 'grommet'
import { PaymentRecordWithId } from '../../../models'
import { themedColors, useColorSchemeOption } from '../../../theme-custom'
import { PaymentRecordColumns } from './PaymentRecordColumns'

export const PaymentRecordsTable = (arg: {
  records: PaymentRecordWithId[]
}) => {
  const headerBackgroundColor = useColorSchemeOption(
    themedColors.secondarySystemGroupedBackground
  )
  return (
    <Box height={{ max: '60vh' }} overflow="scroll">
      <DataTable
        pin
        // size="medium"
        // fill
        columns={PaymentRecordColumns}
        data={arg.records}
        sortable
        sort={{
          property: 'visitEnded',
          direction: 'desc'
        }}
        background={{
          header: {
            color: headerBackgroundColor,
            opacity: 0.95
          }
        }}
      />
    </Box>
  )
}
