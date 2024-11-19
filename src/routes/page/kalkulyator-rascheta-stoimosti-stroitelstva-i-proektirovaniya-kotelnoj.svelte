<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CalcKotel from '$lib/components/calc/CalcKotel.svelte'

    const title = 'Калькулятор расчета стоимости строительства и проектирования котельной'
    const titlePart1 = 'Калькулятор расчета стоимости'
    const titlePart2 = 'Проектирования и строительства котельной'
</script>

<style lang="scss">
  #name,
  #PhoneOrEmail,
  #gazPower {
    margin-left: 12px;
  }

  .calc .widget{
    display: flex;
    justify-content: center;

    .title-wrapper{
      max-width: 850px;

      text-align: center;
      font-size: 30px;
    }

    .heading-line{
      margin-left: 35px;
    }
  }
</style>

<SvelteSeo {title}/>

<main class="main-content calc">
    <div class="container is-widescreen">
        <div class="columns">
            <div class="widget column">
                <h2 class="title title-wrapper ">
                    <span>
                        <span><span>{titlePart1}</span></span>
                         <span><span>{titlePart2}</span></span>
                        <span class="heading-line"></span>
                    </span>
                </h2>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-1 is-8">
                <CalcKotel/>
            </div>
        </div>
    </div>
</main>
