import {dev} from '$app/env'
import website from '$lib/config/website';
import {ApolloClient} from '@apollo/client/core'
import {HttpLink} from '@apollo/client/link/http'
import {InMemoryCache} from '@apollo/client/cache'


const {apiUrl} = website
const uri = apiUrl + '/graphql'

class Apollo {
    constructor() {
        if (Apollo._instance) {
            return Apollo._instance
        }
        Apollo._instance = this

        this.client = this.setupClient()
    }

    setupClient() {
        const link = new HttpLink({
            uri: uri,
            fetch
        })

        return new ApolloClient({
            link,
            cache: new InMemoryCache()
        })
    }
}

export const client = (new Apollo()).client
export {gql} from '@apollo/client/core'