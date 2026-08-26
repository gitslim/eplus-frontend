import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const locale = request.body?.locale || 'ru'

    try {
        const query = gql`
  query($locale: String!) {
    faqs(locale: $locale) {
      slug
      title
      tags {
        name
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
            body: {faqs: result.data.faqs}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
