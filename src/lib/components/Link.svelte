<script>
    import slugify from 'slugify'

    export let path = '', title = '', cls = '', slug = ''

    slug = slug ? slug : slugify(title, {lower: true})
    const url = path ? `/${path}/${slug}` : `/${slug}`
</script>

<a sveltekit:prefetch class="{cls}" href="{url}">
    <slot/>
</a>
