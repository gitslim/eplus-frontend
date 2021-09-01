import {client} from '$lib/apollo'
import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    documents(sort: "date:desc") {
      title
      date
      file {
        url
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
            body: {documents: result.data.documents}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
