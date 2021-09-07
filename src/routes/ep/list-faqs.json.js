import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    faqs {
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
