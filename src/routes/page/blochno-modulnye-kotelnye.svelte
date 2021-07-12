<script context="module">
  import SvelteSeo from "svelte-seo";
</script>

<script>
  import BtnZayavka from "../../components/BtnZayavka.svelte";
  import HeaderLanding from "../../components/HeaderLanding.svelte";
  import TitleLanding from "../../components/TitleLanding.svelte";

  let title = "Блочно-модульные котельные";

  const headerCaption = {
    caption: title,
  };
</script>

<style lang="scss">
  .section {
    padding-top: 60px;
  }
  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background: url("/images/bmk/banner-kotelnaya.jpg") no-repeat center;
    background-size: cover;
    overflow: hidden;
    color: #fff;
    width: 100vw;
  }

  .desc {
    padding-top: 60px;

    &__wrap {
      margin-bottom: 50px;
    }

    &__text {
      font-size: 27px;
      font-weight: 300;
      line-height: 1.6;
      color: #202020;
    }
  }
  .info {
    background-color: #383838;
    padding-bottom: 120px;

    &__text {
      color: #fff;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }
  .bmk-video {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 700px;
    height: 300px;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
    margin-bottom: 80px;
  }

  ul {
    margin: 0;
    padding-left: 30px;
    text-align: justify;
    list-style: none;
  }

  .dignity {
    margin-bottom: 90px !important;

    &__item {
      position: relative;
      margin-bottom: 15px;
      font-size: 18px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk-dignity.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 7px;
      }
    }
  }

  .block__inner {
    &_wrap {
      position: relative;
      top: -130px;
      padding: 60px 30px;
      background-color: #fff;
      box-shadow: 0 19px 46px 3px rgba(0, 0, 0, 0.15);
    }
  }

  .limitations {
    &__item {
      position: relative;
      margin-bottom: 15px;
      font-size: 18px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        background: url("/images/bmk/bmk-limitations.png") center no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        left: -30px;
        top: 7px;
      }
    }
  }
</style>

<SvelteSeo {title} />

