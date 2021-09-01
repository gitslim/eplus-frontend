import {dev} from '$app/env'
import {ApolloClient, gql} from '@apollo/client/core'
import {HttpLink} from '@apollo/client/link/http'
import {InMemoryCache} from '@apollo/client/cache'


const uri = dev
    ? 'http://localhost:1337/graphql'
    : 'https://api.xn--c1adkmgpem4hrai.xn--p1ai/graphql'


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
