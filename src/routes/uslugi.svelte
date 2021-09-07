<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'

    let y = 0

    export let title = 'Услуги'
</script>

<style lang="scss">
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

  .container-wrap {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .hr-line {
    background-color: #f86923;
    height: 1px;
  }

  .content-bottom {
    margin-bottom: 20px;
  }

  .hide {
    position: relative;
    left: 150%;
  }

  .show {
    left: 0;
    transition: all 1s ease-in-out;
  }
</style>

<svelte:window bind:scrollY={y}/>
<SvelteSeo {title}/>
<main class="main main-page" role="main">
    <div class="columns">
        <div class="container mt-4">
            <div class="widget">
                <h2 class="title">
                    <span>{title}</span>
                    <span class="heading-line"/>
                </h2>
            </div>
            <div class="container-wrap">
                <div class="widget hide mt-1" class:show={y >= 0 && y <= 106}>
                    <h2 class="title">
            <span>
              <span>
                <a class="title-link" href="/page/proektirovanie">Проектирование
                </a>
              </span>
            </span>
                        <span class="heading-line">&nbsp;</span>
                    </h2>
                </div>

                <div
                        class="item-wrap node__content hide"
                        class:show={y >= 0 && y <= 848}>
                    <h3>
                        <a
                                href="/page/proektirovanie-magistralnyh-gazoprovodov-i-grs">Магистральные
                            газопроводы и ГРС</a>
                    </h3>

                    <p>
                        Работы по проектированию магистральных трубопроводов для
                        транспортировки природного газа с рабочим давлением 5.4-7.5 МПа,
                        газопроводов-отводов и газораспределительных станций (ГРС).
                    </p>

                    <h3>
                        <a
                                href="/page/proektirovanie-gazoraspredelitelnyh-sistem-i-grp">Газораспределительные
                            системы и ГРП</a>
                    </h3>

                    <p>
                        Проектирование систем газораспределения и газопотребления. Наши
                        проекты успешно проходят согласования в надзорных органах (ГУП МО
                        «Мособлгаз, АО «Мосгаз» и др.), в органах государственной и
                        негосударственной экспертизы.
                    </p>

                    <h3>
                        <a href="/page/vnutriploshadochnye-gazoprovody">Внутриплощадочные
                            газопроводы</a>
                    </h3>

                    <p>
                        Проектирование и строительство внутриплощадочных газопроводов,
                        средств антикоррозионной защиты, газорегуляторных пунктов (ПРГ),
                        узлов учета, внутренних газопроводов, газорегуляторных устройств
                        (ГРУ), систем автоматики безопасности и регулирования процесса
                        сжигания газа.
                    </p>

                    <h3>
                        <a href="/page/proektirovanie-avtonomnyh-kotelnyh">Котельные</a>
                    </h3>

                    <p>
                        Компания «Энергия Плюс» специализируется на разработке проектов
                        паровых и водогрейных котельных.
                    </p>

                    <h3><a href="/page/proektirovanie-energocentrov">Энергоцентры</a></h3>

                    <p>
                        Строительство малых теплоэлектростанций (мини-ТЭС) с
                        когенерационными установками, экономически эффективными и
                        экологически безопасными.
                    </p>

                    <h3><a href="/page/teplovye-punkty">Тепловые пункты</a></h3>

                    <h3>
                        <a href="/page/funkcii-generalnogo-proektirovshika">Функции
                            генерального проектировщика</a>
                    </h3>

                    <p>
                        Комплексная разработка проектно-сметной документации и берет на себя
                        весь управленческий процесс по разработке и техническому
                        сопровождению проектной документации до ввода объекта в
                        эксплуатацию.
                    </p>
                    <hr class="hr-line"/>
                </div>

                <div class="widget hide" class:show={y >= 106 && y <= 954}>
                    <h2 class="title">
                        <span><span><a href="/stroitelstvo">Строительство</a></span> </span><span class="heading-line">&nbsp;</span>
                    </h2>
                </div>

                <div
                        class="item-wrap node__content hide"
                        class:show={y >= 265 && y <= 1484}>
                    <h3><a href="/postavka-oborudovania">Поставка оборудования</a></h3>

                    <p>
                        Комплектная поставка оборудования объектов теплоэнергетики
                        (котельное и газовое оборудование, когенерационные установки,
                        приборы и средства автоматизации, оборудование систем
                        электроснабжения и средства диспетчеризации).
                    </p>

                    <h3>
                        <a href="/page/stroitelno-montazhnye-raboty">Строительно-монтажные
                            работы</a>
                    </h3>

                    <p>
                        Строительно-монтажные работы - сложный технологический процесс,
                        требующий от специалистов «Энергии Плюс» опыта и высокой
                        квалификации.
                    </p>

                    <h3>
                        <a href="/page/pusko-naladochnye-raboty">Пуско-наладочные работы</a>
                    </h3>

                    <p>
                        Работу инженеров проектировщиков, конструкторов, строителей по вводу
                        в эксплуатацию энергетического объекта всегда заканчивают
                        инженеры-наладчики, которые в процессе проведения пуско-наладочных
                        работ могут выявить ошибки при проектировании и строительстве,
                        недостатки в работе оборудования до начала его эксплуатации.
                    </p>

                    <h3>
                        <a href="/page/funkcii-tehnicheskogo-zakazchika">Функции
                            технического заказчика</a>
                    </h3>

                    <p>
                        Техническое и юридическое сопровождение разработки предпроектной и
                        проектной документации, управление проектом на стадии его разработки
                        и согласования, осуществляет связь между заказчиком-инвестором,
                        субподрядными организациями, государственными органами, осуществляет
                        технический надзор в процессе строительства объекта.
                    </p>

                    <hr class="hr-line"/>
                </div>

                <div class="widget hide" class:show={y >= 742 && y <= 1590}>
                    <h2 class="title">
                        <span><span><a href={"#"}>Обслуживание</a></span> </span><span class="heading-line">&nbsp;</span>
                    </h2>
                </div>

                <div
                        class="item-wrap node__content hide"
                        class:show={y >= 848 && y <= 1853}>
                    <h3><a href="/avtorskii-nadzor">Авторский надзор</a></h3>

                    <p>
                        Полный комплекс услуг по авторскому сопровождению проектов, которое
                        помогает контролировать все самые мельчайшие детали и этапы
                        воплощения проекта в целом и его дальнейшего функционирования.
                    </p>

                    <h3>
                        <a href={"#"}>Сервисное
                            обслуживание</a>
                    </h3>

                    <p>
                        Техническое обслуживание – это комплекс мероприятий, обеспечивающих
                        долговечную, эффективную и безотказную работу теплоэнергетического
                        оборудования.
                    </p>

                    <hr class="hr-line"/>
                </div>

                <div class="widget hide" class:show={y >= 1111 && y <= 1959}>
                    <h2 class="title">
                        <span><span><a href="/energoaudit">Энергоаудит</a></span> </span><span class="heading-line">&nbsp;</span>
                    </h2>
                </div>

                <div class="item-wrap node__content hide" class:show={y >= 1164}>
                    <h3><a href="/energeticeskii-pasport">Энергетический паспорт</a></h3>

                    <h3>
                        <a href={"#"}>Энергетическое
                            обследование</a>
                    </h3>
                    <hr class="hr-line"/>
                </div>

                <div class="content-bottom hide" class:show={y >= 1270}>
                    <CallbackForm btnText="Мы перезвоним вам !" left white/>
                </div>
            </div>
        </div>
    </div>
</main>
