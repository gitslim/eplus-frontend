<script>
    import Link from './Link.svelte'
    import LazyImage from 'svelte-lazy-image'

    export let title, image, path, slug
</script>

<div class="card  has-text-centered">
    <Link path="{path}" slug="{slug}" title="{title}">
        <div class="card-header">
            <div class="card-header-title has-text-primary-dark">{title}</div>
        </div>

        <div class="card-image">
            <figure class="image is-16by9">
                <LazyImage
                        alt="{title}"
                        placeholder="/white-200.png"
                        src="{image}"
                />
            </figure>
        </div>
    </Link>
</div>
