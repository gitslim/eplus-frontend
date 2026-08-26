import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const locale = request.body?.locale || 'ru'

    try {
        const query = gql`
  query($locale: String!) {
    articles(sort: "date:desc", locale: $locale) {
      slug
      title
      image {
        url
        formats
        alternativeText
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
            body: {articles: result.data.articles}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
