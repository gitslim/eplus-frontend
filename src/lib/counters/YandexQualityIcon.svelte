<script>
    import website from '$lib/config/website.js'

    let siteUrl = website.siteUrl
    let title = 'Индекс качества сайта'
</script>


<a title={title} href="https://webmaster.yandex.ru/siteinfo/?site={siteUrl}">
    <img width="88" height="31" alt="" border="0" src="https://yandex.ru/cycounter?{siteUrl}&theme=light&lang=ru"/>
</a>