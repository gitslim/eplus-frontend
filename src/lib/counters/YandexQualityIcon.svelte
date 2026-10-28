<script>
    import website from '$lib/config/website.js'
    import {session} from '$app/stores'

    $: currentLocale = $session.locale || 'ru'
    $: siteUrl = website.siteUrl
    $: title = currentLocale === 'en' ? 'Website Quality Index' : 'Индекс качества сайта'
</script>

<a title={title} href="https://webmaster.yandex.ru/siteinfo/?site={siteUrl}">
    <img width="88" height="31" alt="" border="0" src="https://yandex.ru/cycounter?{siteUrl}&theme=light&lang={currentLocale === 'en' ? 'en' : 'ru'}"/>
</a>