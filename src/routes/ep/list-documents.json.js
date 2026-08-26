import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const locale = request.body?.locale || 'ru'

    try {
        const query = gql`
  query($locale: String!) {
    documents(sort: "date:desc", locale: $locale) {
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
            variables: {locale},
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
