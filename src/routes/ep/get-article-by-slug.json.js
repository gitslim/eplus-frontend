import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const {slug} = request.body

    try {
        const query = gql`
  query($slug: String!) {
    articles(where: { slug: $slug }) {
      slug
      title
      image {
        url
        alternativeText
      }
      sidebar {
        __typename
        ... on ComponentDefaultImage {
          image {
            formats
            alternativeText
          }
        }
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

        if (result.data.articles.length > 0) {
            return {
                status: 200,
                body: {article: result.data.articles[0]}
            }
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
