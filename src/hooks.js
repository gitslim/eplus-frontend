import {dev} from '$app/env'
import website from '$lib/config/website';
import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'
// import cookie from 'cookie'
// import {v4 as uuid} from '@lukeed/uuid'

const {apiUrl} = website

const SUPPORTED_LOCALES = ['ru', 'en']
const DEFAULT_LOCALE = 'ru'

export const handle = async ({request, resolve}) => {
    // --- Locale detection from /en/ prefix ---
    let locale = DEFAULT_LOCALE
    let originalPath = request.path

    if (request.path.startsWith('/en/') || request.path === '/en') {
        locale = 'en'
        // Strip /en prefix so SvelteKit resolves standard routes
        request.path = request.path.slice(3) || '/'
    }

    request.locals.locale = locale

    // console.log('request', request)
    // console.log('uri', uri)
    if (request.path.startsWith('/uploads/'))
        return {
            status: 301,
            headers: {location: apiUrl + request.path + (request.query.toString() ? '?' : '') + request.query.toString()}
        }

    // const cookies = cookie.parse(request.headers.cookie || '')
    // request.locals.userid = cookies.userid || uuid()

    // TODO https://github.com/sveltejs/kit/issues/1046
    if (request.query.has('_method')) {
        request.method = request.query.get('_method').toUpperCase()
    }

    // let redir
    try {
        const result = await client.query({
            query: gql`
  query {
    siteMeta {
      title
      description
      redirects {
        ... on ComponentDefaultRedirect {
          from
          to
        }
      }
    }
  }
`,
        })
        // console.log('meta', result)
        const redirect = result.data.siteMeta.redirects.find((el, idx, arr) => {
            return request.path === el['from']
        })
        if (redirect) {
            const redirectTo = (locale === 'en' ? '/en' : '') + redirect['to'] + (request.query.toString() ? '?' : '') + request.query.toString()
            return {
                status: 301,
                headers: {location: redirectTo}
            }
        }
    } catch (e) {
        // console.error('error', e)
        return {status: 503}
    }

    // console.log('response', response)
    // response.headers['permissions-Policy'] = 'interest-cohort=()'

    // if (!cookies.userid) {
    //     // if this is the first time the user has visited this app,
    //     // set a cookie so that we recognise them when they return
    //     response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`
    // }

    return await resolve(request)
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    return {
        locale: request.locals.locale || DEFAULT_LOCALE
    }
}

/** @type {import('@sveltejs/kit').HandleError} */
// export async function handleError({ error, request }) {
// 	// example integration with https://sentry.io/
// 	//Sentry.captureException(error, { request });
// 	console.error("handleError hook", error, request);
// }