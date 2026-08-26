<script>
    import slugify from 'slugify'
    import {session} from '$app/stores'

    export let path = '', title = '', cls = '', slug = ''

    slug = slug ? slug : slugify(title, {lower: true})
    const basePath = path ? `/${path}/${slug}` : `/${slug}`

    $: currentLocale = $session.locale || 'ru'
    $: url = currentLocale === 'en' ? `/en${basePath}` : basePath
</script>

<a rel={currentLocale === 'en' ? 'external' : undefined} sveltekit:prefetch class="{cls}" href="{url}">
    <slot/>
</a>
