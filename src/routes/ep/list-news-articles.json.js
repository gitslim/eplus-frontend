import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    newsArticles(sort: "date:desc") {
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
            variables: {},
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
