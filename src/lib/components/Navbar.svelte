<script>
    import Link from './Link.svelte'
    import Icon from 'fa-svelte'
    import {faPhone, faSearch} from '@fortawesome/free-solid-svg-icons'

    let menuOpen = false
    let showDropdown = false

    function toggleMenu() {
        menuOpen = !menuOpen
    }

    function handleMenuClick(event) {
        showDropdown = false
        menuOpen = false
    }

    function toggleDropdown(payload) {
        showDropdown = payload
    }
</script>

<nav
        aria-label="main navigation"
        class="navbar has-centered-menu has-shadow is-fixed-top"
        role="navigation">
    <div class="navbar-brand">
        <a class="main-logo" href="/">«Энергия Плюс» - Инжиниринговая компания</a>
        <a href={'#'}
           aria-expanded="false"
           aria-label="menu"
           class="navbar-burger burger"
           data-target="mainNavbar"
           on:click={toggleMenu}
           role="button">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
        </a>
    </div>
    <div
            class="navbar-menu"
            class:is-active={menuOpen}
            id="mainNavbar"
            on:click={handleMenuClick}>
        <div class="navbar-start">
            <div
                    class="navbar-item has-dropdown is-hoverable is-mega"
                    on:mouseleave={() => toggleDropdown(false)}
                    on:mouseover={() => toggleDropdown(true)}
                    on:focus={() => toggleDropdown(true)}>
                <Link cls="navbar-link" title="Услуги">Услуги</Link>
                <div
                        class="navbar-dropdown is-boxed is-hidden-mobile"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    path="page"
                                    title="Проектирование">
                                Проектирование
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Проектирование магистральных газопроводов и ГРС">
                                Магистральные газопроводы и ГРС
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Проектирование Газораспределительных Систем И ГРП">
                                Газораспределительные системы и ГРП
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="vnutriploshadochnye-i-vnutrennie-gazoprovody"
                                    title="Газоснабжение объектов кап. строительства">
                                Газоснабжение объектов кап. строительства
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="proektirovanie-avtonomnyh-kotelnyh"
                                    title="Котельные">
                                Котельные
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="proektirovanie-energocentrov"
                                    title="Энергоцентры">
                                Энергоцентры
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="individualnye-i-centralnye-teplovye-punkty"
                                    title="Тепловые пункты">
                                Тепловые пункты
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Функции генерального проектировщика">
                                Функции генерального проектировщика
                            </Link>
                        </div>
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    path="page"
                                    title="Строительство">
                                Строительство
                            </Link>
                            <Link cls="navbar-item" path="page" title="Поставка оборудования">
                                Поставка оборудования
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Строительно-монтажные работы">
                                Строительно-монтажные работы
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Пуско-наладочные работы">
                                Пуско-наладочные работы
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Функции технического заказчика">
                                Функции технического заказчика
                            </Link>
                        </div>
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    path="page"
                                    title="Производство">
                                Производство
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Изготовление блочно-модульных котельных">
                                Изготовление блочно-модульных котельных
                            </Link>
                        </div>
                        <!-- <div class="column">
                          <Link
                            cls="navbar-item navbar-title"
                            path="page"
                            title="Энергоаудит"
                            slug="energoaudit">
                            Энергоаудит
                          </Link>
                        </div> -->
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    slug="rasschitat-stoimost"
                                    title="Экспресс расчет">
                                Экспресс расчет
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Теплотехнический расчет">
                                Теплотехнический расчет
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                    class="navbar-item has-dropdown is-hoverable"
                    on:mouseleave={() => toggleDropdown(false)}
                    on:mouseover={() => toggleDropdown(true)}
                    on:focus={() => toggleDropdown(true)}>
                <Link cls="navbar-link" title="Специальные предложения">
                    Специальные предложения
                </Link>
                <div
                        class="navbar-dropdown is-boxed is-hidden-mobile"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Техническое перевооружение котельной">
                                Техническое перевооружение котельной
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Внутриплощадочные газопроводы">
                                Внутриплощадочные газопроводы
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="konteynernaya-kotelnaya-1MW"
                                    title="Контейнерная котельная 1 МВт в наличии">
                                Контейнерная котельная 1 МВт в наличии
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                    class="navbar-item has-dropdown is-hoverable"
                    on:mouseleave={() => toggleDropdown(false)}
                    on:mouseover={() => toggleDropdown(true)}
                    on:focus={() => toggleDropdown(true)}>
                <Link cls="navbar-link" title="Полезное">Полезное</Link>
                <div
                        class="navbar-dropdown is-boxed is-hidden-mobile"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link cls="navbar-item" slug="faq" title="Вопросы и ответы">
                                Вопросы и ответы
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    slug="documents"
                                    title="Нормативные документы">
                                Нормативные документы
                            </Link>
                            <Link cls="navbar-item" slug="articles" title="Статьи">
                                Статьи
                            </Link>
                            <Link cls="navbar-item" slug="search">
                                Поиск...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                    class="navbar-item has-dropdown is-hoverable"
                    on:mouseleave={() => toggleDropdown(false)}
                    on:mouseover={() => toggleDropdown(true)}
                    on:focus={() => toggleDropdown(true)}>
                <Link cls="navbar-link" title="Рассчитать стоимость">
                    Рассчитать стоимость
                </Link>
                <div
                        class="navbar-dropdown is-boxed is-hidden-mobile"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Калькулятор расчета стоимости строительства и проектирования котельной">
                                Калькулятор расчета стоимости строительства и проектирования котельной
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Калькулятор расчета стоимости газопровода">
                                Калькулятор расчета стоимости газопровода
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link cls="navbar-item" slug="news" title="Новости">Новости</Link>
            <div
                    class="navbar-item has-dropdown is-hoverable"
                    on:mouseleave={() => toggleDropdown(false)}
                    on:mouseover={() => toggleDropdown(true)}
                    on:focus={() => toggleDropdown(true)}>
                <Link cls="navbar-link" slug="company" title="О компании">
                    О компании
                </Link>
                <div
                        class="navbar-dropdown is-boxed is-hidden-mobile"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <!--                            <Link-->
                            <!--                                    cls="navbar-item"-->
                            <!--                                    path="company"-->
                            <!--                                    slug="history"-->
                            <!--                                    title="История">-->
                            <!--                                История-->
                            <!--                            </Link>-->
                            <!--                            <Link-->
                            <!--                                    cls="navbar-item"-->
                            <!--                                    path="company"-->
                            <!--                                    slug="dopuski-sro"-->
                            <!--                                    title="Допуски СРО и аттестаты">-->
                            <!--                                Допуски СРО и аттестаты-->
                            <!--                            </Link>-->
                            <!--                            <Link-->
                            <!--                                    cls="navbar-item"-->
                            <!--                                    path="company"-->
                            <!--                                    slug="referens-list"-->
                            <!--                                    title="Референс-лист">-->
                            <!--                                Референс-лист-->
                            <!--                            </Link>-->
                            <!--                            <a rel="external"-->
                            <!--                                    class="navbar-item"-->
                            <!--                                    href="/presentation/Энергия%20Плюс.pdf"-->
                            <!--                                    target="_blank">Презентация</a>-->
                            <Link cls="navbar-item" path="company" title="Отзывы клиентов">
                                Отзывы клиентов
                            </Link>
                            <Link cls="navbar-item" path="page" slug="referens-list" title="Референс-лист">
                                Референс-лист
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link cls="navbar-item" slug="contacts">Контакты</Link>
            <Link cls="navbar-item is-hidden-mobile has-text-primary" slug="search">
                <Icon icon="{faSearch}"/>
            </Link>
            <!--            <div class="navbar-item is-hidden-mobile">-->
            <!--                <SearchInput placeholder="Поиск..." fontSize={14} type={3} width="14em"/>-->
            <!--            </div>-->
            <Link cls="navbar-item is-hidden-desktop" slug="search">Поиск...</Link>
        </div>
        <div class="navbar-end">
            <a rel="external"
               class="navbar-item zphone"
               href="tel:+74957907697">
                <Icon icon={faPhone}/>
                <span class="callibri_phone zphone">+7 (495) 790-76-97</span>
                <br/>
            </a>
        </div>
    </div>
</nav>
