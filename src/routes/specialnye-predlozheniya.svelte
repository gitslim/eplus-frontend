<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import SidebarRight from '$lib/components/SidebarRight.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    let title = 'Специальные предложения'
    const meta = {
        title: "Специальные предложения. Техническое перевооружение котельной. Внутриплощадочные газопроводы. БМК",
        description: "Особые условия. Поставка блочно-модульной котельной. Проектирование внутриплощадочного и внутреннего газопровода. Техническое перевооружение котельной. Смета и экспертиза",
        h1: "Проектирование и строительство газопроводов. Техническое перевооружение котельной. Реестр ОПО. Подбор оборудования. Составление сметы. Поставка БМК"
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
    <HiddenH1>{meta.h1}</HiddenH1>
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
                          <a href="/page/konteynernaya-kotelnaya-1MW"> Контейнерная котельная 1 МВт в наличии </a>
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
