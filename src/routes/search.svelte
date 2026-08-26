<script>
    import SearchInput from '$lib/components/search/SearchInput.svelte'
    import SearchResults from '$lib/components/search/SearchResults.svelte'
    import { t } from 'svelte-i18n'
</script>

<svelte:head>
    <title>{$t('utility_pages.search.title')}</title>
    <meta name="robots" content="noindex">
</svelte:head>

<div class="container">
    <section class="section py-6">
        <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth">
                <SearchInput placeholder="{$t('utility_pages.search.title')}"/>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <SearchResults/>
            </div>
        </div>
    </section>
</div>