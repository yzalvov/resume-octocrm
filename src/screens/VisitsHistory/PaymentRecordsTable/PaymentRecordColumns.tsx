import { format } from 'date-fns'
import { ColumnConfig, Text } from 'grommet'
// import firebase from 'firebase'
import { formatNumString } from '@yzalvov/octoshared-ts'
import { PaymentRecordWithId } from '../../../models'
import { maskedFirestoreDocId } from '../../../components'
import styled from 'styled-components'

const TruncatedText = styled(Text).attrs({ trancate: true })``

// const DateTimeStretchedString = (prop: {
//   timestamp: firebase.firestore.Timestamp
// }) => {
//   const date = prop.timestamp.toDate()
//   return (
//     <Box
//       gap="small"
//       direction="row"
//       justify="between"
//       pad={{ right: 'medium' }}
//     >
//       <Text>{format(date, 'yyyy-MM-dd')}</Text>
//       <TruncatedText>{format(date, 'hh:mm')}</TruncatedText>
//     </Box>
//   )
// }

export const PaymentRecordColumns: ColumnConfig<PaymentRecordWithId>[] = [
  {
    primary: true,
    property: 'paymentRecordId',
    header: 'ID визита',
    render: (d: PaymentRecordWithId) => (
      <Text weight="normal">{maskedFirestoreDocId(d.paymentRecordId)}</Text>
    ),
    search: true
  },
  {
    property: 'maskedUserName',
    header: 'Имя',
    render: (d: PaymentRecordWithId) => d.maskedUserName,
    search: true
  },
  {
    property: 'visitStarted',
    header: 'Начало',
    render: (d: PaymentRecordWithId) => (
      <TruncatedText>
        {format(d.visitStarted.toDate(), 'yyyy-MM-dd hh:mm')}
      </TruncatedText>
      // <DateTimeStretchedString timestamp={d.visitStarted} />
    )
  },
  {
    property: 'visitEnded',
    header: 'Окончание',
    render: (d: PaymentRecordWithId) => (
      <TruncatedText>
        {format(d.visitEnded.toDate(), 'yyyy-MM-dd hh:mm')}
      </TruncatedText>
    )
  },
  {
    property: 'visitCost',
    header: 'Чек, ₽',
    align: 'end',
    render: (d: PaymentRecordWithId) => (
      <Text weight={600}>{formatNumString(d.visitCost)}</Text>
    ),
    search: true
  }
]
