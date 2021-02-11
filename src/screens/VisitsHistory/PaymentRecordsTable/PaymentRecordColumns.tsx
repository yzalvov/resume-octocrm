import { format } from 'date-fns'
import { ColumnConfig, Text } from 'grommet'
// import firebase from 'firebase'
import { formatNumString } from '@yzalvov/octoshared-ts'
import { PaymentRecordWithId } from '../../../models'
import { maskedFirestoreDocId } from '../../../components'
import styled from 'styled-components'

const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm'

const TruncatedText = styled(Text).attrs({ trancate: true })``

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
        {format(d.visitStarted.toDate(), DATE_TIME_FORMAT)}
      </TruncatedText>
    )
  },
  {
    property: 'visitEnded',
    header: 'Окончание',
    render: (d: PaymentRecordWithId) => (
      <TruncatedText>
        {format(d.visitEnded.toDate(), DATE_TIME_FORMAT)}
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
