<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<script>
    import SearchInput from '$lib/components/search/SearchInput.svelte'
    import SearchResults from '$lib/components/search/SearchResults.svelte'
</script>

<div class="container">
    <section class="section py-6">
        <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth">
                <SearchInput/>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <SearchResults/>
            </div>
        </div>
    </section>
</div>