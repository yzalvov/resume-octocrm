import { PaymentRecord } from '@yzalvov/octoshared-ts'

export interface PaymentRecordWithId extends PaymentRecord {
  paymentRecordId: string
}
