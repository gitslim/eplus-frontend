<script context="module">
  import SvelteSeo from "svelte-seo"
</script>

<script>
  import Icon from 'fa-svelte'
  import {formatDate} from '../../utils'
  import {faFile} from '@fortawesome/free-regular-svg-icons'
  import {faVk, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'

  export let segment;
  let title = 'Референс-лист'
</script>

<SvelteSeo
  title="{title}"
/>

<section class="section">
  <div class="container">
    <h1 class="title">{title}</h1>
    <div class="columns">
      <div class="column is-8">
        <figure class="image is-4by5">
          <iframe class="has-ratio" src="https://docs.google.com/gview?embedded=true&amp;url=http://xn--c1adkmgpem4hrai.xn--p1ai/sites/default/files/2019-09/%D0%A0%D0%B5%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%81-%D0%BB%D0%B8%D1%81%D1%82%202015-2019%20%D0%9E%D0%AD.doc"></iframe>
        </figure>
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
