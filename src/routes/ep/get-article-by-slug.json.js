import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const {slug, locale} = request.body
    const resolvedLocale = locale || 'ru'

    try {
        const query = gql`
  query($slug: String!, $locale: String!) {
    articles(where: { slug: $slug }, locale: $locale) {
      slug
      title
      image {
        url
        alternativeText
      }
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
      localizations {
        locale
        slug
        title
        image {
          url
          alternativeText
        }
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
  }
`
        let result = await client.query({
            query,
            variables: {slug, locale: resolvedLocale},
            fetchPolicy: 'network-only'
        })

        if (result?.data?.articles && result.data.articles.length > 0) {
            return {
                status: 200,
                body: {article: result.data.articles[0]}
            }
        }

        // If not found in target locale, query RU with localizations
        if (resolvedLocale !== 'ru') {
            result = await client.query({
                query,
                variables: {slug, locale: 'ru'},
                fetchPolicy: 'network-only'
            })

            if (result?.data?.articles && result.data.articles.length > 0) {
                const enLoc = (result.data.articles[0].localizations || []).find(l => l.locale === resolvedLocale)
                if (enLoc) {
                    return {
                        status: 200,
                        body: {article: enLoc}
                    }
                }
                return {
                    status: 200,
                    body: {article: result.data.articles[0]}
                }
            }
        }

        return {
            status: 404
        }

    } catch (err) {
        return {
            status: 503
        }
    }
}
