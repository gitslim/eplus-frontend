import {client} from '$lib/apollo'
import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    siteMeta {
      title
      description
      redirects {
        ... on ComponentDefaultRedirect {
          from
          to
        }
      }
    }
  }
`

        const result = await client.query({
            query,
            fetchPolicy: 'network-only'
        })

        return {
            status: 200,
            body: {siteMeta: result.data.siteMeta}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
