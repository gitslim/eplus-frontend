<script>
    import marked from 'marked'

    export let content
</script>

<div>
    <!--{JSON.stringify(content)}-->
    {#each content as block}
        {#if block.__typename === 'ComponentDefaultParagraph'}
            <div class="content marked {block.class}">
                {@html marked(block.content)}
            </div>
        {:else if block.__typename === 'ComponentDefaultImage'}
            {#if block.image != null}
                <div class="image {block.class}">
                    <img src="{block.image.formats.small.url}" alt="{block.image.alternativeText}"/>
                </div>
            {/if}
        <!--{:else if block.__typename === 'ComponentDefaultYoutube'}-->
        <!--    {#if block.videoId != null}-->
        <!--        <figure class="image is-16by9 {block.class}">-->
        <!--            <iframe allowfullscreen class="has-ratio" frameborder="0"-->
        <!--                    height="360"-->
        <!--                    src="https://www.youtube.com/embed/{block.videoId}?showinfo=0" width="640"></iframe>-->
        <!--        </figure>-->
        <!--    {/if}-->
        {/if}
<!--        <div class="is-divider"></div>-->
    {/each}
</div>
