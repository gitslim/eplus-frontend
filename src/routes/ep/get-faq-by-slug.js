import {client} from '$lib/apollo'
import {gql} from '@apollo/client/core'


export const post = async request => {
    const {slug} = request.body

    try {
        const query = gql`
  query($slug: String!) {
    faqs(where: { slug: $slug }) {
      slug
      title
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

        if (result.data.faqs.length > 0) {
            return {
                status: 200,
                body: {faq: result.data.faqs[0]}
            }
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
