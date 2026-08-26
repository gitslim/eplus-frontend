<script>
    import {t} from 'svelte-i18n'
</script>

<style>
    .sidebar-right {
        margin: 0 auto;
    }
</style>

<div class="pb-4">
    <div>
        <h3 class="has-text-primary">
            {$t('common.video_presentation')}
        </h3>
        <figure class="image is-16by9">
            <iframe class="has-ratio"
                    allowfullscreen
                    title="{$t('common.video_presentation')}"
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/L8tZf_xNUWQ"></iframe>
        </figure>
    </div>
</div>
