<script>
    import '$lib/styles/normalise.css'
    import '$lib/styles/global.scss'

    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import GTM from '$lib/counters/GTM.svelte'
    import website from '$lib/config/website'

    const {gtmId} = website
</script>

<style global lang="scss">
  .body-wrapper {
    padding-top: 3.25rem;
  }
</style>

<GTM {gtmId}/>

<div class="body-wrapper">
    <Navbar/>
    <slot/>
    <Footer/>
    <!--    <YandexMetrika></YandexMetrika>-->
    <!--    <Bitrix24Chat></Bitrix24Chat>-->
</div>
