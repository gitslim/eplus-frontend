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
