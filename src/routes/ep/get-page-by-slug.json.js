import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const {slug} = request.body

    try {
        const query = gql` 
  query($slug: String!) {
    pages(where: { slug: $slug }) {
      slug
      title
      sidebar {
        __typename
        ... on ComponentDefaultParagraph {
          class
          content
        }
        ... on ComponentDefaultImage {
          class
          image {
            formats
            alternativeText
          }
        }
        ... on ComponentDefaultYoutube {
          class
          videoId
        }
      }
      content {
        __typename
        ... on ComponentDefaultParagraph {
          class
          content
        }
        ... on ComponentDefaultImage {
          class
          image {
            formats
            alternativeText
          }
        }
        ... on ComponentDefaultYoutube {
          class
          videoId
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

        if (result.data.pages.length > 0) {
            return {
                status: 200,
                body: {page: result.data.pages[0]}
            }
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
