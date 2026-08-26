import {client, gql} from '$lib/apollo'
// import {gql} from '@apollo/client/core'


export const post = async request => {
    const {slug, locale} = request.body
    const resolvedLocale = locale || 'ru'

    try {
        const query = gql`
  query($slug: String!, $locale: String!) {
    newsArticles(where: { slug: $slug }, locale: $locale) {
      slug
      title
      date
      image {
        url
        alternativeText
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
        date
        image {
          url
          alternativeText
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

        if (result?.data?.newsArticles && result.data.newsArticles.length > 0) {
            return {
                status: 200,
                body: {newsArticle: result.data.newsArticles[0]}
            }
        }

        // If not found in target locale, query RU with localizations
        if (resolvedLocale !== 'ru') {
            result = await client.query({
                query,
                variables: {slug, locale: 'ru'},
                fetchPolicy: 'network-only'
            })

            if (result?.data?.newsArticles && result.data.newsArticles.length > 0) {
                const enLoc = (result.data.newsArticles[0].localizations || []).find(l => l.locale === resolvedLocale)
                if (enLoc) {
                    return {
                        status: 200,
                        body: {newsArticle: enLoc}
                    }
                }
                return {
                    status: 200,
                    body: {newsArticle: result.data.newsArticles[0]}
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
