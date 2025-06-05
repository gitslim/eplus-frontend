<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'

    const meta = {
        title: 'Полезные материалы для тех, кто планирует строить котельную, проектировать газопровод или купить блочно-модульную котельную',
        description: 'Полезные материалы от профессионалов. Актуальные нормативные акты для проектирования и строительства. Калькуляторы расчета стоимости котельной и газопровода.',
        h1: 'Проектирование и строительство котельной и газопровода. Согласование. Экспертиза. Полезные материалы для инженеров, энергетиков. Узнайте стоимость проекта на сайте.'
    }
</script>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<h1 style="position: absolute; clip-path: inset(100%); width: 1px; height: 1px; overflow: hidden;">{meta.h1}</h1>


<style lang="scss">
  // .content__wrap {
  //   display: flex;
  // }

  .content-block {
    // width: 65%;
    margin-right: 10px;
  }

  .block-sidebar {
    // width: 370px;
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
                        <span><span>Полезное</span></span><span class="heading-line"/>
                    </h2>
                </div>
                <div class="builder-element-inside">
                    <div class="builder-element-children-wrapper">
                        <h3><a href="/faq">Вопросы и ответы</a></h3>
                        <h3><a href="/rasschitat-stoimost">Калькуляторы</a></h3>
                        <h3>
                            <a href="/page/kalkulyator-rascheta-stoimosti-gazoprovoda">Расчет
                                газопровода</a>
                        </h3>
                        <h3>
                            <a href="/page/kalkulyator-rascheta-stoimosti-kotelnoj">Расчет
                                котельной</a>
                        </h3>
                        <h3><a href="/documents">Нормативные документы</a></h3>
                        <h3><a href="/articles">Статьи</a></h3>
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
