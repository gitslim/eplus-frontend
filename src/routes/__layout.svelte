<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<style global lang="scss">
  @import "../global.scss";

  .body-wrapper {
    padding-top: 3.25rem;
  }
</style>


<div class="body-wrapper">
    <Navbar/>
    <slot/>
    <Footer/>
</div>
