import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const {slug} = request.body

    try {
        const query = gql`
  query($slug: String!) {
    newsArticles(where: { slug: $slug }) {
      slug
      title
      date
      image {
        url
        alternativeText
      }
      content {
        __typename
        ... on ComponentDefaultParagraph {
          content
        }
      }
    }
  }
`
        const result = await client.query({
            query,
            variables: {slug},
            fetchPolicy: 'network-only'
        })

        if (result.data.newsArticles.length > 0) {
            return {
                status: 200,
                body: {newsArticle: result.data.newsArticles[0]}
            }
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