<main class="main is-widescreen">
  <section class="section columns caption">
    <div class="container is-widescreen">
      <HeaderLanding {...headerCaption} />
      <BtnZayavka btnText="Подобрать" radius />
    </div>
  </section>
  <section class="section desc">
    <div class="container is-widescreen columns desc__wrap">
      <div class="column is-6 desc__img">
        <img src="/images/bmk/u-bmk-image_01.png" alt="bmk-img" />
      </div>
      <div class="column is-6 desc__who">
        <TitleLanding titleText="Что такое БМК:" left />
        <p class="desc__text">
          БМК – это паровая, водогрейная или пароводогрейная котельная частичной
          или полной заводской готовности, состоящая из одного или нескольких
          модулей. Комплектация котельной абсолютно любая, в зависимости от
          технического задания Заказчика. То есть определяющей характеристикой
          БМК является узловая сборка систем котельной в заводских условиях
          перед отправкой на место монтажа и подключения.
        </p>
      </div>
    </div>
  </section>
  <section class="section info">
    <div
      class="container is-widescreen columns"
      style="justify-content: center;">
      <div class="column is-5">
        <div
          class="bmk-video"
          style="background-image: url('https://img.youtube.com/vi/YDMFmwOd3h0/maxresdefault.jpg');">
          <a
            href="https://www.youtube.com/watch?v=YDMFmwOd3h0"
            class="info__link"><img
              src="/images/bmk/u-icon-play.png"
              alt="icon-play"
              class="info_img" /></a>
        </div>
        <TitleLanding
          titleText="Является ли бмк обьектом капитального строительства?"
          white
          left />
        <p class="block info__text">
          Не стоит забывать, что несмотря на то, что блочная котельная
          доставляется транспортом, она является объектом капитального
          строительства и требует получения разрешения на строительство после
          прохождения экспертизы проекта. Без получения данных документов ввод
          БМК в эксплуатацию невозможен.
        </p>
        <p class="block info__text">
          Применяются блочно-модульные котельные для отопления, горячего
          водоснабжения, производства пара для технологических нужд. Обслуживать
          БМК может одно или нескольких зданий.
        </p>
        <p class="block info__text">
          Блочно-модульные котельные также называют«транспортабельные котельные
          установки ТКУ (БКУ)».
        </p>
      </div>
      <div class="column is-5">
        <div
          class="bmk-video"
          style="background-image: url('https://img.youtube.com/vi/PGMfjah3BmA/maxresdefault.jpg');">
          <a
            href="https://www.youtube.com/watch?v=PGMfjah3BmA"
            class="info__link"><img
              src="/images/bmk/u-icon-play.png"
              alt="icon-play"
              class="info_img" /></a>
        </div>
        <TitleLanding
          titleText="в каких случаях устанавливают бмк"
          white
          left />
        <p class="block info__text">
          Расположение объекта в удаленном или труднодоступном районе, где
          нерационально возводить стационарную котельную в силу ряда факторов:
          удаленность поставщиков строительных материалов, слабой развитости
          инфраструктуры либо невозможности организации мест проживания
          монтажников, отсутствие мест заправки баллонов кислородом и пропаном,
          сложные погодные условия
        </p>
        <p class="block info__text">
          Необходимость возведения котельной в крышном исполнении. Временное
          теплоснабжение (как пример - строительство объектов в сжатые сроки). В
          данном случае лучше всего подходит БМК на дизельном топливе
        </p>
        <p class="block info__text">
          Невозможность строительства стационарной котельной непосредственно на
          объекте заказчика (режимные предприятия и пр.)
        </p>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container columns block__inner">
      <div class="content column is-10 is-offset-1 block__inner_wrap">
        <TitleLanding titleText="Основные достоинства бмк" left green />
        <ul class="mb-5 dignity">
          <li class="dignity__item">
            максимальная готовность блочно-модульной котельной, поставленной на
            объект, к подключению к инженерным сетям и к вводу в эксплуатацию
            (БМК поставляется с завода вместе с пакетом необходимой технической
            документации, которая подтверждает готовность внутренних инженерных
            систем к эксплуатации);
          </li>
          <li class="dignity__item">
            минимальные сроки монтажа БМК на участке Заказчика;
          </li>
          <li class="dignity__item">
            котельная, хоть и относится к объектам капитального строительства,
            может быть демонтирована и перевезена в другую площадку (ТКУ);
          </li>
          <li class="dignity__item">
            блочно-модульная котельная, как правило – на дизельном топливе,
            может быть взята в аренду под конкретный проект.
          </li>
        </ul>
        <TitleLanding titleText="Основные недостатки бмк" left />
        <ul class="limitations">
          <li class="limitations__item">
            при наличии помещений в существующих зданиях или отдельных
            сооружений, соответствующих требованиям размещения котельного
            оборудования, блочно-модульные котельные, как правило, не
            используются в силу экономической нецелесообразности (стоимость БМК
            в таком случае выше на 25-30%, чем стационарной альтернативы);
          </li>
          <li class="limitations__item">
            ограничения в тепловой мощности котельной ввиду предельных
            габаритных размеров модулей, узлов и агрегатов (котлов, насосных
            станций и других элементов);
          </li>
          <li class="limitations__item">
            стесненные условия при обслуживании котельной, обусловленный
            компактностью расположения внутренних элементов;
          </li>
          <li class="limitations__item">
            ограниченность выбора материалов для ограждающих конструкций, БМК
            выполняется всего в двух видах: с использованием сендвич панелей или
            в металлическом контейнере. Тем самым, БМК менее долго вечны и более
            пожароопасны, чем стационарные котельные;
          </li>
          <li class="limitations__item">
            БМК, как правило, собираются заводом-производителем по типовым
            проектам, которые не учитывают всех индивидуальных особенностей
            объекта заказчика;
          </li>
          <li class="limitations__item">
            зачастую, заводы-изготовители блочно-модульных котельных связаны
            дилерскими договорами с производителями котельного оборудования, что
            накладывает на них обязательства по «навязыванию» определенных марок
            и моделей котельного оборудования. В таком случае завод
            руководствуется скорее своими интересами, нежели интересами
            Заказчика, в этом случае БМК уступает и в экономической
            составляющей;
          </li>
          <li class="limitations__item">
            завод-изготовитель занимается только поставкой оборудования,
            оставляя вопрос дальнейшей доработки проекта до момента введения в
            эксплуатацию Заказчику, который вынужден брать на себя функцию
            генерального проектировщика, генерального подрядчика и заниматься
            такими вопросами как: разработка, защита в экспертизе проектной
            документации, получение согласований всех заинтересованных
            инстанций, подведение вспомогательных сетей (газ, вода, канализация
            и так далее).
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container seo">
      <p class="seo__text">
        Для оптимизации затрат на строительство котельной перед началом
        проектирования и строительства, необходимо провести тепло-технический
        расчет и технико-экономическое обоснование строительства котельной,
        которые позволят:
      </p>
      <div class="colums is-descktop">
        <div class="seo__info column is-6">
          <ul class="seo__list">
            <li class="seo__item">
              определить необходимую мощность котельной;
            </li>
            <li class="seo__item">
              определить есть ли преимущества блочно-модульной котельной над
              стационарной в конкретном случае;
            </li>
            <li class="seo__item">
              оптимально подобрать котлы и оборудование путем сравнения их
              характеристик и стоимости;
            </li>
            <li class="seo__item">
              определить стоимость капитальных и текущих затрат на выпуск 1 МВт
              тепловой энергии;
            </li>
            <li class="seo__item">определить срок окупаемости котельной.</li>
          </ul>
          <p class="seo__text">
            Так как котлы разных производителей имеют разные габариты, то до
            проектирования и строительства немаловажно определить минимальные
            габариты котельной без потери надежности и качества.
          </p>
        </div>
        <div class="seo__img column is-6">
          <img src="/images/bmk/bmk_image_003.png" alt="bmk-img" />
        </div>
      </div>
    </div>
  </section>
</main>
