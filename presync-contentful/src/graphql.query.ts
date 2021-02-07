import { gql } from 'graphql-request'

export const query = gql`
  query LongreadPages {
    pageList: octoCrmLongreadPageCollection {
      items {
        title
        subtitle
        # metaTitle
        # metaDescription
        jsonFileName
        dated
        body {
          json
        }
      }
    }
  }
`
