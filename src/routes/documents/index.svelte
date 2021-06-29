<script context="module">
  import SvelteSeo from "svelte-seo";
  import { client, DOCUMENTS } from "../../apollo";
  import CallbackForm from "../../components/CallbackForm.svelte";
  import SidebarRight from "../../components/SidebarRight.svelte";

  export async function preload(page, session) {
    let cache = await client.query({
      query: DOCUMENTS,
      variables: {},
    });
    return { documents: cache.data.documents };
  }
</script>

<script>
  import Icon from "fa-svelte";
  import { formatDate } from "../../utils";
  import { faFile } from "@fortawesome/free-regular-svg-icons";
  import {
    faVk,
    faTwitter,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";

  export let documents, segment;
  let title = "Нормативные документы";
</script>

<SvelteSeo {title} />

<section class="section">
  <div class="container">
    <h1 class="title">{title}</h1>

    <div class="columns">
      <div class="column is-9">
        <ul>
          {#each documents as doc, i}
            <li class="box">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <a href={doc.file.url} target="_blank">
                      <div class="is-size-7 has-text-weight-semibold">
                        {doc.title}
                      </div>
                    </a>
                  </div>
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <Icon icon={faFile} class="" />
                      </div>
                      <div class="level-item">
                        <span>{formatDate(doc.date)}</span>
                      </div>
                    </div>
                    <div class="level-right">
                      <a class="level-item">
                        <Icon icon={faVk} class="vk" />
                      </a>
                      <a class="level-item">
                        <Icon icon={faTwitter} class="twitter" />
                      </a>
                      <a class="level-item">
                        <Icon icon={faFacebook} class="fb" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          {/each}
        </ul>
      </div>

      <div class="column">
        <aside class="aside__right">
          <SidebarRight />
          <CallbackForm />
        </aside>
      </div>
    </div>
  </div>
</section>
