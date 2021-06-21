<script>
  import CallbackForm from "../components/CallbackForm.svelte";

  import SidebarRight from "../components/SidebarRight.svelte";
</script>

<style lang="scss">
  .content__wrap {
    display: flex;
  }
  .content-block {
    width: 65%;
    margin-right: 10px;
  }
  .block-sidebar {
    width: 370px;
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

<main class="container">
  <div class="row content__wrap">
    <div class="content-block col-8">
      <section>
        <div class="widget">
          <h2 class="title">
            <span><span>Полезное</span> </span><span class="heading-line" />
          </h2>
        </div>
        <div class="builder-element-inside">
          <div class="builder-element-children-wrapper">
            <h3><a href="/faq">Вопросы и ответы</a></h3>
            <h3><a href="/kalkulatory">Калькуляторы</a></h3>
            <h3>
              <a href="/kalkulator-rasceta-stoimosti-gazoprovoda">Расчет
                газопровода</a>
            </h3>
            <h3>
              <a href="/kalkulator-rasceta-stoimosti-kotelnoi">Расчет котельной</a>
            </h3>
            <h3><a href="/normativnye-dokumenty">Нормативные документы</a></h3>
            <h3><a href="/stati-po-energetike">Статьи</a></h3>
          </div>
        </div>
      </section>
    </div>
    <aside class="block-sidebar">
      <SidebarRight />
      <CallbackForm />
    </aside>
  </div>
</main>
