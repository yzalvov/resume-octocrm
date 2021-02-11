import { Box, Text } from 'grommet'
import { Document } from '@contentful/rich-text-types'
import { format, parseJSON } from 'date-fns'
import {
  LongreadSpaModel,
  LongreadPaperContainer,
  LongreadStickyHeader,
  LongreadContentfulRichBody,
  LongreadPageContentContainer
} from '../../layout/longread'
import jsonContent from '../../data/offer.json'

export const OfferScreen = () => {
  const { title, subtitle, body, dated } = jsonContent as LongreadSpaModel
  const date = format(parseJSON(dated), 'dd.MM.yyyy')
  return (
    <LongreadPageContentContainer>
      <LongreadPaperContainer>
        <LongreadStickyHeader
          {...{ title, subtitle }}
          containerProp={{ pad: { top: 'small', bottom: 'xsmall' } }}
        />
        <LongreadContentfulRichBody document={body as Document} />
        <Box pad={{ top: 'medium', bottom: 'small' }}>
          <Text size="small" weight={600}>
            Данная редакция действует от {date} г.
          </Text>
        </Box>
      </LongreadPaperContainer>
    </LongreadPageContentContainer>
  )
}
