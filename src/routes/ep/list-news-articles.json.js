import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const locale = request.body?.locale || 'ru'

    try {
        const query = gql`
  query($locale: String!) {
    newsArticles(sort: "date:desc", locale: $locale) {
      slug
      title
      date
      image {
        url
        formats
        alternativeText
      }
      summary
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
            body: {newsArticles: result.data.newsArticles}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
