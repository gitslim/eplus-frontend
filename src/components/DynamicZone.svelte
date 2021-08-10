<script>
  import marked from 'marked'

  export let content
</script>

<div class="content">
  {#each content as block}
    {#if block.__typename === 'ComponentDefaultParagraph'}
      <div class="marked">
        {@html marked(block.content)}
      </div>
    {:else if block.__typename === 'ComponentDefaultImage'}
      {#if block.image != null}
        <div class="image">
          <img src="{block.image.formats.small.url}" alt="{block.image.alternativeText}"/>
        </div>
      {/if}
    {/if}
  {/each}
</div>
