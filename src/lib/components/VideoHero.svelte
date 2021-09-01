<script>
    export let video
</script>

<style>
    .hero-head {
        background-color: black;
        opacity: 0.75;
    }
</style>


<section class="hero is-fullheight video is-hidden-mobile">
    <div class="hero-video">
        <video autoplay loop muted playsinline>
            <source src="{video}" type="video/mp4"/>
        </video>
    </div>
    <div class="hero-head">
        <slot name="head"/>
    </div>
    <div class="hero-body">
        <slot name="body"/>
    </div>
    <div class="hero-foot">
        <slot name="footer"/>
    </div>
</section>
