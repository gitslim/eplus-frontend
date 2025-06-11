<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    const meta = {
        title: "Рассчитать стоимость котельной. Рассчитать стоимость газопровода",
        description: "Выполнить расчет стоимости газопровода любого давления. Выполнить расчет стоимости промышленной котельной онлайн. Консультация и расчет",
        h1: "Расчет стоимости газовой, дизельной промышленной котельной онлайн. Расчет стоимости газопровода онлайн. Стоимость газопровода. Стоимость котельной. Москва"
    }
</script>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>

<HiddenH1>{meta.h1}</HiddenH1>

<style lang="scss">
  .content-block {
    margin-right: 10px;
  }

  .block-sidebar {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .builder-element-inside {
    padding-left: 15px;
  }

  a {
    color: #202020;
    text-decoration: none;

    &:hover {
      color: #f86923;
    }
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.6;
    color: #202020;
    margin-top: 12.5px;
    margin-bottom: 12.5px;
  }
</style>

<main class="container .is-widescreen">
    <div class="columns is-desktop content__wrap">
        <div class="content-block column is-8">
            <section>
                <div class="widget">
                    <h2 class="title">
                        <span><span>Калькуляторы расчета</span></span>
                        <span class="heading-line"></span>
                    </h2>
                </div>
                <div class="builder-element-inside">
                    <div class="builder-element-children-wrapper">
                        <h3>
                            <a href="/page/kalkulyator-rascheta-stoimosti-gazoprovoda">Расчет стоимости
                                газопровода</a>
                        </h3>
                        <h3>
                            <a href="/page/kalkulyator-rascheta-stoimosti-kotelnoj">Расчет стоимости
                                котельной</a>
                        </h3>
                    </div>
                </div>
            </section>
        </div>
        <div class="column is-4 mt-5">
            <aside class="aside__right">
                <SidebarRight/>
                <CallbackForm white/>
            </aside>
        </div>
    </div>
</main>
