<script context="module">
  import SvelteSeo from "svelte-seo"
</script>

<script>
  import Link from "./../../components/Link.svelte"
  import LazyImage from 'svelte-lazy-image'

  export let segment;
  let title = 'О компании'
</script>

<SvelteSeo
  title="{title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{title}</h1>
    <div class="columns">
      <div class="column is-8">
        <ul class="columns">
          <li class="column is-4">
            <Link cls="button is-fullwidth" title="История" path="company" slug="history">История</Link>
          </li>
          <li class="column is-4">
            <Link cls="button is-fullwidth" title="Допуски СРО и аттестаты" path="company"
                  slug="dopuski-sro">Допуски
              СРО и аттестаты
            </Link>
          </li>
          <li class="column is-4">
            <Link cls="button is-fullwidth" title="Референс-лист" path="company" slug="referens-list">
              Референс-лист
            </Link>
          </li>
        </ul>

        <div class="is-divider"></div>

        <h3 class="subtitle has-text-centered">Презентация (pdf)</h3>
        <a target="_blank" title="Презентация Энергия Плюс" href="/presentation/Энергия%20Плюс.pdf">
          <figure class="image">
            <LazyImage
              src="/presentation/presentation-cover.jpg"
              alt="Презентация Энергия Плюс"
            />
          </figure>
        </a>
      </div>

      <div class="column">
        <figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360"
                  src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                  frameborder="0" allowfullscreen></iframe>
        </figure>
        <div class="is-divider"></div>
        <figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360"
                  src="https://www.youtube.com/embed/p4ZEccCeO2E?showinfo=0"
                  frameborder="0" allowfullscreen></iframe>
        </figure>
      </div>
    </div>
  </div>
</section>
