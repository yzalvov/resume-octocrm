import { GraphQLClient } from 'graphql-request'
import { CONTENTFUL_CREDENTIALS, endpoint } from './access-contentful'

export const pageRichContentJson = async (arg: { query: string }) => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${CONTENTFUL_CREDENTIALS.accessToken}`
    }
  })
  return await client.request(arg.query)
}
