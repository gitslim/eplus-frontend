<script context="module">
    import {fetchEndpoint} from '$lib/utils'

    export const load = async ({fetch}) => {
        return await fetchEndpoint(fetch, '/ep/list-testimonials.json', {})
    }
</script>

<script>
/*---------ИМПОРТЫ---------*/
    import SvelteSeo from 'svelte-seo'
    import website from '$lib/config/website'
    import HiddenH1 from "$lib/components/HiddenH1.svelte"
    import { onMount } from 'svelte';

/*---------ПЕРЕМЕННЫЕ МОДАЛОВ---------*/
    let containerModalActive = false;
    let containerImageSrc = '';

    let stationaryModalActive = false;
    let stationaryImageSrc = '';
    let currentStationaryIndex = 0;

    const stationaryImages = [
        '/fotoandvideo/kotelnaya1.jpg',
        '/fotoandvideo/kotelnaya2.png',
        '/fotoandvideo/kotelnaya3.png',
        '/fotoandvideo/kotelnaya4.png',
        '/fotoandvideo/kotelnaya5.png',
    ];

/*---------ФУНКЦИИ КОНТЕЙНЕРНЫХ ФОТО---------*/
    function openContainerPhoto(event) {
        const item = event.currentTarget;
        const img = item.querySelector('img');
        if (img) {
            containerImageSrc = img.src;
            containerModalActive = true;
            document.body.style.overflow = 'hidden';
        }
    }

    function closeContainerModal() {
        containerModalActive = false;
        document.body.style.overflow = '';
    }

/*---------ФУНКЦИИ СТАЦИОНАРНЫХ ФОТО---------*/
    function openStationaryPhoto(index) {
        currentStationaryIndex = index;
        stationaryImageSrc = stationaryImages[index];
        stationaryModalActive = true;
        document.body.style.overflow = 'hidden';
    }

    function closeStationaryModal() {
        stationaryModalActive = false;
        document.body.style.overflow = '';
    }

    function statPrev() {
        currentStationaryIndex = (currentStationaryIndex - 1 + stationaryImages.length) % stationaryImages.length;
        stationaryImageSrc = stationaryImages[currentStationaryIndex];
    }

    function statNext() {
        currentStationaryIndex = (currentStationaryIndex + 1) % stationaryImages.length;
        stationaryImageSrc = stationaryImages[currentStationaryIndex];
    }

/*---------ФУНКЦИИ ВИДЕО---------*/
    function handlePlayClick(event) {
        const wrapper = event.currentTarget.closest('.video-wrapper');
        if (!wrapper) return;
        const video = wrapper.querySelector('video');
        const btn = wrapper.querySelector('.play-btn-wrapper');
        if (video) {
            if (btn) btn.style.display = 'none';
            video.play();
        }
    }

