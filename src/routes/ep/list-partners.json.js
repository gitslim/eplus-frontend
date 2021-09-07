import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {

    try {
        const query = gql`
  query {
    partners(sort: "id:asc") {
      partner
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
            body: {partners: result.data.partners}
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
