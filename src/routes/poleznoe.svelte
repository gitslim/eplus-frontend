<script>
  import CallbackForm from "../components/CallbackForm.svelte";

  import SidebarRight from "../components/SidebarRight.svelte";
</script>

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
            <span><span>Полезное</span></span><span class="heading-line" />
          </h2>
        </div>
        <div class="builder-element-inside">
          <div class="builder-element-children-wrapper">
            <h3><a href="/faq">Вопросы и ответы</a></h3>
            <h3><a href="/kalkulyatory">Калькуляторы</a></h3>
            <h3>
              <a href="/page/kalkulator-rasceta-stoimosti-gazoprovoda">Расчет
                газопровода</a>
            </h3>
            <h3>
              <a href="/page/kalkulator-rasceta-stoimosti-kotelnoi">Расчет
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
        <SidebarRight />
        <CallbackForm />
      </aside>
    </div>
  </div>
</main>
