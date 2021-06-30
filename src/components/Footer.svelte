<script>
  import Address from "Address.svelte";
  import Modal from "Modal.svelte";
  import Button from "./Button.svelte";
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
              <li><a href="/page/proektirovanie">Проектирование</a></li>
              <li><a href="/page/stroitelstvo">Строительство</a></li>
              <li><a href="/page/energoaudit">Энергоаудит</a></li>
            </ul>

            <p class="pt-4"><span>Комплексные решения</span></p>
            <ul>
              <li>
                <a href="/page/tehnicheskoe-perevooruzhenie-kotelnoj">Тех.
                  перевооружение котельной</a>
              </li>
              <li>
                <a
                  href="/page/vnutriploshadochnye-gazoprovody">Внутриплощадочные
                  газопроводы</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <p><span>О компании</span></p>
            <ul>
              <li><a href="/company/history">История</a></li>
              <li><a href="/company/referens-list">Проекты</a></li>
              <li><a href="/company/dopuski-sro">Допуски СРО</a></li>
              <li><a href="/company/otzyvy-klientov">Отзывы клиентов</a></li>
            </ul>

            <p class="pt-4"><span>Полезное</span></p>
            <ul>
              <li><a href="/kalkulyatory">Калькуляторы</a></li>
              <li><a href="/documents">Документы</a></li>
              <li><a href="/articles">Статьи</a></li>
              <li><a href="/faq">FAQ</a></li>
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
  <div class="counter columns">
    <div class="column is-3 is-offset-3">
      <!-- Yandex.Metrika counter -->
      <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
          m[i] =
            m[i] ||
            function () {
              (m[i].a = m[i].a || []).push(arguments);
            };
          m[i].l = 1 * new Date();
          (k = e.createElement(t)),
            (a = e.getElementsByTagName(t)[0]),
            (k.async = 1),
            (k.src = r),
            a.parentNode.insertBefore(k, a);
        })(
          window,
          document,
          "script",
          "https://mc.yandex.ru/metrika/tag.js",
          "ym"
        );

        ym(54841009, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });
      </script><noscript><div>
          <img
            src="https://mc.yandex.ru/watch/54841009"
            style="position:absolute; left:-9999px;"
            alt="" />
        </div></noscript>
      <!-- /Yandex.Metrika counter -->
      <script>
        (function (w, d, u) {
          var s = d.createElement("script");
          s.async = true;
          s.src = u + "?" + ((Date.now() / 60000) | 0);
          var h = d.getElementsByTagName("script")[0];
          h.parentNode.insertBefore(s, h);
        })(
          window,
          document,
          "https://cdn.bitrix24.ru/b9447275/crm/site_button/loader_2_ux0fep.js"
        );
      </script>
    </div>
  </div>

  <!--modal blok -->
  <Modal>
    <div class="column modal-wrap is-6">
      <div class="title is-flex is-size-5">Оставить заявку</div>
      <form name="modal-form">
        <div class="field">
          <label class="label">ВАШЕ ИМЯ</label>
          <div class="control">
            <input class="input" type="text" placeholder="Ваше имя" />
          </div>
        </div>
        <div class="field">
          <label class="label">ТЕЛЕФОН</label>
          <div class="control">
            <input class="input" type="tel" placeholder="Телефон" />
          </div>
        </div>
        <Button btnName="modalSend">Отправить</Button>
      </form>
    </div>
  </Modal>
</footer>
