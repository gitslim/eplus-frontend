<script>

    // showOnPx на сколько поднять (конец страницы - размер экрана)

    export let showOnPx = 500;
    let isActive = false;
    let i=0;

    function scrollContainer() {
        return document.documentElement || document.body
    }

    function handleOnScroll() {     
        if (scrollContainer().scrollTop >= (scrollContainer().scrollHeight - window.screen.availHeight - showOnPx) && i==0) {            
           return isActive=true;
        } 
    }

    function closeWindow() {
        i=1;
        return isActive=false;
    }


</script>


<style>
</style>

<svelte:window on:scroll="{handleOnScroll}"/>

{#if isActive}
    <div class="modal is-active"> 
    <div class="modal-background" on:click="{closeWindow}"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
    <button class="modal-close is-large" aria-label="close" on:click="{closeWindow}"></button>
    </div>
{/if}
