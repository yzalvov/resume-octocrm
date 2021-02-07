import styled from 'styled-components'
import { PageContentContainer } from '../PageContentContainer'

export const LongreadPageContentContainer = styled(PageContentContainer).attrs({
  margin: { vertical: 'large' }
})`
  @media (min-width: 900px) {
    max-width: 896px;
    margin-right: auto;
    margin-left: auto;
  }
`
