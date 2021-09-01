<script>
    import {onMount} from 'svelte'
    import Link from './Link.svelte'
    import {chooseImageUrl, formatDate} from '$lib/utils'

    export let article
    let date, imageUrl

    onMount(async () => {
        date = formatDate(article.date)
        imageUrl = chooseImageUrl(article.image)
    })

</script>

<article class="card">
    <div class="card-image">
        <Link path="news" slug="{article.slug}">
            <figure class="image is-4by3">
                <img alt="{article.image.alternativeText}" src="{imageUrl}">
            </figure>
        </Link>
    </div>
    <div class="card-header">
        <Link path="news" slug="{article.slug}">
            <div class="card-header-title">
                {article.title}
            </div>
        </Link>
    </div>
    <div class="card-content">
        <div class="content">
            {article.summary}
        </div>
    </div>
    <div class="card-footer">
        <div class="card-footer-item">
            <time datetime="{article.date}">{date}</time>
        </div>
        <div class="card-footer-item">
            <Link path="news" slug="{article.slug}">Подробнее</Link>
        </div>
    </div>
</article>
