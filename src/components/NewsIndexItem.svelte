<script>
  import {onMount} from 'svelte'
  import Link from "./Link.svelte";

  export let article
  let date, imageUrl

  function formatDate(dateString) {
    const date = new Date(dateString)
    const dateTimeFormat = new Intl.DateTimeFormat('ru', {year: 'numeric', month: '2-digit', day: '2-digit'})
    const [{value: day}, , {value: month}, , {value: year}] = dateTimeFormat.formatToParts(date)
    return `${day}-${month}-${year}`
  }

  onMount(async () => {
    date = formatDate(article.date)
    imageUrl = chooseImageUrl(article.image)
  })

  function chooseImageUrl(image) {
    const validFormats = ['medium', 'small', 'thumbnail']
    for (let idx in validFormats) {
      try {
        return image.formats[validFormats[idx]].url
      } catch (e) {
      }
    }
    return image.url
  }

</script>

<article class="card">
  <div class="card-image">
    <Link path="news" slug="{article.slug}">
      <figure class="image is-4by3">
        <img src="{imageUrl}" alt="{article.image.alternativeText}">
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
