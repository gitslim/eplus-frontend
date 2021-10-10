<script>
    import '$lib/styles/normalise.css'
    import '$lib/styles/global.scss'

    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import GTM from '$lib/counters/GTM.svelte'
    import website from '$lib/config/website'

    const {disableAnalytics, gtmId} = website
</script>

<style global lang="scss">
  .body-wrapper {
    padding-top: 3.25rem;
  }
</style>

{#if !disableAnalytics}
<GTM {gtmId}/>
{/if}

<div class="body-wrapper">
    <Navbar/>
    <slot/>
    <Footer/>
</div>
