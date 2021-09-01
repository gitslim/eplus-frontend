import {client} from '$lib/apollo'
import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    testimonials(sort: "date:desc") {
      customer
      date
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
            body: {testimonials: result.data.testimonials}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
