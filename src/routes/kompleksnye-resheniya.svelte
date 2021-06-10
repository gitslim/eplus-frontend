<script>
import CallbackForm from "../components/callbackForm.svelte";
import SidebarRight from "../components/sidebarRight.svelte";

</script>

<style lang="scss">
  .column-content {
    padding-left: 15px;
  }

  .content__wrap {
    display: flex
  }

  ul {
    list-style: disc;
  }
  .content-block {
    width: 65%;
    margin-right: 10px;
  }
  .content-bottom {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .block-sidebar {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;

  }

</style>

<main class="container">
  <div class="row content__wrap">
    <div class="content-block col-8">
      <section>
        <div class="widget">
          <h2 class="title">
            <span><span>Комплексные решения</span> </span><span
              class="heading-line" />
          </h2>
        </div>
        <div class="column-content">
          <ul>
            <li>
              <a href="/tehniceskoe-perevooruzenie">Техническое перевооружение
                котельной</a>
            </li>
            <li>
              <a
                href="/vnutriplosadocnye-i-vnutrennie-gazoprovody">Внутриплощадочные
                и внутренние газопроводы</a>
            </li>
          </ul>
        </div>
      </section>
      <div class="content-bottom">
        <CallbackForm />
      </div>
    </div>
    <div class="block-sidebar">
      <SidebarRight/>
    </div>
  </div>
</main>
