import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    articles(sort: "date:desc") {
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
