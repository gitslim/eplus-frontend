<script context="module">

    export function load({error, status}) {
        // console.error('In error page', error)
        return {
            props: {
                status: status,
                // stack: error.stack
            }
        }
    }
</script>

<script>
    import {goto} from '$app/navigation'
    import {t} from 'svelte-i18n'
    import {session} from '$app/stores'

    export let status, stack

    $: currentLocale = $session.locale || 'ru'
    $: title = status === 404 ? $t('error.page_not_found') : $t('error.server_error')
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="section">
    <div class="container">

        <div class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    {title}
                </p>
                <a rel={currentLocale === 'en' ? 'external' : undefined} class="button is-link" href={currentLocale === 'en' ? '/en/' : '/'}>{$t('error.go_home')}</a>
            </div>
        </div>

        {#if stack}
            <pre>Http status: {status}</pre>
            <pre>Stacktrace: {stack}</pre>
        {/if}

    </div>
</section>