/*---------ВАЛИДАЦИЯ И ОТПРАВКА BITRIX24---------*/
    async function handleFormSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        const username = formData.get('username').trim();
        const phone = formData.get('phone').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;
        if (username.length < 2 || !nameRegex.test(username)) {
            alert('Пожалуйста, введите корректное имя (без цифр и спецсимволов).');
            return;
        }

        const phoneClean = phone.replace(/\D/g, '');
        if (phoneClean.length < 10) {
            alert('Пожалуйста, введите корректный номер телефона (минимум 10 цифр).');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Пожалуйста, введите корректный Email адрес.');
            return;
        }

        const data = {
            fields: {
                TITLE: `Заявка с сайта от ${username}`,
                NAME: username,
                PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
                EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
                COMMENTS: message || 'Без комментариев'
            }
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_BITRIX_HOOK_URL}crm.lead.add.json`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');
                form.reset();
            } else {
                throw new Error('Ошибка сервера Bitrix');
            }
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или позвоните нам по телефону +7 (495) 790-76-97.');
        }
    }

/*---------ON MOUNT---------*/
    onMount(() => {
        // Hover-эффекты для схемы комплексного подхода
        const nodes = document.querySelectorAll('.node[data-target]');
        nodes.forEach((node) => {
            node.addEventListener('mouseenter', () => {
                const targetId = node.getAttribute('data-target');
                const line = document.getElementById(`glow-${targetId}`);
                if (line) {
                    line.setAttribute('style', `
                        opacity: 1 !important;
                        stroke: #d35d2d !important;
                        stroke-width: 4 !important;
                        stroke-dasharray: 0 !important;
                        visibility: visible !important;
                        display: block !important;
                        fill: none !important;
                    `);
                    line.classList.add('active');
                }
            });
            node.addEventListener('mouseleave', () => {
                const targetId = node.getAttribute('data-target');
                const line = document.getElementById(`glow-${targetId}`);
                if (line) {
                    line.setAttribute('style', 'opacity: 0 !important;');
                    line.classList.remove('active');
                }
            });
        });

        // Плавный скролл к якорям
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                }
            });
        });

        // Клавиатурные события для модалов
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                if (containerModalActive) closeContainerModal();
                if (stationaryModalActive) closeStationaryModal();
            }
            if (stationaryModalActive) {
                if (e.key === 'ArrowLeft') statPrev();
                if (e.key === 'ArrowRight') statNext();
            }
        };
        
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    });

    export let data
    const {siteTitle, siteDescription, siteH1} = website
</script>

<SvelteSeo title="{siteTitle}" description="{siteDescription}"/>
<HiddenH1>{siteH1}</HiddenH1>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=check_circle" />
</svelte:head>

<main class="energiya-plus-page" style="padding-top: 85px;">
  
  <section class="hero">
    <div class="site-container hero-wrapper">
      <div class="hero-content">
        <div class="tag-year">Работаем с 2003 года</div>
        <h1>
          Инжиниринговая<br />
          компания <span class="orange-text">"Энергия плюс"</span>
        </h1>
        <p class="hero-desc">
          Мы создаём инженерные решения в сфере производства, газоснабжения и энергетики — от
          проектирования до внедрения и технической поддержки.
        </p>
        <div class="hero-buttons">
          <a href="#services" class="hero-btn hero-btn-primary">Наши услуги</a>
          <a href="#contacts" class="hero-btn hero-btn-secondary">Связаться с нами</a>
        </div>
      </div>

      <div class="visual-box">
        <div class="decor decor-tl"></div>
        <div class="decor decor-br"></div>
        <div class="video-box video-wrapper">
            <video src="/fotoandvideo/videoheader.MOV" controls preload="metadata"></video>
            <div class="play-btn-wrapper" on:click={handlePlayClick}>
                <div class="play-overlay">
                    <div class="gallery-play-btn"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>

  <div class="site-container">
    <div class="separator"><span>наши услуги</span></div>
  </div>

  <section class="services-section" id="services">
    <div class="site-container">
      <div class="services-grid">
        <article class="service-card service-card--top">
          <a href="/page/izgotovlenie-blochno-modulnyh-kotelnyh" class="service-link">
            <div class="service-img-box"><img src="/fotoandvideo/sborkambk.jpg" alt="Сборка БМК" class="service-img" /></div>
            <div class="service-label">
              <div class="service-icon-box"><img src="/ickonandlogo/ourservices/Vector.png" alt="" class="service-icon-img" /></div>
              <div class="service-text-box"><span class="service-title">Сборка БМК</span></div>
            </div>
          </a>
        </article>

        <article class="service-card service-card--top">
          <a href="/page/vnutriploshadochnye-i-vnutrennie-gazoprovody" class="service-link">
            <div class="service-img-box"><img src="/fotoandvideo/gazosnob.jpg" alt="Газоснабжение" class="service-img" /></div>
            <div class="service-label">
              <div class="service-icon-box"><img src="/ickonandlogo/ourservices/Vector (1).png" alt="" class="service-icon-img" /></div>
              <div class="service-text-box"><span class="service-title">Газоснабжение</span></div>
            </div>
          </a>
        </article>

        <article class="service-card service-card--top">
          <a href="/page/proektirovanie-avtonomnyh-kotelnyh" class="service-link">
            <div class="service-img-box"><img src="/fotoandvideo/microenergi.jpg" alt="Малая энергетика" class="service-img" /></div>
            <div class="service-label">
              <div class="service-icon-box"><img src="/ickonandlogo/ourservices/Vector (2).png" alt="" class="service-icon-img" /></div>
              <div class="service-text-box"><span class="service-title">Малая энергетика</span></div>
            </div>
          </a>
        </article>

        <article class="service-card service-card--bottom">
          <a href="/page/proektirovanie" class="service-link">
            <div class="service-img-box"><img src="/fotoandvideo/proejectir.jpg" alt="Проектирование" class="service-img" /></div>
            <div class="service-label">
              <div class="service-icon-box"><img src="/ickonandlogo/ourservices/Vector (3).png" alt="" class="service-icon-img" /></div>
              <div class="service-text-box"><span class="service-title">Проектирование</span></div>
            </div>
          </a>
        </article>

        <article class="service-card service-card--bottom">
          <a href="/page/stroitelno-montazhnye-raboty" class="service-link">
            <div class="service-img-box"><img src="/fotoandvideo/stroitelstvo.jpg" alt="Строительство" class="service-img" /></div>
            <div class="service-label">
              <div class="service-icon-box"><img src="/ickonandlogo/ourservices/Vector (4).png" alt="" class="service-icon-img" /></div>
              <div class="service-text-box"><span class="service-title">Строительство</span></div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>

  <div class="site-container">
    <div class="separator"><span>наши заслуги</span></div>
  </div>

  <section class="achievements-section">
    <div class="site-container">
      <div class="achievements-grid">
        <article class="ach-card">
          <div class="ach-icon-wrapper"><img src="/ickonandlogo/ourmerits/Group 1.png" alt="Годы работы" /></div>
          <div class="ach-number">22</div><div class="ach-text">Года работы</div>
        </article>
        <article class="ach-card">
          <div class="ach-icon-wrapper"><img src="/ickonandlogo/ourmerits/Vector-1.png" alt="Километры проектов" /></div>
          <div class="ach-number">750<span class="ach-number-small">км</span></div><div class="ach-text">Запроектировано</div>
        </article>
        <article class="ach-card">
          <div class="ach-icon-wrapper"><img src="/ickonandlogo/ourmerits/Vector-2.png" alt="Выполненные проекты" /></div>
          <div class="ach-number">458</div><div class="ach-text">Проектов выполнено</div>
        </article>
        <article class="ach-card">
          <div class="ach-icon-wrapper"><img src="/ickonandlogo/ourmerits/Vector-3.png" alt="Заказчики" /></div>
          <div class="ach-number">225</div><div class="ach-text">Организаций-заказчиков</div>
        </article>
      </div>
    </div>
  </section>

  <div class="site-container">
    <div class="separator"><span>Комплексный подход</span></div>
  </div>

  <section class="complex-section">
    <div class="site-container">
      <div class="complex-wrapper">
        <div class="scheme-container">
          <svg class="scheme-lines" viewBox="0 0 600 600" aria-hidden="true">
            <line x1="300" y1="300" x2="300" y2="50" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="300" y2="50" class="line-glow" id="glow-1" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
            <line x1="300" y1="300" x2="500" y2="130" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="500" y2="130" class="line-glow" id="glow-2" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
            <line x1="300" y1="300" x2="540" y2="330" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="540" y2="330" class="line-glow" id="glow-3" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
            <line x1="300" y1="300" x2="410" y2="510" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="410" y2="510" class="line-glow" id="glow-4" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
            <line x1="300" y1="300" x2="190" y2="510" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="190" y2="510" class="line-glow" id="glow-5" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
            <line x1="300" y1="300" x2="60" y2="330" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="60" y2="330" class="line-glow" id="glow-6" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
            <line x1="300" y1="300" x2="100" y2="130" class="line-bg" style="stroke: #e0e0e0; stroke-width: 2; stroke-dasharray: 8 6; fill: none;" />
            <line x1="300" y1="300" x2="100" y2="130" class="line-glow" id="glow-7" style="stroke: #d35d2d; stroke-width: 4; opacity: 0; fill: none; transition: opacity 0.3s;" />
          </svg>
          <div class="node center-node"><div class="center-circle"><img src="/ickonandlogo/anintegratedapproach/Vector-7.png" alt="" /><span>Инжиниринг<br />полного цикла</span></div></div>
          <div class="node sat-1" data-target="1"><div class="sat-icon"><img src="/ickonandlogo/anintegratedapproach/Vector 112.png" alt="" /></div><div class="node-text">Готовый к<br> эксплуатации объект</div></div>
          <div class="node sat-2" data-target="2"><div class="sat-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-6.png" alt="" /></div><div class="node-text">Разработка ТЭО</div></div>
          <div class="node sat-3" data-target="3"><div class="sat-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-4.png" alt="" /></div><div class="node-text">Сбор ИРД</div></div>
          <div class="node sat-4" data-target="4"><div class="sat-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-2.png" alt="" /></div><div class="node-text">Выполнение и<br> адаптация</div></div>
          <div class="node sat-5" data-target="5"><div class="sat-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-3.png" alt="" /></div><div class="node-text">ПИР, экспертиза,<br> авторский надзор</div></div>
          <div class="node sat-6" data-target="6"><div class="sat-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-5.png" alt="" /></div><div class="node-text">Оборудование<br>и СМР</div></div>
          <div class="node sat-7" data-target="7"><div class="sat-icon"><span class="material-symbols-outlined">check_circle</span></div><div class="node-text">ПНР и сдача<br>объекта</div></div>
        </div>

        <div class="additional-services">
          <h2>Дополнительные услуги</h2>
          <a href="/page/teplotehnicheskij-raschet" class="add-service-card">
            <div class="add-service-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-8.png" alt="" /></div>
            <div class="add-service-text">Расчет потребности в тепле и топливе</div>
          </a>
          <div class="add-service-card"><div class="add-service-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-9.png" alt="" /></div><div class="add-service-text">Сопровождение при получении технических условия на подключение в ГРО</div></div>
          <div class="add-service-card"><div class="add-service-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-10.png" alt="" /></div><div class="add-service-text">Разработка альтернативных моделей теплоснабжения</div></div>
          <div class="add-service-card"><div class="add-service-icon"><img src="/ickonandlogo/anintegratedapproach/Vector-11.png" alt="" /></div><div class="add-service-text">Энергоаудит предприятия</div></div>
        </div>
      </div>
    </div>
  </section>

  <div class="site-container">
    <div class="separator"><span>О нас</span></div>
  </div>

  <section class="about-section">
    <div class="site-container about-wrapper">
      <div class="visual-box">
        <div class="decor decor-tr"></div>
        <div class="decor decor-bl"></div>
        <div class="video-box video-wrapper">
            <video src="/fotoandvideo/videopoletaeva.MOV" controls preload="metadata"></video>
            <div class="play-btn-wrapper" on:click={handlePlayClick}>
                <div class="play-overlay">
                    <div class="gallery-play-btn"></div>
                </div>
            </div>
        </div>
      </div>

      <div class="about-content">
        <h2 class="about-title">Энергия Плюс</h2>
        <p class="about-text">Более 20 лет обеспечивает промышленных абонентов эффективными решениями в области газоснабжения и энергетики. Компетенции и опыт, накопленные за это время, конвертировались в качественный продукт модульные котельные.</p>
        <p class="about-text">Производством БМК занимается дочернее предприятие - "Энергия Групп"</p>
      </div>
    </div>
  </section>

  <div class="site-container">
    <div class="separator"><span>Контейнерные котельные, собранные "Энергией плюс"</span></div>
  </div>

  <section class="container-boilers-section">
    <div class="site-container">
        <div class="container-gallery">
            <div class="gallery-column gallery-column--side">
                <div class="gallery-item gallery-item--small" on:click={openContainerPhoto}>
                    <img src="/fotoandvideo/bkm1.png" alt="Контейнерная котельная на транспортировке" />
                </div>
                <div class="gallery-item gallery-item--small" on:click={openContainerPhoto}>
                    <img src="/fotoandvideo/bkm2.png" alt="Монтаж контейнерной котельной" />
                </div>
            </div>

            <div class="gallery-column gallery-column--center">
                <div class="gallery-item gallery-item--video video-wrapper">
                    <video src="/fotoandvideo/videocreate.mp4" controls preload="metadata"></video>
                    <div class="play-btn-wrapper" on:click={handlePlayClick}>
                        <div class="play-overlay">
                            <div class="gallery-play-btn"></div>
                        </div>
                    </div>
                    <div class="watermark">
                        <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
                            <text x="0" y="18" font-family="Montserrat, sans-serif" font-size="14" font-weight="600" fill="#D35D2D">ЭНЕРГИЯ ПЛЮС</text>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="gallery-column gallery-column--side">
                <div class="gallery-item gallery-item--small" on:click={openContainerPhoto}>
                    <img src="/fotoandvideo/bmk3.jpg" alt="Готовая контейнерная котельная" />
                </div>
                <div class="gallery-item gallery-item--small" on:click={openContainerPhoto}>
                    <img src="/fotoandvideo/3dmodel.png" alt="3D модель котельной" />
                </div>
            </div>
        </div>
    </div>
  </section>

  <div class="site-container"><div class="separator"><span>Стационарные котельные по индивидуальному проекту</span></div></div>
  
  <section class="stationary-boilers-section">
    <div class="site-container">
        <div class="stationary-gallery">
            <div class="stationary-item" data-number="1" on:click={() => openStationaryPhoto(0)}><img src="/fotoandvideo/kotelnaya1.jpg" alt="" /></div>
            <div class="stationary-item" data-number="2" on:click={() => openStationaryPhoto(1)}><img src="/fotoandvideo/kotelnaya2.png" alt="" /></div>
            <div class="stationary-item" data-number="3" on:click={() => openStationaryPhoto(2)}><img src="/fotoandvideo/kotelnaya3.png" alt="" /></div>
            <div class="stationary-item" data-number="4" on:click={() => openStationaryPhoto(3)}><img src="/fotoandvideo/kotelnaya4.png" alt="" /></div>
            <div class="stationary-item" data-number="5" on:click={() => openStationaryPhoto(4)}><img src="/fotoandvideo/kotelnaya5.png" alt="" /></div>
        </div>
    </div>
  </section>

  <div class="site-container"><div class="separator"><span>Линейные объекты</span></div></div>
  
  <section class="linear-objects-section">
    <div class="site-container">
      <div class="linear-wrapper">
        <div class="linear-photo"><img src="/fotoandvideo/gazoprovod.png" alt="" /></div>
        <div class="linear-cards">
          <a href="/page/gazoprovod-zaschita" class="linear-card">
            <div class="card-icon"><img src="/ickonandlogo/anintegratedapproach/emege.png" alt="" /></div>
            <div class="card-text">Устройство защитных мероприятий на действующих магистральных газопроводах</div>
          </a>
          <a href="/page/gazoprovod-pereustroistvo" class="linear-card">
            <div class="card-icon"><img src="/ickonandlogo/anintegratedapproach/emege.png" alt="" /></div>
            <div class="card-text">Переустройство (вынос) участков газопроводов</div>
          </a>
          <a href="/page/stroitelsvo-gazoprovoda" class="linear-card">
            <div class="card-icon"><img src="/ickonandlogo/anintegratedapproach/emege.png" alt="" /></div>
            <div class="card-text">Строительство магистрального газопровода (МГ) или газопровода-отвода к газораспределительной станции (ГРС)</div>
          </a>
          <a href="/page/gazoprovod-rekonstrukciya" class="linear-card">
            <div class="card-icon"><img src="/ickonandlogo/anintegratedapproach/emege.png" alt="" /></div>
            <div class="card-text">Реконструкция, модернизация или техническое переоружение ГРС, крановых узлов, участков магистральных газопроводов</div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="site-container"><div class="separator"><span>Наши буклеты</span></div></div>
  
  <section class="booklets-section">
    <div class="site-container">
      <div class="booklets-container">
        <a href="https://xn--c1adkmgpem4hrai.xn--p1ai/presentation/Буклет с услугами в области энергетики.pdf" class="booklet" target="_blank" rel="noopener noreferrer">
          <div class="booklet-title"><span>Буклет по энергетике</span></div>
          <div class="booklet-image"><img src="/fotoandvideo/bucletenerge.png" alt="" /></div>
        </a>
        <a href="https://xn--c1adkmgpem4hrai.xn--p1ai/presentation/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82%20%D1%81%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%BE%D1%81%D0%BD%D0%B0%D0%B1%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.pdf" class="booklet" target="_blank" rel="noopener noreferrer">
          <div class="booklet-title"><span>Буклет по газу</span></div>
          <div class="booklet-image"><img src="/fotoandvideo/bukletgaz.png" alt="" /></div>
        </a>
      </div>
    </div>
  </section>

  <section class="contacts-section" id="contacts">
    <div class="site-container">
      <div class="contacts-container">
        <form class="contact-form" on:submit={handleFormSubmit}>
          <h2 class="form-title">Отправить заявку</h2>
          <div class="input-group">
            <div class="form-input-wrapper">
              <img src="/ickonandlogo/contact/solar_user-linear (1).png" alt="Иконка пользователя" class="form-input-icon" />
              <input type="text" name="username" placeholder="Ваше имя" required class="form-input-field" />
            </div>
            <div class="form-input-wrapper">
              <img src="/ickonandlogo/contact/Vector.png" alt="" class="form-input-icon" />
              <input type="tel" name="phone" placeholder="Ваш телефон" required class="form-input-field" />
            </div>
            <div class="form-input-wrapper form-textarea-wrapper">
              <img src="/ickonandlogo/contact/Vector (1).png" alt="" class="form-input-icon form-input-icon-textarea" />
              <textarea name="message" placeholder="Расскажите о вашем проекте" class="form-input-field form-input-textarea"></textarea>
            </div>
          </div>
          <button type="submit" class="submit-btn">Отправить</button>
        </form>
        <div class="contact-info">
          <h2 class="info-title">Контактная информация</h2>
          <p class="info-description">Мы всегда готовы ответить на ваши вопросы</p>
          <div class="info-item"><div class="info-icon"><img src="/contact/Vector.png" alt="" /></div><div class="info-details"><div class="info-label">Телефон</div><div class="info-value">+7 (495) 790-76-97</div></div></div>
          <div class="info-item"><div class="info-icon"><img src="/contact/Vector-1.png" alt="" /></div><div class="info-details"><div class="info-label">Email</div><div class="info-value"><a href="mailto:info@energy-plus.biz">info@energy-plus.biz</a></div></div></div>
          <div class="info-item"><div class="info-icon"><img src="/contact/Vector-2.png" alt="" /></div><div class="info-details"><div class="info-label">Адрес</div><div class="info-value">111123, Москва, 1-я Владимирская, д.10А, стр. 1</div></div></div>
          <div class="info-item"><div class="info-icon"><img src="/contact/watch.png" alt="" /></div><div class="info-details"><div class="info-label">Время работы</div><div class="info-value">Пн-Пт: 9:00 - 18:00</div></div></div>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- МОДАЛ: Контейнерные котельные -->
{#if containerModalActive}
<div class="modal active" on:click|self={closeContainerModal}>
    <img class="modal-content" src={containerImageSrc} alt="Полноэкранный просмотр" />
</div>
{/if}

<!-- МОДАЛ: Стационарные котельные -->
{#if stationaryModalActive}
<div class="modal active" on:click|self={closeStationaryModal}>
    <img class="modal-content" src={stationaryImageSrc} alt="Полноэкранный просмотр" />
    <span class="modal-nav modal-prev" on:click|stopPropagation={statPrev}>‹</span>
    <span class="modal-nav modal-next" on:click|stopPropagation={statNext}>›</span>
</div>
{/if}

<style>

/*---------CSS VARIABLES---------*/
:root {
  --primary-orange: #d35d2d;
  --primary-orange-light: rgba(211, 93, 45, 0.3);
  --primary-orange-shadow: rgba(211, 93, 45, 0.2);
  --gradient-orange: linear-gradient(135deg, #e36e40, #cf5628);
  --text-dark: #000000;
  --text-muted: rgba(0, 0, 0, 0.3);
  --text-white: #ffffff;
  --tag-bg: #fcece6;
  --tag-text: #8b4a36;
  --border-color: #999999;
  --border-light: #e0e0e0;
  --bg-white: #ffffff;
  --icon-gray: #777;
  --container-max-width: 1360px;
  --content-max-width: 1272px;
  --container-padding-left: clamp(20px, 5vw, 40px);
  --container-padding-right: clamp(20px, 5vw, 40px);
  --section-gap: clamp(40px, 6vw, 90px);
  --separator-padding: clamp(30px, 2.8vw, 40px);
  --border-radius: 10px;
  --border-radius-lg: 12px;
  --transition-speed: 0.3s;
  --shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 20px rgba(211, 93, 45, 0.2);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.1);
  --shadow-header: 0px 15px 15px -10px rgba(0, 0, 0, 0.05);
  --gallery-gap: 24px;
  --photo-gap: 20px;
}

/*---------RESET---------*/
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*---------MAIN---------*/
.energiya-plus-page {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  background-color: rgba(255, 255, 255, 1);
  color: var(--text-dark);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
video {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

/*---------CONTAINER---------*/
.site-container {
  max-width: var(--container-max-width);
  width: 100%;
  margin: 0 auto;
  padding-left: var(--container-padding-left);
  padding-right: var(--container-padding-right);
  position: relative;
}

/*---------HERO---------*/
.hero {
  padding: clamp(40px, 5.8vw, 83px) 0 clamp(30px, 2.8vw, 40px);
  background: var(--bg-white);
}

.hero-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: clamp(30px, 4vw, 60px);
}

.hero-content {
  flex: 1;
  max-width: 580px;
  z-index: 5;
}

.tag-year {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: var(--tag-bg);
  border-radius: var(--border-radius);
  font-size: clamp(11px, 0.9vw, 13px);
  color: var(--tag-text);
  font-weight: 600;
  margin-bottom: clamp(12px, 1.1vw, 16px);
}

h1 {
  font-weight: 600;
  font-size: clamp(24px, 2.6vw, 38px);
  line-height: 1.1;
  color: var(--text-dark);
  margin-bottom: clamp(15px, 1.4vw, 20px);
}

.orange-text {
  color: var(--primary-orange);
}

.hero-desc {
  font-weight: 500;
  font-size: clamp(14px, 1.25vw, 18px);
  line-height: 1.5;
  color: var(--text-dark);
  margin: 4px 0 clamp(20px, 2.1vw, 30px);
  text-align: justify; 
}


.hero-buttons {
  display: flex;
  gap: clamp(15px, 1.4vw, 20px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

}

/*---------HERO BUTTONS---------*/
.hero-btn {
  height: clamp(44px, 3.6vw, 52px);
  padding: 0 clamp(20px, 2.2vw, 32px);
  border-radius: var(--border-radius);
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all var(--transition-speed);
  text-decoration: none;
  box-sizing: border-box;
  line-height: 1;
  border: none;
}

.hero-btn-primary {
  background: var(--primary-orange) !important;
  color: var(--bg-white) !important;
}

.hero-btn-primary:hover {
  background: rgba(255, 117, 61, 1) !important;
  transform: translateY(-2px) !important;
  box-shadow: var(--shadow-md) !important;
}

.hero-btn-secondary {
  background: transparent !important;
  border: 1px solid var(--text-dark) !important;
  color: var(--text-dark) !important;
}

.hero-btn-secondary:hover {
  background: rgba(211, 93, 45, 0.1) !important;
  border-color: var(--primary-orange) !important;
  color: var(--primary-orange) !important;
  transform: translateY(-2px) !important;
}

/*---------VISUAL BOX---------*/
.visual-box {
  position: relative;
  flex: 1;
  max-width: 631px;
  aspect-ratio: 631/355;
  flex-shrink: 0;
  overflow: visible;
}

.video-box {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--text-dark);
  position: relative;
  z-index: 2;
  box-shadow: var(--shadow-lg);
  cursor: pointer;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-wrapper:hover video {
  filter: brightness(1);
}

.play-btn-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.gallery-play-btn {
  width: clamp(60px, 5.5vw, 80px);
  height: clamp(60px, 5.5vw, 80px);
  background: var(--bg-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.gallery-play-btn::after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20px;
  border-color: transparent transparent transparent var(--primary-orange);
  margin-left: 4px;
}

.play-btn-wrapper:hover .gallery-play-btn {
  transform: scale(1.1);
  background: var(--primary-orange);
}

.play-btn-wrapper:hover .gallery-play-btn::after {
  border-color: transparent transparent transparent var(--bg-white);
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
}

.video-wrapper:hover .play-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.decor {
  position: absolute;
  width: clamp(70px, 7.6vw, 110px);
  height: clamp(70px, 7.6vw, 110px);
  background: var(--primary-orange-light);
  border-radius: var(--border-radius-lg);
  z-index: 1;
  pointer-events: none;
}

.decor-tl {
  top: -20px;
  left: -20px;
}

.decor-br {
  bottom: -20px;
  right: -20px;
}

.decor-tr {
  top: -20px;
  right: -20px;
}

.decor-bl {
  bottom: -20px;
  left: -20px;
}

/*---------SEPARATOR---------*/
.separator {
  padding: var(--separator-padding) 0;
  margin: 0 auto;
  max-width: var(--content-max-width);
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--text-muted);
  border-radius: 99px;
}

.separator span {
  font-weight: 400;
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1;
  color: var(--text-muted);
  padding: 0 clamp(15px, 1.4vw, 20px);
  white-space: nowrap;
  letter-spacing: 0.05em;
}

/*---------SERVICES---------*/
.services-section {
  padding-top: var(--separator-padding);
  padding-bottom: var(--section-gap);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  row-gap: 80px;
}

.service-card {
  position: relative;
  overflow: visible;
  transition: transform var(--transition-speed);
}

.service-link {
  display: block;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card--top {
  grid-column: span 2;
}

.service-card--bottom {
  grid-column: span 3;
}

.service-img-box {
  width: 100%;
  height: 288px;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.service-label {
  position: absolute;
  left: 34px;
  bottom: -51.5px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 3;
}

.service-icon-box {
  width: 103px;
  height: 103px;
  background: var(--primary-orange);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-speed);
}

.service-card:hover .service-icon-box {
  transform: scale(1.05);
}

.service-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.service-text-box {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 58px 20px 0 10px;
}

.service-title {
  font-weight: 500;
  font-size: clamp(18px, 1.7vw, 24px);
  line-height: 1;
  color: var(--text-dark);
  white-space: nowrap;
}

/*---------ACHIEVEMENTS---------*/
.achievements-section {
  padding-top: 30px;
  padding-bottom: 80px;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding-top: 40px;
}

.ach-card {
  width: 100%;
  max-width: 300px;
  height: 205px;
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  position: relative;
  padding: 85px 24px 0;
  overflow: visible;
  margin: 0 auto;
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.ach-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
}

.ach-card::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: var(--bg-white);
  border-radius: 50%;
  left: 20px;
  top: -51px;
  box-shadow: 0 1px 0 0 var(--border-light);
  z-index: 1;
}

.ach-icon-wrapper {
  position: absolute;
  top: -40px;
  left: 30px;
  width: 75px;
  height: 75px;
  background: var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: transform var(--transition-speed);
}

.ach-card:hover .ach-icon-wrapper {
  transform: scale(1.1);
}

.ach-icon-wrapper img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.ach-number {
  font-weight: 500;
  font-size: clamp(42px, 4.4vw, 64px);
  line-height: 1;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.ach-number-small {
  font-size: clamp(24px, 2.5vw, 36px);
}

.ach-text {
  font-weight: 500;
  font-size: clamp(15px, 1.25vw, 18px);
  line-height: 1.2;
  color: var(--text-dark);
}

/*---------COMPLEX APPROACH---------*/
.complex-section {
  width: 100%;
  padding-bottom: var(--section-gap);
}

.complex-wrapper {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 65px;
  padding: 20px 0;
}

.scheme-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
  flex-shrink: 0;
}

.scheme-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.line-bg {
  stroke: var(--border-light) !important;
  stroke-width: 2 !important;
  stroke-dasharray: 8 6 !important;
  fill: none !important;
}

.line-glow {
  stroke: var(--primary-orange) !important;
  stroke-width: 3 !important;
  stroke-dasharray: 0 !important;
  opacity: 0 !important;
  transition: opacity var(--transition-speed) !important;
  fill: none !important;
}

.line-glow.active {
  opacity: 1 !important;
  stroke: var(--primary-orange) !important;
}

.node {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 2;
  cursor: pointer;
}

.center-node {
  top: 50%;
  left: 50%;
}

.center-node:hover .center-circle {
  box-shadow: 0 0 30px rgba(211, 93, 45, 0.8), 0 0 50px rgba(211, 93, 45, 0.5), var(--shadow-lg);
}

.center-circle {
  position: absolute;
  width: clamp(140px, 13.8vw, 198px);
  height: clamp(140px, 13.8vw, 198px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--gradient-orange);
  color: var(--bg-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(20px, 2.4vw, 34px) 6px;
  gap: 5px;
  box-shadow: var(--shadow-lg);
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: clamp(14px, 1.4vw, 20px);
  text-align: center;
  transition: box-shadow var(--transition-speed);
}

.center-circle img {
  width: clamp(35px, 3.5vw, 50px);
  height: clamp(35px, 3.5vw, 50px);
  object-fit: contain;
  margin-bottom: 10px;
}

.sat-icon {
  position: absolute;
  width: clamp(70px, 7.6vw, 110px);
  height: clamp(70px, 7.6vw, 110px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--primary-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-speed);
  box-shadow: var(--shadow-sm);
}

.sat-icon img {
  width: 45%;
  height: 45%;
  object-fit: contain;
}

.sat-icon .material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48 !important;
  font-size: clamp(40px, 4.2vw, 60px) !important;
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.node:hover .sat-icon {
  transform: translate(-50%, -50%) scale(1.15);
}

.node-text {
  position: absolute;
  top: calc(50% + clamp(45px, 4.9vw, 70px));
  left: 50%;
  transform: translateX(-50%);
  width: clamp(120px, 12.5vw, 180px);
  text-align: center;
  font-size: clamp(12px, 1.1vw, 16px);
  font-weight: 600;
  line-height: 1.3;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.02em;
  color: var(--text-dark);
}

.sat-1 {
  top: 8.33%;
  left: 50%;
}

.sat-2 {
  top: 21.67%;
  left: 83.33%;
}

.sat-3 {
  top: 55%;
  left: 90%;
}

.sat-4 {
  top: 85%;
  left: 68.33%;
}

.sat-5 {
  top: 85%;
  left: 31.67%;
}

.sat-6 {
  top: 55%;
  left: 10%;
}

.sat-7 {
  top: 21.67%;
  left: 16.67%;
}

/*---------ADDITIONAL SERVICES---------*/
.additional-services {
  flex: 1;
  max-width: 542px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 29px;
}

.additional-services h2 {
  font-weight: 600;
  font-size: 24px;
  color: var(--text-dark);
  margin-bottom: 25px;
}

.add-service-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 10px;
  min-height: 74px;
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-speed);
  text-decoration: none; 
}

.add-service-card:hover {
  transform: translateX(10px);
  border-color: var(--primary-orange);
  box-shadow: var(--shadow-sm);
}

.add-service-icon {
  width: 54px;
  height: 54px;
  background: var(--primary-orange);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  flex-shrink: 0;
  transition: transform var(--transition-speed);
}

.add-service-card:hover .add-service-icon {
  transform: scale(1.1);
}

.add-service-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.add-service-text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text-dark);
}

/*---------ABOUT---------*/
.about-section {
  padding-top: var(--separator-padding);
  padding-bottom: var(--section-gap);
}

.about-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.about-content {
  flex: 1;
  max-width: 561px;
}

.about-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  color: var(--primary-orange);
  margin-bottom: 30px;
}

.about-text {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  text-align: justify;
  color: var(--text-dark);
  margin-bottom: 15px;
}

.about-text:last-child {
  margin-bottom: 0;
}

/*---------CONTAINER BOILERS---------*/
.container-boilers-section {
  padding-top: var(--separator-padding);
  padding-bottom: var(--section-gap);
}

.container-gallery {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  gap: var(--gallery-gap);
  justify-content: space-between;
}

.gallery-column {
  display: flex;
  flex-direction: column;
  gap: var(--gallery-gap);
}

.gallery-column--side {
  flex: 1;
  width: 24.5%;
}

.gallery-column--center {
  flex: 1.92;
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #f5f5f5;
  width: 100%;
}

.gallery-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(211, 93, 45, 0.3);
  z-index: 10;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-item--small {
  aspect-ratio: 312 / 175;
}

.gallery-item--video {
  aspect-ratio: 600 / 336;
}

.watermark {
  position: absolute;
  bottom: 15px;
  left: 15px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.watermark img {
  height: clamp(20px, 2vw, 30px);
  width: auto;
}

.gallery-item:hover .watermark {
  opacity: 0.9;
}

/*---------STATIONARY BOILERS---------*/
.stationary-boilers-section {
  padding-top: var(--separator-padding);
  padding-bottom: var(--section-gap);
}

.stationary-gallery {
  width: 100%;
  display: flex;
  gap: var(--photo-gap);
  justify-content: space-between;
}

.stationary-item {
  flex: 1;
  aspect-ratio: 1;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #f5f5f5;
  position: relative;
}

.stationary-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 35px rgba(211, 93, 45, 0.3);
  z-index: 10;
}

.stationary-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.stationary-item:hover img {
  transform: scale(1.05);
}

.stationary-item::before {
  content: attr(data-number);
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: var(--primary-orange);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.stationary-item:hover::before {
  opacity: 1;
}

/*---------LINEAR OBJECTS---------*/
.linear-objects-section {
  padding-top: var(--separator-padding);
  padding-bottom: var(--section-gap);
}

.linear-wrapper {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  gap: 25px;
  align-items: flex-start;
}

.linear-photo {
  width: 591px;
  height: 353px;
  flex-shrink: 0;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.linear-photo:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(211, 93, 45, 0.3);
}

.linear-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.linear-photo:hover img {
  transform: scale(1.05);
}

.linear-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 656px;
}

.linear-card {
  width: 100%;
  min-height: 74px;
  background: var(--primary-orange);
  border-radius: var(--border-radius);
  padding: 15px 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(211, 93, 45, 0.3);
  text-decoration: none;
  color: inherit;
}

.linear-card:hover {
  transform: translateX(10px);
  box-shadow: 0 8px 25px rgba(211, 93, 45, 0.5);
  background: linear-gradient(135deg, #e36e40, #cf5628);
}

.card-icon {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.linear-card:hover .card-icon {
  transform: rotate(360deg) scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.card-icon img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.card-text {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: var(--text-white);
  flex: 1;
}

/*---------BOOKLETS---------*/
.booklets-section {
  padding-top: var(--separator-padding);
  padding-bottom: var(--section-gap);
}

.booklets-container {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  gap: 72px;
  justify-content: center;
}

.booklet {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.booklet:hover {
  transform: translateY(-5px);
}

.booklet-title {
  font-weight: 500;
  font-size: 24px;
  color: var(--text-dark);
  padding: 15px 0;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0 0;
}

.booklet-image {
  position: relative;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  aspect-ratio: 1.5 / 1;
}

.booklet-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.booklet:hover .booklet-image img {
  transform: scale(1.05);
}

/*---------CONTACTS---------*/
.contacts-section {
  padding-top: var(--separator-padding);
  padding-bottom: 60px;
}

.contacts-container {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
}

.contact-form {
  flex: 1;
  max-width: 623px;
  background: var(--bg-white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-title {
  font-weight: 500;
  font-size: 24px;
  color: var(--text-dark);
  margin-bottom: 0;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/*---------FORM INPUTS WITH ICONS---------*/
.form-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-textarea-wrapper {
  align-items: flex-start;
}

.form-input-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
}

.form-input-icon-textarea {
  top: 15px !important;
  transform: translateY(0) !important;
}

.form-input-field {
  width: 100%;
  border: 1.5px solid rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  padding: 15px 20px 15px 56px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--text-dark);
  transition: border-color 0.3s ease;
  outline: none;
}

.form-input-field:focus {
  border-color: var(--primary-orange);
}

.form-input-field::placeholder {
  color: rgba(0, 0, 0, 0.3);
}

.form-input-textarea {
  resize: vertical;
  min-height: 100px;
  padding-top: 15px;
}

/*---------SUBMIT BUTTON---------*/
.submit-btn {
  align-self: flex-start;
  border: none;
  border-radius: var(--border-radius);
  padding: 15px 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: var(--text-white);
  background: var(--primary-orange);
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: rgba(255, 117, 61, 1);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/*---------CONTACT INFO---------*/
.contact-info {
  flex: 1;
  max-width: 623px;
  background: var(--primary-orange);
  border-radius: var(--border-radius);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--text-white);
}

.info-title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 0;
}

.info-description {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: #FA855A;
  border-radius: var(--border-radius);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.info-label {
  font-weight: 500;
  font-size: 16px;
  color: #FFCBB8;
}

.info-value {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

/*---------MODALS---------*/
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  animation: fadeIn 0.3s ease;
}

.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: var(--border-radius);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 50px;
  color: var(--bg-white);
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 300;
  line-height: 1;
  user-select: none;
}

.modal-close:hover {
  color: var(--primary-orange);
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 24px;
  color: white;
  user-select: none;
}

.modal-nav:hover {
  background: var(--primary-orange);
}

.modal-prev {
  left: 40px;
}

.modal-next {
  right: 40px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/*---------MEDIA QUERIES---------*/
@media (max-width: 1320px) {
  .container-gallery {
    gap: 20px;
  }

  .gallery-column--side {
    flex: 1;
    max-width: none;
  }

  .gallery-column--center {
    flex: 2;
    max-width: none;
  }

  .gallery-item--small {
    width: 100%;
    height: auto;
    aspect-ratio: 312 / 175;
  }

  .gallery-item--video {
    width: 100%;
    height: auto;
    aspect-ratio: 600 / 336;
  }

  .stationary-item {
    width: auto;
    height: auto;
    aspect-ratio: 1;
  }

  .linear-photo {
    width: 45%;
    height: auto;
    aspect-ratio: 591 / 353;
  }

  .linear-cards {
    flex: 1;
    max-width: 100%;
  }
}

@media (max-width: 1200px) {
  .site-container {
    padding-left: 30px;
    padding-right: 30px;
  }

  .container-gallery {
    flex-direction: column;
    gap: 20px;
  }

  .gallery-column {
    width: 100%;
    flex-direction: row;
    gap: 20px;
  }

  .gallery-item--small {
    width: 50%;
  }

  .gallery-column--center {
    width: 100%;
  }

  .contacts-container {
    flex-direction: column;
    gap: 40px;
  }

  .contact-form,
  .contact-info {
    max-width: 100%;
  }
}

@media (max-width: 992px) {
  .hero-wrapper,
  .about-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .hero-content,
  .about-content {
    max-width: 100%;
  }

  .visual-box {
    max-width: 100%;
    width: 100%;
  }

  .complex-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .scheme-container {
    max-width: 500px;
  }

  .additional-services {
    max-width: 100%;
    padding-top: 0;
  }

  .stationary-gallery {
    flex-wrap: wrap;
    justify-content: center;
  }

  .stationary-item {
    flex: 0 0 calc(33.333% - 14px);
    min-width: 200px;
  }

  .linear-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .linear-photo {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .linear-cards {
    width: 100%;
    max-width: 100%;
  }

  .booklets-container {
    flex-direction: column;
    gap: 40px;
  }

  .booklet {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-card--top,
  .service-card--bottom {
    grid-column: span 1;
  }

  .achievements-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .scheme-container {
    max-width: 420px;
  }

  .center-circle {
    width: 120px;
    height: 120px;
    font-size: 12px;
    padding: 15px 4px;
  }

  .center-circle img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }

  .sat-icon {
    width: 60px;
    height: 60px;
  }

  .node-text {
    width: 100px;
    font-size: 10px;
    top: calc(50% + 38px);
  }

  .decor {
    width: 60px;
    height: 60px;
  }

  .gallery-column {
    flex-direction: column;
  }

  .gallery-item--small {
    width: 100%;
  }

  .gallery-play-btn {
    width: 60px;
    height: 60px;
  }

  .gallery-play-btn::after {
    border-width: 10px 0 10px 16px;
  }

  .modal-close {
    top: 20px;
    right: 20px;
    font-size: 40px;
  }

  .stationary-item {
    flex: 0 0 calc(50% - 10px);
  }

  .modal-nav {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .modal-prev {
    left: 20px;
  }

  .modal-next {
    right: 20px;
  }

  .linear-card {
    min-height: 70px;
    padding: 12px 10px;
  }

  .card-icon {
    width: 36px;
    height: 36px;
  }

  .card-icon img {
    width: 16px;
    height: 16px;
  }

  .card-text {
    font-size: 16px;
    line-height: 110%;
  }
}

@media (max-width: 580px) {
  .scheme-container {
    display: none;
  }

  .scheme-lines {
    display: none;
  }

  .center-node {
    position: static;
    width: 100%;
    margin-bottom: 20px;
  }

  .center-circle {
    position: static;
    width: 100%;
    max-width: 280px;
    height: auto;
    min-height: 120px;
    transform: none;
    margin: 0 auto;
    padding: 20px;
  }

  .node {
    position: static;
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    padding: 12px;
    background: var(--bg-white);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    transition: all 0.3s ease;
  }

  .node:hover {
    border-color: var(--primary-orange);
    box-shadow: var(--shadow-sm);
  }

  .sat-icon {
    position: static;
    transform: none;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .node:hover .sat-icon {
    transform: scale(1.1);
  }

  .node-text {
    position: static;
    transform: none;
    width: auto;
    text-align: left;
    font-size: 14px;
    line-height: 1.4;
    flex: 1;
  }

  .line-glow {
    display: none;
  }

  .additional-services {
    padding-top: 30px;
  }
}

@media (max-width: 480px) {
  .site-container {
    padding-left: 15px;
    padding-right: 15px;
  }

  h1 {
    font-size: 22px;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-btn {
    width: 100%;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card--top,
  .service-card--bottom {
    grid-column: span 1;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .separator span {
    font-size: 14px;
  }

  .container-gallery {
    gap: 15px;
  }

  .gallery-column {
    gap: 15px;
  }

  .watermark {
    bottom: 10px;
    left: 10px;
  }

  .watermark svg {
    width: 80px;
    height: 18px;
  }

  .stationary-gallery {
    gap: 15px;
    flex-direction: column;
  }

  .stationary-item {
    flex: 0 0 100%;
    width: 100%;
    height: auto;
  }

  .linear-cards {
    gap: 10px;
  }

  .linear-card {
    padding: 10px;
    gap: 12px;
  }

  .card-icon {
    width: 32px;
    height: 32px;
  }

  .card-text {
    font-size: 14px;
    line-height: 130%;
  }

  .booklets-container {
    gap: 30px;
  }

  .contact-form,
  .contact-info {
    padding: 20px;
  }

  .form-title,
  .info-title {
    font-size: 20px;
  }

  .form-input-field {
    font-size: 16px;
    padding: 12px 16px 12px 52px;
  }

  .submit-btn {
    width: 100%;
    font-size: 16px;
  }

  .info-description {
    font-size: 16px;
  }

  .info-icon {
    width: 40px;
    height: 40px;
  }

  .info-label,
  .info-value {
    font-size: 14px;
  }

  .center-circle {
    max-width: 100%;
    font-size: 14px;
  }

  .center-circle img {
    width: 35px;
    height: 35px;
  }

  .node {
    padding: 10px;
  }

  .sat-icon {
    width: 45px;
    height: 45px;
    margin-right: 12px;
  }

  .node-text {
    font-size: 13px;
  }

  .additional-services h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .add-service-card {
    min-height: 60px;
    padding: 10px;
  }

  .add-service-icon {
    width: 45px;
    height: 45px;
  }

  .add-service-text {
    font-size: 14px;
  }
}
</style>