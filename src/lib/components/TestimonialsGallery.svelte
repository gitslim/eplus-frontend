<script>
    import LazyImage from 'svelte-lazy-image'
    import {Lightbox} from 'svelte-lightbox'
    import {t} from 'svelte-i18n'

    export let items
</script>


<div class="columns is-multiline">
    {#each items as item, i}
        <div class="column is-one-third-desktop is-half-tablet">
            <div class="card">
                <div class="card-image">
                    <Lightbox imagePreset="fit">
                        <figure class="image">
                            <LazyImage
                                    src={item.image.url}
                                    alt={$t('testimonials.review_alt', {values: {customer: item.customer}})}
                                    placeholder="/loader.gif"/>
                        </figure>
                    </Lightbox>
<!--                    <div class="card-content is-overlay is-clipped">-->
<!--                    <span class="tag is-primary">-->
<!--                        {item.customer}-->
<!--                    </span>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    {/each}
</div>
