<script>
    import Link from './Link.svelte'
    import Icon from 'fa-svelte'
    import {faPhone, faSearch, faGlobe} from '@fortawesome/free-solid-svg-icons'
    import {t, locale} from 'svelte-i18n'
    import {page, session} from '$app/stores'

    let menuOpen = false
    let showDropdown = false

    $: currentLocale = isEn ? 'en' : 'ru'
    $: isEn = ($session?.locale === 'en') || (Boolean($page?.path) && $page.path.startsWith('/en'))
    $: cleanPath = ($page?.path || '/')
        .replace(/^\/en(\/|$)/, '')
        .replace(/^\/+/, '')
    $: switchPath = isEn
        ? (cleanPath ? `/${cleanPath}` : '/')
        : (cleanPath ? `/en/${cleanPath}` : '/en')

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
        <a class="main-logo" href="{currentLocale === 'en' ? '/en/' : '/'}">{$t('nav.brand')}</a>
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
                <Link cls="navbar-link" title="Услуги">{$t('nav.services')}</Link>
                <div
                        class="navbar-dropdown is-boxed"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    path="page"
                                    title="Проектирование">
                                {$t('nav.design')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Проектирование магистральных газопроводов и ГРС">
                                {$t('nav.main_gas_pipelines')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Проектирование Газораспределительных Систем И ГРП">
                                {$t('nav.gas_distribution')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="vnutriploshadochnye-i-vnutrennie-gazoprovody"
                                    title="Газоснабжение объектов кап. строительства">
                                {$t('nav.gas_supply')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="proektirovanie-avtonomnyh-kotelnyh"
                                    title="Котельные">
                                {$t('nav.boiler_rooms')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="proektirovanie-energocentrov"
                                    title="Энергоцентры">
                                {$t('nav.power_centers')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="individualnye-i-centralnye-teplovye-punkty"
                                    title="Тепловые пункты">
                                {$t('nav.heat_points')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Функции генерального проектировщика">
                                {$t('nav.general_designer')}
                            </Link>
                        </div>
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    path="page"
                                    title="Строительство">
                                {$t('nav.construction')}
                            </Link>
                            <Link cls="navbar-item" path="page" title="Поставка оборудования">
                                {$t('nav.equipment_supply')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Строительно-монтажные работы">
                                {$t('nav.construction_works')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Пуско-наладочные работы">
                                {$t('nav.commissioning')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Функции технического заказчика">
                                {$t('nav.technical_customer')}
                            </Link>
                        </div>
                        <div class="column">
                            <Link
                                    cls="navbar-item navbar-title"
                                    path="page"
                                    title="Производство">
                                {$t('nav.manufacturing')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Изготовление блочно-модульных котельных">
                                {$t('nav.modular_boilers')}
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
                                {$t('nav.express_calc')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Теплотехнический расчет">
                                {$t('nav.heat_calc')}
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
                    {$t('nav.special_offers')}
                </Link>
                <div
                        class="navbar-dropdown is-boxed"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Техническое перевооружение котельной">
                                {$t('nav.boiler_upgrade')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Внутриплощадочные газопроводы">
                                {$t('nav.onsite_pipelines')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    slug="konteynernaya-kotelnaya"
                                    title="Контейнерная котельная в наличии">
                                {$t('nav.container_boiler')}
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
                <Link cls="navbar-link" title="Полезное">{$t('nav.useful')}</Link>
                <div
                        class="navbar-dropdown is-boxed"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link cls="navbar-item" slug="faq" title="Вопросы и ответы">
                                {$t('nav.faq')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    slug="documents"
                                    title="Нормативные документы">
                                {$t('nav.documents')}
                            </Link>
                            <Link cls="navbar-item" slug="articles" title="Статьи">
                                {$t('nav.articles')}
                            </Link>
                            <Link cls="navbar-item" slug="search">
                                {$t('nav.search')}
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
                    {$t('nav.cost_calc')}
                </Link>
                <div
                        class="navbar-dropdown is-boxed"
                        class:is-hidden={!showDropdown}>
                    <div class="container is-fluid columns">
                        <div class="column">
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Калькулятор расчета стоимости строительства и проектирования котельной">
                                {$t('nav.boiler_calc')}
                            </Link>
                            <Link
                                    cls="navbar-item"
                                    path="page"
                                    title="Калькулятор расчета стоимости газопровода">
                                {$t('nav.pipeline_calc')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link cls="navbar-item" slug="news" title="Новости">{$t('nav.news')}</Link>
            <div
                    class="navbar-item has-dropdown is-hoverable"
                    on:mouseleave={() => toggleDropdown(false)}
                    on:mouseover={() => toggleDropdown(true)}
                    on:focus={() => toggleDropdown(true)}>
                <Link cls="navbar-link" slug="company" title="О компании">
                    {$t('nav.about')}
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
                                {$t('nav.reviews')}
                            </Link>
                            <Link cls="navbar-item" path="page" slug="referens-list" title="Референс-лист">
                                {$t('nav.reference_list')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link cls="navbar-item" slug="contacts">{$t('nav.contacts')}</Link>
            <Link cls="navbar-item is-hidden-mobile has-text-primary" slug="search">
                <Icon icon="{faSearch}"/>
            </Link>
            <!--            <div class="navbar-item is-hidden-mobile">-->
            <!--                <SearchInput placeholder="Поиск..." fontSize={14} type={3} width="14em"/>-->
            <!--            </div>-->
            <Link cls="navbar-item is-hidden-desktop" slug="search">{$t('nav.search')}</Link>
        </div>
        <div class="navbar-end">
            <a rel="external"
               class="navbar-item zphone"
               href="tel:+74957907697">
                <Icon icon={faPhone}/>
                <span class="callibri_phone zphone">+7 (495) 790-76-97</span>
                <br/>
            </a>
            <a rel="external" class="navbar-item lang-switch" href="{switchPath}">
                <Icon icon={faGlobe}/>
                <span class="lang-switch-label">{currentLocale === 'ru' ? 'EN' : 'RU'}</span>
            </a>
        </div>
    </div>
</nav>

<style>
    .lang-switch {
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
    }
    .lang-switch-label {
        margin-left: 4px;
    }
</style>

