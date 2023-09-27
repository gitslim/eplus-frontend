<script>
    import '$lib/styles/normalise.css'
    import '$lib/styles/global.scss'

    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import GTM from '$lib/counters/GTM.svelte'
    import website from '$lib/config/website'
    import BackToTop from '$lib/components/BackToTop.svelte'
    import RoistatCounter from '$lib/counters/RoistatCounter.svelte'
    import {afterUpdate} from 'svelte'
    import {page} from '$app/stores'

    const {disableAnalytics, gtmId} = website

    function onRouteChange() {
        alert('route changed')
    }

    // afterUpdate(() => {
    //     window.document.dispatchEvent(new Event('DOMContentLoaded', {
    //         bubbles: true,
    //         cancelable: true
    //     }))
    // })
</script>

<svelte:head>
    <link rel="canonical" href="{website.siteUrl}{$page.path}">
    <script>(function(w, c){(w[c]=w[c]||[]).push(function(){new zTracker({"id":"1c4048a82bb80f894465cde6d1dda49618015","metrics":{"metrika":"54841009"}});});})(window, "zTrackerCallbacks");</script>
    <script async src="https://my.novofon.com/js/ct_phone.min.js"></script>
</svelte:head>
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
    <BackToTop/>
    <RoistatCounter/>
</div>
