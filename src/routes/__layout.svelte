<script>
    import '$lib/styles/normalise.css';
    import '$lib/styles/global.scss';

    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Bitrix24Chat from '$lib/counters/Bitrix24Chat.svelte'
    import YandexMetrika from '$lib/counters/YandexMetrika.svelte'
</script>

<style global lang="scss">
  .body-wrapper {
    padding-top: 3.25rem;
  }
</style>


<div class="body-wrapper">
    <Navbar/>
    <slot/>
    <Footer/>
    <YandexMetrika></YandexMetrika>
    <Bitrix24Chat></Bitrix24Chat>
</div>
