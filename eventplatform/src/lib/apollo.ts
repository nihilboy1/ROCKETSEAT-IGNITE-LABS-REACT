import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2sntm07rh01xrcukueeir/master',
  cache: new InMemoryCache()
})
