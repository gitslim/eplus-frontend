<script>
    import Icon from 'fa-svelte'
    import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

    export let showOnPx = 800
    let hidden = true

    function goTop() {
        document.body.scrollIntoView()
    }

    function scrollContainer() {
        return document.documentElement || document.body
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return
        }

        hidden = scrollContainer().scrollTop <= showOnPx
    }
</script>

<style>
    .back-to-top {
        position: fixed;
        z-index: 99;
        right: 0;
        bottom: 0;
    }

    .back-to-top.hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>

<svelte:window on:scroll="{handleOnScroll}"/>

<button class="back-to-top button is-ghost is-radiusless has-text-dark" on:click="{goTop}" class:hidden>
    <span class="icon">
        <Icon icon={faChevronUp}/>
    </span>
    <span>Наверх</span>
</button>