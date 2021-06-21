<script>
  import Address from "Address.svelte";
  import Modal from "Modal.svelte";
</script>

<style lang="scss">
  .footer {
    //background-color: rgb(248, 105, 35);
    //color: white;
    //padding-bottom: 1rem;

    .column-title {
      //color: black;
    }
  }
</style>

<footer class="footer">
  <div class="container">
    <div class="columns is-desktop text-small">
      <div class="column">
        <!--        <div class="">-->
        <!--          <span class="column-title">О компании</span>-->
        <a class="footer-logo" href="/">«Энергия Плюс» - Инжиниринговая компания</a>
        <!--        </div>-->
        <div class="pt-4">
          <p>
            «Энергия Плюс» - инжиниринговая компания, осуществляющая комплексные
            решения в энергетике.
          </p>
          <p>
            Полный цикл от проектирования до сдачи объектов и сервисного
            обслуживания.
          </p>
        </div>
        <div class="pt-6">
          <Address />
        </div>
        <div class="pt-4">
          <button class="button is-primary">Заказать расчет</button>
        </div>
      </div>
      <div class="column">
        <div class="columns">
          <div class="column">
            <p><span>Услуги</span></p>
            <ul>
              <li><a href="/">Проектирование</a></li>
              <li><a href="/">Строительство</a></li>
              <li><a href="/">Энергоаудит</a></li>
            </ul>

            <p class="pt-4"><span>Комплексные решения</span></p>
            <ul>
              <li><a href="/">Тех. перевооружение котельной</a></li>
              <li><a href="/">Внутриплощадочные газопроводы</a></li>
            </ul>
          </div>
          <div class="column">
            <p><span>О компании</span></p>
            <ul>
              <li><a href="/">История</a></li>
              <li><a href="/">Проекты</a></li>
              <li><a href="/">Допуски СРО</a></li>
              <li><a href="/">Отзывы клиентов</a></li>
            </ul>

            <p class="pt-4"><span>Полезное</span></p>
            <ul>
              <li><a href="/">Калькуляторы</a></li>
              <li><a href="/">Документы</a></li>
              <li><a href="/">Статьи</a></li>
              <li><a href="/">FAQ</a></li>
            </ul>
          </div>

          <div class="column">
            <p>Режим работы:</p>
            <ul>
              <li><b>Пнд-Птн:</b> 09<sup>00</sup> - 18<sup>00</sup></li>
              <li><b>Сбт:</b> выходной</li>
              <li><b>Вск:</b> выходной</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom text-small columns">
      <div class="column">
        <span>2003–2020 © ООО «Энергия Плюс»</span>
        <!--        |-->
        <!--        <a href="/site/privacy">Privacy Policy</a>-->
        <!--        |-->
        <!--        <a href="/site/terms">Terms</a>-->
        <!--        |-->
        <!--        <span>CC BY-SA 4.0</span>-->
      </div>
      <div class="column is-narrow">
        <span>Инжиниринговая компания</span>
        <!--        <a class="track-event" data-event-name="click" data-ref="footer" data-service-slug="linode" href="https://promo.linode.com/saashub?utm_source=saashub&amp;utm_medium=affiliate&amp;utm_campaign=affiliate-saashub-saashub_website&amp;utm_content=website-signup&amp;utm_term=SAASHUB6060" rel="sponsored" style="color: /02b159;">Linode</a>-->
      </div>
    </div>
  </div>

  <!--modal blok -->
  <Modal>
    <p>fom and btn</p>
  </Modal>
</footer>
