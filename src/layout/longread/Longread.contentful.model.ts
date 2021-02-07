import { Document } from '@contentful/rich-text-types'

export interface LongreadSpaModel {
  title: string
  subtitle: string
  // metaTitle: string
  // metaDescription: string
  // jsonFileName: string
  dated: string
  body: Document
}
