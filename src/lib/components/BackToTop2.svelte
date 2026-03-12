<script>
    import {onMount} from 'svelte'

    let element

    onMount(() => {
        window.onscroll = function () {
            if (window.pageYOffset > 1400) {
                element.style.opacity = '1'
            } else {
                element.style.opacity = '0'
            }
        }

        element.onclick = function () {
            const scrollToTop = window.setInterval(function () {
                const pos = window.pageYOffset
                if (pos > 0) {
                    window.scrollTo(0, pos - 70) // шаг за раз
                } else {
                    window.clearInterval(scrollToTop)
                }
            }, 16) // скорость прокрутки
        }
    })

</script>

<style lang="scss">
  .top {
    right: 5px;
    width: 40px;
    height: 40px;
    z-index: 999;
    bottom: 5px;
    position: fixed;
    border-radius: 100%;
    background-color: #262626;

    .scroll {
      z-index: 1;
      width: 100%;
      height: 100%;
      display: block;
      text-align: center;
      position: relative;

      svg {
        width: 24px;
        height: 24px;
        display: inline-block;
        stroke: #fff;
        margin: 7px auto auto;
      }
    }
  }
</style>

<div class="top" bind:this={element}>
    <a class="scroll">
        <svg fill="none" focusable="false" height="100%" preserveAspectRatio="xMidYMid meet"
             stroke="currentColor" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        </svg>
    </a>
</div>