<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import CallbackForm from '$lib/components/CallbackForm.svelte'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"

    let y = 0

    const meta = {
        title: 'Услуги. Проектирование. Строительство. Производство и поставка БМК.',
        description: 'Инжиниринга полного цикла. Промышленные газопроводы. Производство и поставка блочно-модульных котельных. Строительство стационарных котельных. Природный газ и дизельное топливо. ',
        h1: 'Услуги по энергоснабжению промышленного объекта. Газификация производства. Энергоаудит. Проектирование и строительство. '
    }
</script>

<style lang="scss">

</style>


<SvelteSeo title="{meta.title}" description="{meta.description}"/>


<section class="section py-4">
    <div class="container">
        <h1 class="title">{meta.h1}</h1>

        <h2 class="title has-text-centered">
            <a class="has-text-grey" href="/page/proektirovanie">Проектирование
            </a>
        </h2>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a class=""
                           href="/page/proektirovanie-magistralnyh-gazoprovodov-i-grs">Магистральные
                            газопроводы и ГРС</a>
                    </h3>
                    <p>
                        Работы по проектированию магистральных трубопроводов для
                        транспортировки природного газа с рабочим давлением 5.4-7.5 МПа,
                        газопроводов-отводов и газораспределительных станций (ГРС).
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/proektirovanie-gazoraspredelitelnyh-sistem-i-grp">Газораспределительные системы и
                            ГРП</a>
                    </h3>
                    <p>
                        Проектирование систем газораспределения и газопотребления. Наши
                        проекты успешно проходят согласования в надзорных органах (ГУП МО
                        «Мособлгаз, АО «Мосгаз» и др.), в органах государственной и
                        негосударственной экспертизы.
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle"><span>Авторский надзор</span></h3>
                    <p>
                        Полный комплекс услуг по авторскому сопровождению проектов, которое
                        помогает контролировать все самые мельчайшие детали и этапы
                        воплощения проекта в целом и его дальнейшего функционирования.
                    </p>
                </article>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/vnutriploshadochnye-i-vnutrennie-gazoprovody">Газоснабжение</a>
                    </h3>
                    <p>
                        Проектирование и строительство внутриплощадочных газопроводов,
                        средств антикоррозионной защиты, газорегуляторных пунктов (ПРГ),
                        узлов учета, внутренних газопроводов, газорегуляторных устройств
                        (ГРУ), систем автоматики безопасности и регулирования процесса
                        сжигания газа.
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/proektirovanie-avtonomnyh-kotelnyh">Котельные</a>
                    </h3>
                    <p>
                        Компания «Энергия Плюс» специализируется на разработке проектов
                        паровых и водогрейных котельных.
                    </p>
                </article>

                <div class="tile is-child ">
                    <CallbackForm titleText="Нужна консультация?" btnText="Мы перезвоним вам !" white/>
                </div>

            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle"><a href="/page/proektirovanie-energocentrov">Энергоцентры</a></h3>
                    <p>
                        Строительство малых теплоэлектростанций (мини-ТЭС) с
                        когенерационными установками, экономически эффективными и
                        экологически безопасными.
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle"><a href="/page/individualnye-i-centralnye-teplovye-punkty">Тепловые пункты</a></h3>
                    <p>
                        Рабочая документация разрабатывается, в объеме, необходимом для выполнения строительно-монтажных
                        работ и в соответствии с требованиями ГОСТ 21.1101-2013, стандартов ЕСКД, СПДС.
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/funkcii-generalnogo-proektirovshika">Функции
                            генерального проектировщика</a>
                    </h3>
                    <p>
                        Комплексная разработка проектно-сметной документации и берет на себя
                        весь управленческий процесс по разработке и техническому
                        сопровождению проектной документации до ввода объекта в
                        эксплуатацию.
                    </p>
                </article>
            </div>
        </div>

        <h2 class="title has-text-centered pt-6">
            <a class="has-text-grey" href="/page/stroitelstvo">Строительство</a>
        </h2>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/postavka-oborudovaniya">Поставка оборудования</a></h3>
                    <p>
                        Комплектная поставка оборудования объектов теплоэнергетики
                        (котельное и газовое оборудование, когенерационные установки,
                        приборы и средства автоматизации, оборудование систем
                        электроснабжения и средства диспетчеризации).
                    </p>
                </article>

                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/stroitelno-montazhnye-raboty">Строительно-монтажные
                            работы</a>
                    </h3>
                    <p>
                        Строительно-монтажные работы - сложный технологический процесс,
                        требующий от специалистов «Энергии Плюс» опыта и высокой
                        квалификации.
                    </p>
                </article>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/pusko-naladochnye-raboty">Пуско-наладочные работы</a>
                    </h3>
                    <p>
                        Работу инженеров проектировщиков, конструкторов, строителей по вводу
                        в эксплуатацию энергетического объекта всегда заканчивают
                        инженеры-наладчики, которые в процессе проведения пуско-наладочных
                        работ могут выявить ошибки при проектировании и строительстве,
                        недостатки в работе оборудования до начала его эксплуатации.
                    </p>
                </article>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
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
                </article>

                <div class="tile is-child ">
                    <CallbackForm titleText="Нужна консультация?" btnText="Мы перезвоним вам !" white/>
                </div>
            </div>
        </div>

        <h2 class="title has-text-centered pt-6">
            <a class="has-text-grey" href="/page/rasschitat-stoimost">Экспресс расчет</a>
        </h2>

        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical is-4">
                <article class="tile is-child box">
                    <h3 class="subtitle">
                        <a href="/page/teplotehnicheskij-raschet">Теплотехнический расчет</a></h3>
                    <p>
                        Расчет потребности в тепле и топливе (ТТР) требуется для объектов, на которых предполагается 
                        использование природного газа в качестве топлива и/или на технологические нужды, а также в 
                        случаях реконструкции или технического перевооружения действующих объектов, при которых производится 
                        замена газоиспользующего оборудования.
                    </p>
                </article>
            </div>

            
        </div>



    </div>
</section>
