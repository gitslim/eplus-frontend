<script context="module">
  import { fetchEndpoint } from "$lib/utils";
  import SvelteSeo from "svelte-seo";
</script>

<script>
  import BtnZayavka from "$lib/components/BtnZayavka.svelte";
  import HeaderLanding from "$lib/components/HeaderLanding.svelte";
  import HiddenH1 from "$lib/components/HiddenH1.svelte";

  const meta = {
    title: "ПРОИЗВОДСТВО котельных в заводских условиях",
    description: "Собственное производство котельных в заводских условиях. Надежность, высокое качество и скорость сборки. Экскурсия на производство.",
    h1: "Производство котельных в заводских условиях",
  };

  const headerCaption = {
    caption: "ПРОИЗВОДСТВО",
    subtitle: "котельных в заводских условиях"
  };
</script>

<style>
  .hero.proizvodstvo-hero {
    background-image: url('/images/proizvodstvo/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 80vh;
    position: relative;
  }

  .hero.proizvodstvo-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
  }

  .hero.proizvodstvo-hero .hero-body {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  .proizvodstvo-hero :global(.btn__zayavka) {
    text-transform: lowercase;
    font-weight: 300 !important;
  }

  @media (min-width: 769px) {
    .proizvodstvo-hero :global(.container__title) {
      font-size: 60px !important;
      margin-bottom: 10px !important;
      max-width: 1000px !important;
      line-height: 1.5 !important;
    }
    .proizvodstvo-hero :global(.container__title::before) {
      width: 180px !important;
      height: 12px !important;
      top: -35px !important;
    }
    .proizvodstvo-hero :global(.container__text) {
      font-size: 32px !important;
      margin-bottom: 35px !important;
      line-height: 1.2 !important;
    }
    .proizvodstvo-hero :global(.btn__zayavka) {
      font-size: 32px !important;
      height: 65px !important;
      width: 100% !important;
      max-width: 550px !important;
      border-radius: 35px !important;
      padding: 0 0 10px  0px !important;
    }
  }

  @media (max-width: 768px) {
    .proizvodstvo-hero :global(.container__title) {
      margin-bottom: 10px !important;
    }
    .proizvodstvo-hero :global(.btn__zayavka) {
      width: 100% !important;
    }
  }
  
  .advantage-list {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
  }
  
  .advantage-list li {
    position: relative;
    padding-left: 50px;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .advantage-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 32px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23ff6600" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
  }

  .advantages-section {
    position: relative;
    overflow: hidden;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .advantages-section .text-content {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .advantages-section .image-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 41.6667%; /* is-5 */
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
  }

  .advantages-section .image-wrapper img {
    width: auto;
    height: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: bottom;
  }

  @media (max-width: 768px) {
    .advantages-section .image-wrapper {
      position: relative;
      width: 100%;
      height: 300px;
    }
  }

  .about-production-bg {
      background-color: #a4a5a7;
      color: #000;
  }
  .about-production-bg .title {
      color: #000;
      margin-bottom: 1.5rem;
  }
  
  .production-stats {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .stat-row {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background: rgba(255, 255, 255, 0.6);
    padding: 1rem 1.2rem;
    border-radius: 4px; /* Square aesthetic */
    border-left: 5px solid #ff6600;
  }

  .stat-icon svg {
    width: 26px;
    height: 26px;
    color: #ff6600;
  }

  .stat-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stat-info .stat-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #444;
    font-weight: 600;
    margin-bottom: 0.1rem;
  }

  .stat-info .stat-value {
    font-size: 1.05rem;
    font-weight: 500;
    color: #111;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.85);
    padding: 1.2rem;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stat-card:hover {
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  .stat-num {
    display: flex;
    align-items: baseline;
    font-size: 2rem;
    font-weight: 800;
    color: #ff6600;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .stat-unit {
    font-size: 0.9rem;
    color: #666;
    font-weight: 600;
    margin-left: 6px;
  }

  .stat-desc {
    font-size: 0.9rem;
    color: #222;
    font-weight: 600;
    line-height: 1.3;
  }

  @media (max-width: 600px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }

  .about-production-bg :global(.btn__zayavka) {
      border-radius: 0 !important;
      white-space: nowrap !important;
      padding-left: 2rem !important;
      padding-right: 2rem !important;
      width: max-content !important;
  }
  
  @media (max-width: 600px) {
    .about-production-bg :global(.btn__zayavka) {
        width: 100% !important;
    }
  }
</style>

<SvelteSeo title={meta.title} description={meta.description} />
<HiddenH1>{meta.h1}</HiddenH1>

<main>
  <!-- Hero Section -->
  <section class="hero proizvodstvo-hero">
    <div class="hero-body">
      <HeaderLanding {...headerCaption}>
        <div class="columns mt-4">
          <div class="column">
            <BtnZayavka btnText="ЗАКАЗАТЬ КОТЕЛЬНУЮ" radius />
          </div>
        </div>
      </HeaderLanding>
    </div>
  </section>

  <!-- Advantages Section -->
  <section class="section px-4 advantages-section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 text-content">
          <h2 class="title is-3" style="text-transform: uppercase;">ПРЕИМУЩЕСТВА ЗАВОДСКОЙ СБОРКИ</h2>
          <p class="is-size-5 mb-5 mt-4">
            Для блочно-модульных котельных заводская сборка — это ключевой аргумент в пользу надежности и скорости
          </p>
          <ul class="advantage-list">
            <li>Непрерывный контроль качества производства работ: сварных швов, соединений и подключений</li>
            <li>Сборка осуществляется в оптимальных условиях, исключено коррозирующее воздействие погодных условий на строительно-монтажный процесс</li>
            <li>Компактность технических решений: упрощается процесс выбора участка для размещения и эксплуатации ОПО</li>
            <li>Быстрая скорость возведения котельной на площадке заказчика</li>
            <li>Упрощенная логистика (особенно актуально для изолированных и труднодоступных территорий)</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="image-wrapper">
      <img src="/images/proizvodstvo/worker.png" alt="Специалист в каске" />
    </div>
  </section>

  <!-- About Production Section -->
  <section class="section about-production-bg" style="padding-top: 4rem; padding-bottom: 4rem;">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <h2 class="title is-3" style="text-transform: uppercase;">О ПРОИЗВОДСТВЕ</h2>
          <div class="production-stats mb-5">
            <div class="stat-row">
              <div class="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="stat-info">
                <span class="stat-title">Расположение</span>
                <span class="stat-value">Московская область, г. Щелково</span>
              </div>
            </div>
            
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-num">500<span class="stat-unit">м²</span></div>
                <div class="stat-desc">Площадь производства</div>
              </div>
              <div class="stat-card">
                <div class="stat-num">3<span class="stat-unit">шт/мес</span></div>
                <div class="stat-desc">Производительность</div>
              </div>
              <div class="stat-card">
                <div class="stat-num">5<span class="stat-unit">шт</span></div>
                <div class="stat-desc">Вместимость склада</div>
              </div>
              <div class="stat-card">
                <div class="stat-num">20<span class="stat-unit">чел</span></div>
                <div class="stat-desc">Штат сотрудников</div>
              </div>
            </div>
          </div>
          <div>
            <BtnZayavka btnText="Получить экскурсию на производство" />
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <img src="/images/proizvodstvo/boiler.jpg" alt="Производство изнутри" style="border-radius: 4px; width: 100%; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
        </div>
      </div>
    </div>
  </section>
</main>
