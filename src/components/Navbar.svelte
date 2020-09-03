<script>
  import Link from "./Link.svelte";

  export let segment

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

<nav class="navbar has-centered-menu has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="main-logo" href="/"></a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar"
       on:click={toggleMenu}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="mainNavbar" class="navbar-menu" class:is-active={menuOpen} on:click={handleMenuClick}>
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable is-mega" on:mouseover={()=>toggleDropdown(true)}
           on:mouseleave={()=>toggleDropdown(false)}>
        <Link cls="navbar-link" title="Услуги">Услуги</Link>
        <div class="navbar-dropdown is-boxed is-hidden-mobile" class:is-hidden={!showDropdown}>
          <div class="container is-fluid columns">
            <div class="column">
              <Link cls="navbar-item navbar-title" title="Проектирование">Проектирование</Link>
              <Link cls="navbar-item" path="page" title="Проектирование магистральных газопроводов и ГРС">Магистральные
                газопроводы и ГРС
              </Link>
              <Link cls="navbar-item" path="page" title="Проектирование Газораспределительных Систем И ГРП">
                Газораспределительные системы и ГРП
              </Link>
              <Link cls="navbar-item" path="page" title="Внутриплощадочные газопроводы">Внутриплощадочные газопроводы
              </Link>
              <Link cls="navbar-item" path="page" title="Котельные">Котельные</Link>
              <Link cls="navbar-item" path="page" title="Блочно-модульные котельные">Блочно-модульные котельные</Link>
              <Link cls="navbar-item" path="page" title="Энергоцентры">Энергоцентры</Link>
              <Link cls="navbar-item" path="page" title="Тепловые пункты">Тепловые пункты</Link>
              <Link cls="navbar-item" path="page" title="Функции генерального проектировщика">Функции генерального
                проектировщика
              </Link>
            </div>
            <div class="column">
              <Link cls="navbar-item navbar-title" title="Строительство">Строительство</Link>
              <Link cls="navbar-item" path="page" title="Поставка оборудования">Поставка оборудования</Link>
              <Link cls="navbar-item" path="page" title="Строительно-монтажные работы">Строительно-монтажные работы
              </Link>
              <Link cls="navbar-item" path="page" title="Пуско-наладочные работы">Пуско-наладочные работы</Link>
              <Link cls="navbar-item" path="page" title="Функции технического заказчика">Функции технического
                заказчика
              </Link>
            </div>
            <div class="column">
              <Link cls="navbar-item navbar-title" title="Энергоаудит">Энергоаудит</Link>
            </div>
            <div class="column">
              <Link cls="navbar-item navbar-title" title="Экспресс расчет">Экспресс расчет</Link>
              <Link cls="navbar-item" title="Теплотехнический расчет">Теплотехнический расчет</Link>
              <img src="https://source.unsplash.com/random/500x300" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable" on:mouseover={()=>toggleDropdown(true)}
           on:mouseleave={()=>toggleDropdown(false)}>
        <Link cls="navbar-link" title="Комплексные решения">Комплексные решения</Link>
        <div class="navbar-dropdown is-boxed is-hidden-mobile" class:is-hidden={!showDropdown}>
          <div class="container is-fluid columns">
            <div class="column">
              <Link cls="navbar-item" title="Техническое перевооружение котельной">Техническое перевооружение
                котельной
              </Link>
              <Link cls="navbar-item" title="Внутриплощадочные газопроводы">Внутриплощадочные газопроводы</Link>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable" on:mouseover={()=>toggleDropdown(true)}
           on:mouseleave={()=>toggleDropdown(false)}>
        <Link cls="navbar-link" title="Полезное">Полезное</Link>
        <div class="navbar-dropdown is-boxed is-hidden-mobile" class:is-hidden={!showDropdown}>
          <div class="container is-fluid columns">
            <div class="column">
              <Link cls="navbar-item" title="Вопросы и ответы">Вопросы и ответы</Link>
              <Link cls="navbar-item" title="Калькуляторы">Калькуляторы</Link>
              <Link cls="navbar-item" title="Нормативные документы">Нормативные документы</Link>
              <Link cls="navbar-item" title="Статьи">Статьи</Link>
            </div>
          </div>
        </div>
      </div>
      <Link cls="navbar-item" slug="news" title="Новости">Новости</Link>
      <div class="navbar-item has-dropdown is-hoverable" on:mouseover={()=>toggleDropdown(true)}
           on:mouseleave={()=>toggleDropdown(false)}>
        <Link cls="navbar-link" title="О компании">О компании</Link>
        <div class="navbar-dropdown is-boxed is-hidden-mobile" class:is-hidden={!showDropdown}>
          <div class="container is-fluid columns">
            <div class="column">
              <Link cls="navbar-item" title="История">История</Link>
              <Link cls="navbar-item" title="Допуски СРО и аттестаты">Допуски СРО и аттестаты</Link>
              <Link cls="navbar-item" title="Референс-лист">Референс-лист</Link>
              <Link cls="navbar-item" title="Отзывы клиентов">Отзывы клиентов</Link>
            </div>
          </div>
        </div>
      </div>
      <Link cls="navbar-item" slug="contacts">Контакты</Link>
    </div>
    <div class="navbar-end">
      <!--      <a class="navbar-item"><i class="fa fa-search"></i></a>-->
      <a class="navbar-item" href="tel:+74957907697">
        <i class="fa fa-phone"></i>
        <span class="callibri_phone">+7 (495) 790-76-97</span>
        <br>
      </a>
    </div>
  </div>
</nav>
