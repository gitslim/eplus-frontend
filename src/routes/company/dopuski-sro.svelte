<script context="module">
  import SvelteSeo from "svelte-seo"
</script>

<script>
  import LazyImage from 'svelte-lazy-image'
  import Lightbox from 'svelte-lightbox/src/Lightbox.svelte'

  export let segment;
  let title = 'Допуски СРО и аттестаты'
</script>

<SvelteSeo
  title="{title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{title}</h1>
    <div class="columns">
      <div class="column is-8">
        <h2 class="subtitle">Допуски СРО</h2>
        <div class="columns">
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/sro-1.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/sro-2.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/sro-3.jpg"
              />
            </Lightbox>
          </div>
        </div>

        <h2 class="subtitle">Сертификация ISO 9001</h2>
        <div class="columns">
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/iso-1.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/iso-2.jpg"
              />
            </Lightbox>
          </div>
        </div>

        <h2 class="subtitle">Аттестаты сварочных технологий</h2>
        <div class="columns">
          <div class="column is-3">
            <Lightbox>
              <LazyImage
                src="/images/company/svar-tech-1.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-3">
            <Lightbox>
              <LazyImage
                src="/images/company/svar-tech-2.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-3">
            <Lightbox>
              <LazyImage
                src="/images/company/svar-tech-3.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-3">
            <Lightbox>
              <LazyImage
                src="/images/company/svar-tech-4.jpg"
              />
            </Lightbox>
          </div>
        </div>

        <h2 class="subtitle">Аттестаты сварочного оборудования</h2>
        <div class="columns">
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/svar-obor-1.jpg"
              />
            </Lightbox>
          </div>
          <div class="column is-4">
            <Lightbox>
              <LazyImage
                src="/images/company/svar-obor-2.jpg"
              />
            </Lightbox>
          </div>
        </div>

      </div>

      <div class="column">
        <figure class="image is-16by9">
          <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/L8tZf_xNUWQ?showinfo=0"
                  frameborder="0" allowfullscreen></iframe>
        </figure>
      </div>
    </div>
  </div>
</section>
