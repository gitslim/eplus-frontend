<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'

    let title = 'Специальные предложения'
    const meta = {
        title: 'Спецпредложения «Энергии Плюс». Закажите котельную с газопроводом.',
        description: 'Техническое перевооружение котельной, проект внутриплощадочного газопровода, контейнерная котельная от производителя. Закажите сейчас и получите скидку.',
        h1: "Котельная для промышленного объекта. Комплексная услуга для Вашего бизнеса."
    }
</script>

<style lang="scss">
  .column-content {
    padding-left: 15px;
  }

  .content__wrap {
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }

  ul {
    list-style: disc;
    li{
      padding-bottom: 10px;
    }
  }

  .content-block {
    width: 65%;
    margin-right: 10px;
    @media screen and (max-width: 570px) {
      width: 100%;
      padding: 15px;
      margin-right: 0px;
    }
  }

  .content-bottom {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .block-sidebar {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 570px) {
      width: 90%;
    }
  }
</style>

<SvelteSeo title="{meta.title}" description="{meta.description}"/>
<main class="container">
    <h1 style="position: absolute; clip-path: inset(100%); width: 1px; height: 1px; overflow: hidden;">{meta.h1}</h1>
    <div class="content__wrap">
        <div class="content-block is-max-desctop">
            <section>
                <div class="widget">
                    <h2 class="title">
                        <span><span>{title}</span> </span>
                        <span class="heading-line"></span>
                    </h2>
                </div>
                <div class="column-content">
                    <ul>
                        <li>
                            <a href="/page/tehnicheskoe-perevooruzhenie-kotelnoj">Техническое
                                перевооружение котельной</a>
                        </li>
                        <li>
                            <a href="/page/vnutriploshadochnye-gazoprovody">Внутриплощадочные
                                и внутренние газопроводы</a>
                        </li>
                        <li>
                          <a href="/page/konteynernaya-kotelnaya-800kW"> Контейнерная котельная 800 кВт в наличии </a>
                      </li>
                    </ul>
                </div>
            </section>
            <div class="content-bottom">
                <CallbackForm left white/>
            </div>
        </div>
        <div class="block-sidebar">
            <SidebarRight/>
        </div>
    </div>
</main>
