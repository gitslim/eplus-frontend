<!-- ================================================================
     SCRIPT
     ================================================================ -->
<script>
  import { bitrixLead } from '$lib/utils.js';
  import { imask } from '@imask/svelte';

  const maskOptions = {
    mask: '+7 (000) 000-00-00'
  };

  let showModal = false;
  let modalErrors = {};

  async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Clear previous errors
    modalErrors = {};
    let hasError = false;
    
    const rawName = formData.get("username") || "";
    if (!rawName.trim()) {
      modalErrors.name = "Обязательное поле";
      hasError = true;
    }

    const rawPhone = formData.get("phone") || "";
    const phoneDigits = rawPhone.replace(/\D/g, "");
    if (phoneDigits.length < 11) {
      modalErrors.phone = "Введите 10 цифр номера телефона";
      hasError = true;
    }

    if (hasError) {
      modalErrors = modalErrors;
      return;
    }

    try {
      const response = await bitrixLead({
        type: 'lead.orderForm',
        title: `Заявка с сайта от ${formData.get("username")}`,
        name: formData.get("username"),
        phone: formData.get("phone"),
        comments: formData.get("message") || "Без комментариев"
      });

      if (response.ok) {
        if (window.ym) {
            window.ym(54841009, 'reachGoal', 'lidformsiteyagtm');
        }
        alert(
          "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
        );
        form.reset();
        showModal = false;
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      alert(
        "Произошла ошибка при отправке. Пожалуйста, попробуйте позже или позвоните нам.",
      );
    }
  }

  // — Вспомогательное —
  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  };
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // — Hero плеер —
  let heroEl, heroSeekEl;
  let heroPlaying = false, heroCurrentTime = 0, heroDuration = 0;
  // userWantsMuted = true изначально (autoplay требует muted)
  // но как только пользователь нажал звук — false
  let heroVolume = 1, heroMuted = true, heroSpeed = 1, heroSpeedMenu = false;

  // Обновляем полоску напрямую — берём duration прямо с элемента
  const heroUpdateSeek = () => {
    if (!heroSeekEl || !heroEl) return;
    const dur = heroEl.duration;
    if (!isFinite(dur) || dur === 0) return;
    if (heroDuration !== dur) heroDuration = dur; // синхронизируем переменную
    const pct = (heroEl.currentTime / dur) * 100;
    heroSeekEl.style.setProperty("--pct", pct.toFixed(2));
    heroSeekEl.value = heroEl.currentTime;
    heroSeekEl.max = dur;
  };

  const heroTogglePlay = () => {
    if (!heroEl) return;
    if (heroEl.paused) { heroEl.play(); heroPlaying = true; }
    else { heroEl.pause(); heroPlaying = false; }
  };

  const heroTimeUpdate = () => {
    heroCurrentTime = heroEl.currentTime;
    heroUpdateSeek();
  };

  const heroLoadedMetadata = () => {
    const d = heroEl.duration;
    if (isFinite(d) && d > 0) { heroDuration = d; heroUpdateSeek(); }
    else { heroEl.currentTime = 1e101; }
  };
  const heroDurationChange = () => {
    const d = heroEl.duration;
    if (isFinite(d) && d > 0) { heroDuration = d; heroUpdateSeek(); }
  };
  const heroSeeked = () => {
    const d = heroEl.duration;
    if (isFinite(d) && d > 0) {
      heroDuration = d;
      if (heroEl.currentTime > d - 0.5) heroEl.currentTime = 0;
    }
    heroUpdateSeek();
    // Восстанавливаем звук — браузер мог сбросить при seek
    heroEl.muted = heroMuted;
    if (!heroMuted) heroEl.volume = heroVolume;
  };

  const heroToggleMute = () => {
    heroMuted = !heroMuted;
    heroEl.muted = heroMuted;
    heroEl.volume = heroMuted ? 0 : heroVolume;
  };
  const heroChangeVolume = (e) => {
    heroVolume = parseFloat(e.target.value);
    heroEl.volume = heroVolume;
    heroMuted = heroVolume === 0;
    heroEl.muted = heroMuted;
  };
  const heroSetSpeed = (s) => { heroSpeed = s; heroEl.playbackRate = s; heroSpeedMenu = false; };
  const heroFullscreen = () => { if (!document.fullscreenElement) heroEl.closest(".video-box").requestFullscreen(); else document.exitFullscreen(); };

  // — BMK плеер —
  let bmkEl, bmkSeekEl;
  let bmkPlaying = false, bmkCurrentTime = 0, bmkDuration = 0;
  let bmkVolume = 1, bmkMuted = false, bmkSpeed = 1, bmkSpeedMenu = false;

  const bmkUpdateSeek = () => {
    if (!bmkSeekEl || !bmkEl) return;
    const dur = bmkEl.duration;
    if (!isFinite(dur) || dur === 0) return;
    if (bmkDuration !== dur) bmkDuration = dur;
    const pct = (bmkEl.currentTime / dur) * 100;
    bmkSeekEl.style.setProperty("--pct", pct.toFixed(2));
    bmkSeekEl.value = bmkEl.currentTime;
    bmkSeekEl.max = dur;
  };

  const bmkTogglePlay = () => {
    if (!bmkEl) return;
    if (bmkEl.paused) {
      bmkEl.muted = false;
      bmkEl.volume = bmkVolume;
      bmkEl.play();
      bmkPlaying = true;
    } else {
      bmkEl.pause();
      bmkPlaying = false;
    }
  };
  const bmkTimeUpdate = () => {
    bmkCurrentTime = bmkEl.currentTime;
    bmkUpdateSeek();
  };
  const bmkLoadedMetadata = () => {
    const d = bmkEl.duration;
    if (isFinite(d) && d > 0) { bmkDuration = d; bmkUpdateSeek(); }
    else { bmkEl.currentTime = 1e101; }
  };
  const bmkDurationChange = () => {
    const d = bmkEl.duration;
    if (isFinite(d) && d > 0) { bmkDuration = d; bmkUpdateSeek(); }
  };
  const bmkSeeked = () => {
    const d = bmkEl.duration;
    if (isFinite(d) && d > 0) {
      bmkDuration = d;
      if (bmkEl.currentTime > d - 0.5) bmkEl.currentTime = 0;
    }
    bmkUpdateSeek();
    bmkEl.muted = bmkMuted;
    if (!bmkMuted) bmkEl.volume = bmkVolume;
  };
  const bmkToggleMute = () => {
    bmkMuted = !bmkMuted;
    bmkEl.muted = bmkMuted;
    bmkEl.volume = bmkMuted ? 0 : bmkVolume;
  };
  const bmkChangeVolume = (e) => {
    bmkVolume = parseFloat(e.target.value);
    bmkEl.volume = bmkVolume;
    bmkMuted = bmkVolume === 0;
    bmkEl.muted = bmkMuted;
  };
  const bmkSetSpeed = (s) => { bmkSpeed = s; bmkEl.playbackRate = s; bmkSpeedMenu = false; };
  const bmkFullscreen = () => { if (!document.fullscreenElement) bmkEl.closest(".bmk-video-box").requestFullscreen(); else document.exitFullscreen(); };

  // bmkUpdateSeek вызывается напрямую из timeUpdate и seeked

  // — JSON-LD через onMount (обход бага svelte-preprocess) —
  import { onMount } from 'svelte';
  onMount(() => {
    // Автозапуск hero видео
    if (heroEl) {
      heroEl.muted = true;
      heroMuted = true;
      const tryPlay = () => {
        heroEl.play().then(() => { heroPlaying = true; }).catch(() => {
          // Если не сработало — ждём canplay
          heroEl.addEventListener('canplay', () => {
            heroEl.play().then(() => { heroPlaying = true; }).catch(() => {});
          }, { once: true });
        });
      };
      if (heroEl.readyState >= 3) { tryPlay(); }
      else { heroEl.addEventListener('canplay', () => { heroEl.play().then(() => { heroPlaying = true; }).catch(() => {}); }, { once: true }); }
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ООО Энергия Плюс",
      url: "https://xn--c1adkmgpem4hrai.xn--p1ai/",
      logo: "https://xn--c1adkmgpem4hrai.xn--p1ai/logo-512.png",
      description: "Инжиниринг полного цикла: проектирование котельных, строительство газопроводов, блочно-модульные котельные.",
      foundingDate: "2002",
      areaServed: "RU",
      serviceType: ["Проектирование котельных", "Строительство газопроводов", "Блочно-модульные котельные"],
    });
    document.head.appendChild(script);
  });

  // — Данные —
  const services = [
    {
      img: "/fotoandvideo/proectotp.jpg",
      alt: "Проектирование котельных и систем газоснабжения",
      title: "Проектирование котельных и систем газоснабжения",
      href: "https://xn--c1adkmgpem4hrai.xn--p1ai/page/proektirovanie",
    },
    {
      img: "/fotoandvideo/creating.jpg",
      alt: "Производство блочно-модульных котельных и ГРПШ",
      title: "Производство блочно-модульных котельных и ГРПШ",
      href: "https://xn--c1adkmgpem4hrai.xn--p1ai/page/izgotovlenie-blochno-modulnyh-kotelnyh",
    },
    {
      img: "/fotoandvideo/create.png",
      alt: "Строительство котельных по индивидуальным проектам",
      title: "Строительство котельных по индивидуальным проектам",
      href: "https://xn--c1adkmgpem4hrai.xn--p1ai/page/proektirovanie-avtonomnyh-kotelnyh",
    },
  ];

  const stats = [
    { number: "22", unit: "", label: "года работы" },
    { number: "45", unit: "", label: "построенных котельных" },
    { number: "750", unit: "км", label: "проектов газопроводов" },
    { number: "225", unit: "", label: "довольных заказчиков" },
  ];

  const advantages = [
    { faIcon: "fa-fire", text: "Получение тех. возможности подачи газа" },
    { svgIcon: "/ickonandlogo/newsrtikon/architecture.svg", text: "Оптимальные технические решения в 2D, 3D" },
    { svgIcon: "/ickonandlogo/newsrtikon/diversity.svg", text: "Комплексные проекты энергообеспечения" },
    { svgIcon: "/ickonandlogo/newsrtikon/person.svg", text: "Своевременная сдача результата работ" },
    { svgIcon: "/ickonandlogo/newsrtikon/leaderboart.svg", text: "Гарантия положительного заключения экспертизы" },
  ];

  const schemeItems = [
    {
      svgSrc: "/ickonandlogo/newsrtikon/document.svg",
      label: "Сбор исходно-разрешительной<br/>документации",
      satStyle: "transform: translate(-50%, -50%) translate(0px, -190px);",
      midStyle: "transform: translate(-50%, -50%) translate(95px, -165px);",
      labelStyle: "transform: translate(-50%, -100%) translate(0px, -235px); text-align: center;",
      link: "/page/funkcii-generalnogo-proektirovshika",
      arrowDeg: 75,

    },
    {
      svgSrc: "/ickonandlogo/newsrtikon/magnifier.svg",
      label: "Проектно-изыскательские<br/>работы, экспертиза,<br/>авторский надзор",
      satStyle: "transform: translate(-50%, -50%) translate(165px, -95px);",
      midStyle: "transform: translate(-50%, -50%) translate(190px, 0px);",
      labelStyle: "transform: translate(0%, -50%) translate(215px, -95px); text-align: left;",
      link: "/page/funkcii-tehnicheskogo-zakazchika",
      arrowDeg: 135,
    },
    {
      svgSrc: "/ickonandlogo/newsrtikon/crane.svg",
      label: "Строительство,<br/>комплектация,<br/>монтаж",
      satStyle: "transform: translate(-50%, -50%) translate(165px, 95px);",
      midStyle: "transform: translate(-50%, -50%) translate(95px, 165px);",
      labelStyle: "transform: translate(0%, -50%) translate(215px, 95px); text-align: left;",
      link: "/page/proektirovanie-avtonomnyh-kotelnyh",
      arrowDeg: 195,
    },
    {
      svgSrc: "/ickonandlogo/newsrtikon/gears.svg",
      label: "Наладка,<br/>режимные<br/>испытания",
      satStyle: "transform: translate(-50%, -50%) translate(0px, 190px);",
      midStyle: "transform: translate(-50%, -50%) translate(-95px, 165px);",
      labelStyle: "transform: translate(-50%, 0%) translate(0px, 235px); text-align: center;",
      link: "/page/pusko-naladochnye-raboty",
      arrowDeg: 255,
    },
    {
      svgSrc: "/ickonandlogo/newsrtikon/tools.svg",
      label: "Сервис, ремонт",
      satStyle: "transform: translate(-50%, -50%) translate(-165px, 95px);",
      midStyle: "transform: translate(-50%, -50%) translate(-190px, 0px);",
      labelStyle: "transform: translate(-100%, -50%) translate(-215px, 95px); text-align: right;",
      arrowDeg: 315,
    },
    {
      svgSrc: "/ickonandlogo/newsrtikon/panel.svg",
      label: "Обследования,<br/>энергоаудит",
      satStyle: "transform: translate(-50%, -50%) translate(-165px, -95px);",
      midStyle: "transform: translate(-50%, -50%) translate(-95px, -165px);",
      labelStyle: "transform: translate(-100%, -50%) translate(-215px, -95px); text-align: right;",
      arrowDeg: 15,
    },
  ];

  const booklets = [
    {
      video: "/fotoandvideo/B4v1.mp4",
      alt: "Блочно-модульные котельные ООО Энергия Плюс",
      heading: "Блочно-модульные котельные «ООО Энергия Плюс»",
      desc: "Автоматизированные контейнерные котельные полной заводской готовности. В комплектации оборудования для работы как на природном газе, так и на дизельном топливе в соответствии с СП «Котельные установки» и СП «Газораспределительные системы» по принципу «Включил и забыл».",
      href: null,
    },
    {
      img: "/fotoandvideo/bucletenerge.png",
      alt: "Индивидуальные котельные ООО Энергия Плюс — буклет",
      heading: "Индивидуальные котельные ООО «Энергия Плюс»",
      desc: "Котельные по проектам нового строительства, реконструкции, капитального ремонта и технического перевооружения по принципу «Под ключ».",
      href: "https://xn--c1adkmgpem4hrai.xn--p1ai/presentation/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82%20%D1%81%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%B5%D1%82%D0%B8%D0%BA%D0%B8.pdf",
    },
    {
      img: "/fotoandvideo/bukletgaz.png",
      alt: "Проекты газоснабжения ООО Энергия Плюс — буклет",
      heading: "Проекты газоснабжения ООО «Энергия Плюс»",
      desc: "Полный спектр работ по проектированию линейных объектов для всех видов строительства (изыскания, проекты планировки территории, проектно-сметная документация, государственная/негосударственная экспертиза, рабочая документация, авторский надзор).",
      href: "https://xn--c1adkmgpem4hrai.xn--p1ai/presentation/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82%20%D1%81%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%BE%D1%81%D0%BD%D0%B0%D0%B1%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.pdf",
    },
  ];
</script>

<svelte:head>
  <!-- SEO -->
  <title>ООО Энергия Плюс — проектирование и строительство котельных, газоснабжение</title>
  <meta name="description" content="Инжиниринг полного цикла: проектирование котельных, строительство газопроводов, блочно-модульные котельные под ключ. 22 года работы, 225 заказчиков." />
  <meta name="keywords" content="котельные, проектирование котельных, строительство котельных, газоснабжение, блочно-модульные котельные, ГРПШ, газопровод" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://xn--c1adkmgpem4hrai.xn--p1ai/" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="ООО Энергия Плюс — проектирование и строительство котельных" />
  <meta property="og:description" content="Инжиниринг полного цикла: проектирование, строительство, сервис котельных и газопроводов. 22 года работы." />
  <meta property="og:url" content="https://xn--c1adkmgpem4hrai.xn--p1ai/" />
  <meta property="og:image" content="https://xn--c1adkmgpem4hrai.xn--p1ai/logo-512.png" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:site_name" content="ООО Энергия Плюс" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Font Awesome синхронно -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <!-- Material Symbols async -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_outward" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_outward" /></noscript>
</svelte:head>

<div id="ep-root">

<!-- ================================================================
     HERO — ограничен по ширине как .site-container--wide
     ================================================================ -->
<section class="hero-section" aria-label="Главный баннер">
  <div class="video-box">
    <div class="hero-head">
      <p class="video-top-bar__title">
        Разработка и реализация современных энергетических и инженерных решений
      </p>
      <a href="https://xn--c1adkmgpem4hrai.xn--p1ai/uslugi" target="_blank" rel="noopener" class="video-top-bar__link">Перечень выполняемых работ</a>
    </div>
          <video
            bind:this={heroEl}
            class="video-poster"
            src="/fotoandvideo/videoheader.mp4"
            loop
            playsinline
            preload="metadata"
            on:timeupdate={heroTimeUpdate}
            on:loadedmetadata={heroLoadedMetadata}
            on:durationchange={heroDurationChange}
            on:seeked={heroSeeked}
            aria-label="Видео о компании Энергия Плюс"
          >
            <track kind="captions" />
          </video>

<!--          <button class="play-btn" on:click={heroTogglePlay} aria-label="Воспроизвести / Пауза">-->
<!--            <i class="fa-solid {heroPlaying ? 'fa-pause' : 'fa-play'}"></i>-->
<!--          </button>-->
<!-- -->
<!--          <div class="video-controls">-->
<!--            <div class="vc-progress-wrap">-->
<!--              <input-->
<!--                bind:this={heroSeekEl}-->
<!--                class="vc-seek"-->
<!--                type="range"-->
<!--                min="0"-->
<!--                max={heroDuration || 100}-->
<!--                step="0.1"-->
<!--                value={heroCurrentTime}-->
<!--                on:input={(e) => {-->
<!--                  heroEl.currentTime = parseFloat(e.target.value);-->
<!--                }}-->
<!--                aria-label="Перемотка"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="vc-row">-->
<!--              <button class="vc-btn" on:click={heroTogglePlay} aria-label="Play/Pause">-->
<!--                <i class="fa-solid {heroPlaying ? 'fa-pause' : 'fa-play'}"></i>-->
<!--              </button>-->
<!--              <span class="vc-time">{fmt(heroCurrentTime)} / {fmt(heroDuration)}</span>-->
<!--              <div class="vc-spacer"></div>-->
<!--              <button class="vc-btn vc-mute-btn" on:click={heroToggleMute} aria-label="Звук" title={heroMuted ? 'Включить звук' : 'Выключить звук'}>-->
<!--                <i class="fa-solid {heroMuted || heroVolume === 0 ? 'fa-volume-xmark' : heroVolume < 0.5 ? 'fa-volume-low' : 'fa-volume-high'}"></i>-->
<!--                {#if heroMuted}<span class="vc-unmute-hint">Включить звук</span>{/if}-->
<!--              </button>-->
<!--              <input class="vc-volume" type="range" min="0" max="1" step="0.05" value={heroVolume} on:input={heroChangeVolume} aria-label="Громкость" />-->
<!--              <div class="vc-speed-wrap">-->
<!--                <button class="vc-btn vc-speed-btn" on:click={() => (heroSpeedMenu = !heroSpeedMenu)} aria-label="Скорость">{heroSpeed}x</button>-->
<!--                {#if heroSpeedMenu}-->
<!--                  <div class="vc-speed-menu">-->
<!--                    {#each speeds as s}-->
<!--                      <button class="vc-speed-option {s === heroSpeed ? 'active' : ''}" on:click={() => heroSetSpeed(s)}>{s}x</button>-->
<!--                    {/each}-->
<!--                  </div>-->
<!--                {/if}-->
<!--              </div>-->
<!--              <button class="vc-btn" on:click={heroFullscreen} aria-label="Полный экран">-->
<!--                <i class="fa-solid fa-expand"></i>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->

          <!-- Scroll down arrow -->
          <a href="#services" class="hero-scroll-btn" aria-label="Скролл вниз">
            <i class="fa-solid fa-chevron-down"></i>
          </a>
  </div>
</section>

<!-- ================================================================
     3 КАРТОЧКИ УСЛУГ
     ================================================================ -->
<section class="top-services-section" id="services" aria-label="Основные услуги">
  <div class="site-container--wide">
    <div class="top-services-grid">
      {#each services as svc}
        <a href={svc.href} target="_blank" rel="noopener" class="top-service-card" aria-label={svc.title}>
          <img loading="lazy" src={svc.img} alt={svc.alt} class="top-service-img" width="400" height="533" />
          <div class="top-service-overlay">
            <span class="top-service-title">{svc.title}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- ================================================================
     ИНЖИНИРИНГ ПОЛНОГО ЦИКЛА — схема + преимущества
     ================================================================ -->
<section class="engineering-section" aria-label="Инжиниринг полного цикла">
  <div class="site-container--wide">
    <div class="engineering-wrapper">
      <div class="scheme-wrap">
        <div class="scheme-system" role="img" aria-label="Схема инжинирингового цикла">
          <svg style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;" viewBox="0 0 580 580" aria-hidden="true">
            <line x1="290" y1="290" x2="290" y2="100" stroke="#f07030" stroke-width="2" />
            <line x1="290" y1="290" x2="455" y2="195" stroke="#f07030" stroke-width="2" />
            <line x1="290" y1="290" x2="455" y2="385" stroke="#f07030" stroke-width="2" />
            <line x1="290" y1="290" x2="290" y2="480" stroke="#f07030" stroke-width="2" />
            <line x1="290" y1="290" x2="125" y2="385" stroke="#f07030" stroke-width="2" />
            <line x1="290" y1="290" x2="125" y2="195" stroke="#f07030" stroke-width="2" />
            <circle cx="290" cy="290" r="190" fill="none" stroke="#f07030" stroke-width="2" />
          </svg>

          <div class="center-circle">
            <img src="/ickonandlogo/newsrtikon/worker.svg" alt="Инженер" class="center-icon" width="270" height="270" />
          </div>

          {#each schemeItems as item, idx}
            <div class="sat-circle" style={item.satStyle}>

                <a href="{item.link}" title="{item.label}">
                  {#if idx === 0}
                    <svg class="sat-icon sat-icon--doc" viewBox="148 148 478 478" xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true">
                      <defs><clipPath id="doc-clip"><path d="m199 148.09h402v503.81h-402z" /></clipPath></defs>
                      <g clip-path="url(#doc-clip)">
                        <path d="m561.64 439.7v-133.18c0-13.816-5.6133-27.332-15.406-37.078l-106.64-106.12c-9.8711-9.8242-22.977-15.23-36.895-15.23h-152.46c-27.828 0-50.469 22.641-50.469 50.469v368.52c0 27.828 22.641 50.469 50.469 50.469h141.99c22.102 21.254 52.086 34.352 85.094 34.352 67.77 0 122.91-55.137 122.91-122.91-0.007813-35.148-14.863-66.871-38.594-89.301zm-311.39 146.48c-10.523 0-19.09-8.5664-19.09-19.09v-368.53c0-10.523 8.5664-19.09 19.09-19.09h152.46c5.5742 0 10.816 2.1641 14.762 6.0938l106.63 106.12c3.9766 3.9609 6.1641 9.2266 6.1641 14.832v111.58c-16.043-7.6836-33.992-11.996-52.93-11.996-4.8477 0-9.6133 0.35547-14.32 0.90625l-182.36-0.003906v23.617h123.32c-16.391 12.258-29.613 28.449-38.258 47.23h-85.059v23.617h76.988c-2.0391 8.8633-3.2188 18.059-3.2188 27.535 0 20.633 5.1328 40.086 14.16 57.176zm227.08 39.574c-53.348 0-96.754-43.398-96.754-96.754 0-53.348 43.398-96.754 96.754-96.754 53.348 0 96.754 43.398 96.754 96.754 0.003906 53.355-43.402 96.754-96.754 96.754z" />
                      </g>
                      <path d="m280.65 336.16h199.83v23.617h-199.83z" />
                      <path d="m457.24 582.46c-1.8203 0-3.5664-0.72266-4.8477-2.0078l-37.258-37.266c-1.2891-1.2812-2.0078-3.0312-2.0078-4.8477 0-1.8203 0.72266-3.5664 2.0078-4.8477l15.777-15.77c2.6758-2.6758 7.0234-2.6758 9.6992 0l16.641 16.641 56.797-56.797c2.6758-2.6758 7.0234-2.6758 9.6992 0l15.777 15.77c1.2812 1.2812 2.0078 3.0312 2.0078 4.8477 0 1.8203-0.72266 3.5664-2.0078 4.8477l-77.422 77.422c-1.2969 1.2812-3.043 2.0078-4.8633 2.0078z" />
                    </svg>
                  {:else}
                    <img src={item.svgSrc} alt="" class="sat-icon" width="50" height="50" aria-hidden="true" />
                  {/if}
                </a>
            </div>
            <div class="mid-circle" style={item.midStyle} aria-hidden="true">
              <span class="material-symbols-outlined" style="transform: rotate({item.arrowDeg}deg);">arrow_outward</span>
            </div>
            <div class="sat-label" style={item.labelStyle}>{@html item.label}</div>
          {/each}
        </div>
      </div>

      <!-- Mobile scheme list — visible only ≤768px -->
      <div class="scheme-mobile-list">
        {#each schemeItems as item, idx}
          {#if item.link}
            <a href={item.link} class="scheme-mobile-item">
              <div class="scheme-mobile-icon">
                <img src={item.svgSrc} alt="" width="26" height="26" />
              </div>
              <span class="scheme-mobile-text">{@html item.label}</span>
            </a>
          {:else}
            <div class="scheme-mobile-item">
              <div class="scheme-mobile-icon">
                <img src={item.svgSrc} alt="" width="26" height="26" />
              </div>
              <span class="scheme-mobile-text">{@html item.label}</span>
            </div>
          {/if}
          {#if idx < schemeItems.length - 1}
            <div class="scheme-mobile-arrow">
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          {/if}
        {/each}
      </div>

      <div class="text-block">
        <h2 class="eng-title">Инжиниринг полного<br />цикла</h2>
        <p class="eng-subtitle">Наши преимущества</p>
        <ul class="eng-list">
          {#each advantages as adv}
            <li>
              {#if adv.faIcon}
                <i class="fa-solid {adv.faIcon}" aria-hidden="true"></i>
              {:else}
                <img src={adv.svgIcon} alt="" class="adv-icon" width="22" height="22" aria-hidden="true" />
              {/if}
              {adv.text}
            </li>
          {/each}
        </ul>
        <button class="btn-order" on:click={() => (showModal = true)}>Заказать котельную</button>
      </div>
    </div>
  </div>
</section>

<!-- ================================================================
     СТАТИСТИКА
     ================================================================ -->
<section class="stats-section" aria-label="Статистика компании">
  <div class="site-container--wide">
    <div class="stats-grid">
      {#each stats as s}
        <div class="stats-card">
          <div class="stats-number">
            {s.number}{#if s.unit}<span class="stats-unit">{s.unit}</span>{/if}
          </div>
          <div class="stats-divider"></div>
          <div class="stats-label">{s.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ================================================================
     ПРОДУКТЫ — буклеты / видео БМК
     ================================================================ -->
<section class="booklets-section" aria-label="Продукты и услуги">
  <div class="site-container--wide">
    {#each booklets as b, i}
      <div class="booklet-block">
        {#if i === 0}
          <div class="booklet-img bmk-video-box">
            <video
              bind:this={bmkEl}
              class="bmk-video"
              src={b.video}
              loop
              playsinline
              preload="metadata"
              on:timeupdate={bmkTimeUpdate}
              on:loadedmetadata={bmkLoadedMetadata}
              on:durationchange={bmkDurationChange}
              on:seeked={bmkSeeked}
              on:play={() => { bmkEl.muted = false; bmkEl.volume = bmkVolume; }}
              aria-label={b.alt}
            >
              <track kind="captions" />
            </video>
            <button class="play-btn" on:click={bmkTogglePlay} aria-label="Play/Pause">
              <i class="fa-solid {bmkPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </button>
            <div class="video-controls">
              <div class="vc-progress-wrap">
                <input
                  bind:this={bmkSeekEl}
                  class="vc-seek"
                  type="range"
                  min="0"
                  max={bmkDuration || 100}
                  step="0.1"
                  value={bmkCurrentTime}
                  on:input={(e) => { bmkEl.currentTime = parseFloat(e.target.value); }}
                />
              </div>
              <div class="vc-row">
                <button class="vc-btn" on:click={bmkTogglePlay}>
                  <i class="fa-solid {bmkPlaying ? 'fa-pause' : 'fa-play'}"></i>
                </button>
                <span class="vc-time">{fmt(bmkCurrentTime)} / {fmt(bmkDuration)}</span>
                <div class="vc-spacer"></div>
                <button class="vc-btn" on:click={bmkToggleMute}>
                  <i class="fa-solid {bmkMuted || bmkVolume === 0 ? 'fa-volume-xmark' : bmkVolume < 0.5 ? 'fa-volume-low' : 'fa-volume-high'}"></i>
                </button>
                <input class="vc-volume" type="range" min="0" max="1" step="0.05" value={bmkVolume} on:input={bmkChangeVolume} />
                <div class="vc-speed-wrap">
                  <button class="vc-btn vc-speed-btn" on:click={() => (bmkSpeedMenu = !bmkSpeedMenu)}>{bmkSpeed}x</button>
                  {#if bmkSpeedMenu}
                    <div class="vc-speed-menu">
                      {#each speeds as s}
                        <button class="vc-speed-option {s === bmkSpeed ? 'active' : ''}" on:click={() => bmkSetSpeed(s)}>{s}x</button>
                      {/each}
                    </div>
                  {/if}
                </div>
                <button class="vc-btn" on:click={bmkFullscreen}>
                  <i class="fa-solid fa-expand"></i>
                </button>
              </div>
            </div>
          </div>
        {:else}
          <div class="booklet-img">
            {#if b.href}
              <a href={b.href} target="_blank" rel="noopener" aria-label="Открыть буклет: {b.heading}">
                <img loading="lazy" src={b.img} alt={b.alt} width="520" height="340" />
              </a>
            {:else}
              <img loading="lazy" src={b.img} alt={b.alt} width="520" height="340" />
            {/if}
          </div>
        {/if}

        <div class="booklet-content">
          {#if b.href}
            <a href={b.href} target="_blank" rel="noopener">
              <h3 class="booklet-heading booklet-heading--link">{b.heading}</h3>
            </a>
          {:else}
            <h3 class="booklet-heading">{b.heading}</h3>
          {/if}
          <p class="booklet-desc">{b.desc}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- ================================================================
     МОДАЛЬНАЯ ФОРМА — заказ котельной
     ================================================================ -->
{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="order-modal-overlay" on:click|self={() => (showModal = false)} role="dialog" aria-modal="true" aria-label="Форма заказа котельной">
    <div class="order-modal">
      <button class="order-modal__close" on:click={() => (showModal = false)} aria-label="Закрыть">&times;</button>
      <h2 class="order-modal__title">Заказать котельную</h2>
      <p class="order-modal__sub">Оставьте заявку — мы свяжемся с вами в ближайшее время</p>
      <form class="order-modal__form" on:submit={handleFormSubmit}>
        <div class="order-modal__field">
          <input type="text" name="username" placeholder="Ваше имя" class="order-modal__input {modalErrors.name ? 'is-danger' : ''}" autocomplete="name" on:input={() => modalErrors.name = null} />
          {#if modalErrors.name}<p class="help is-danger order-modal__error-text">{modalErrors.name}</p>{/if}
        </div>
        <div class="order-modal__field">
          <input type="tel" name="phone" placeholder="Ваш телефон" class="order-modal__input {modalErrors.phone ? 'is-danger' : ''}" autocomplete="tel" use:imask={maskOptions} on:input={() => modalErrors.phone = null} />
          {#if modalErrors.phone}<p class="help is-danger order-modal__error-text">{modalErrors.phone}</p>{/if}
        </div>
        <div class="order-modal__field">
          <textarea name="message" placeholder="Расскажите о вашем проекте" class="order-modal__input order-modal__textarea"></textarea>
        </div>
        <button type="submit" class="order-modal__submit">Отправить заявку</button>
      </form>
    </div>
  </div>
{/if}

</div><!-- /ep-root -->

<!-- ================================================================
     СТИЛИ
     ================================================================ -->
<style>
  /* ================================================================
     ИЗОЛЯЦИЯ — все стили строго внутри #ep-root
     ================================================================ */
  #ep-root *, #ep-root *::before, #ep-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #ep-root {
    font-family: "Montserrat", sans-serif;
    background: #fff;
    overflow-x: hidden;
    --orange: #f07030;
    --dark-orange: #d35d2d;
    --tr: 0.3s;
    --br: 10px;
  }
  #ep-root img { max-width: 100%; height: auto; display: block; }
  #ep-root a { text-decoration: none; color: inherit; }

  /* — Containers — */
  #ep-root .site-container {
    max-width: 1360px; width: 100%; margin: 0 auto;
    padding-left: clamp(20px, 5vw, 40px);
    padding-right: clamp(20px, 5vw, 40px);
  }
  #ep-root .site-container--wide {
    max-width: 1500px; width: 100%; margin: 0 auto;
    padding-left: clamp(20px, 5vw, 40px);
    padding-right: clamp(20px, 5vw, 40px);
  }

  /* ================================================================
     HERO — полная ширина, фиксированная высота как на скриншоте
     ================================================================ */
  #ep-root .hero-section {
    width: 100%;
    background: #111;
    display: flex;
    flex-direction: column;
  }
  #ep-root .hero-section .video-box {
    width: 100%;
    position: relative;
    background: #111;
    height: clamp(600px, 95vh, 1160px);
    aspect-ratio: unset;
    overflow: hidden;
    border-radius: 0;
  }
  #ep-root .video-box {
    width: 100%; position: relative; background: #111;
    aspect-ratio: 16 / 9; overflow: hidden;
  }
  #ep-root .video-poster, #ep-root .bmk-video {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }
  #ep-root .hero-head {
    position: absolute;
    top: 0; left: 0; right: 0;
    z-index: 2;
    background: rgba(0,0,0,0.78);
    padding: 22px 40px 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  #ep-root .video-top-bar__title {
    font-size: clamp(18px, 2.15vw, 31px); font-weight: 800;
    color: #fff; text-align: center; line-height: 1.3;
    text-shadow: 0 2px 12px rgba(0,0,0,0.55);
    letter-spacing: 0.3px;
  }
  #ep-root .video-top-bar__link {
    font-size: clamp(12px, 1.08vw, 16px); font-weight: 700; color: #111;
    background: #fff; border: 2px solid #fff;
    padding: 11px 36px; border-radius: 8px;
    transition: background var(--tr), transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }
  #ep-root .video-top-bar__link:hover {
    background: rgba(255,255,255,0.88);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.35);
  }

  #ep-root .vc-mute-btn { display: flex; align-items: center; gap: 5px; }
  #ep-root .vc-unmute-hint {
    font-size: 11px; font-weight: 600; color: #fff;
    background: rgba(240,112,48,0.85); border-radius: 4px;
    padding: 2px 7px; white-space: nowrap; letter-spacing: 0.2px;
    animation: ep-pulse 1.5s ease-in-out infinite;
  }
  @keyframes ep-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }

  /* — Play кнопка — */
  #ep-root .play-btn {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3; width: 72px; height: 72px; border-radius: 50%;
    background: rgba(255,255,255,0.2); border: 3px solid rgba(255,255,255,0.8);
    backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; opacity: 0;
    transition: background 0.3s, transform 0.3s, opacity 0.3s;
  }
  #ep-root .video-box:hover .play-btn,
  #ep-root .bmk-video-box:hover .play-btn { opacity: 1; }
  #ep-root .play-btn:hover {
    background: rgba(240,112,48,0.75); border-color: #f07030;
    transform: translate(-50%, -50%) scale(1.1);
  }
  #ep-root .play-btn i { font-size: 24px; color: #fff; line-height: 1; }
  #ep-root .play-btn i.fa-play { margin-left: 3px; }

  /* — Панель управления видео — */
  #ep-root .video-controls {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 4;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    padding: 24px 16px 12px;
    display: flex; flex-direction: column; gap: 6px;
    opacity: 0; transition: opacity 0.3s;
  }
  #ep-root .video-box:hover .video-controls,
  #ep-root .bmk-video-box:hover .video-controls { opacity: 1; }
  #ep-root .vc-progress-wrap { width: 100%; padding: 4px 0; }
  #ep-root .vc-seek {
    width: 100%; height: 4px;
    -webkit-appearance: none; appearance: none;
    background: linear-gradient(to right, #f07030 0%, #f07030 calc(var(--pct,0)*1%), rgba(255,255,255,0.3) calc(var(--pct,0)*1%), rgba(255,255,255,0.3) 100%);
    border-radius: 99px; cursor: pointer; outline: none; transition: height 0.15s;
  }
  #ep-root .vc-seek:hover { height: 6px; }
  #ep-root .vc-seek::-webkit-slider-thumb {
    -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%;
    background: #fff; box-shadow: 0 0 4px rgba(0,0,0,0.4); cursor: pointer; transition: transform 0.15s;
  }
  #ep-root .vc-seek::-webkit-slider-thumb:hover { transform: scale(1.3); }
  #ep-root .vc-seek::-moz-range-thumb {
    width: 14px; height: 14px; border-radius: 50%;
    background: #fff; border: none; box-shadow: 0 0 4px rgba(0,0,0,0.4); cursor: pointer;
  }
  #ep-root .vc-row { display: flex; align-items: center; gap: 8px; }
  #ep-root .vc-btn {
    background: none; border: none; color: #fff; font-size: 15px;
    cursor: pointer; padding: 4px 6px; border-radius: 4px; transition: color 0.2s;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  #ep-root .vc-btn:hover { color: #f07030; }
  #ep-root .vc-time {
    font-size: 12px; font-weight: 500; color: #fff; white-space: nowrap;
    font-family: "Montserrat", sans-serif; letter-spacing: 0.3px;
  }
  #ep-root .vc-spacer { flex: 1; }
  #ep-root .vc-volume { width: 72px; height: 4px; accent-color: #f07030; cursor: pointer; }
  #ep-root .vc-speed-wrap { position: relative; }
  #ep-root .vc-speed-btn { font-size: 12px; font-weight: 600; font-family: "Montserrat", sans-serif; min-width: 36px; }
  #ep-root .vc-speed-menu {
    position: absolute; bottom: calc(100% + 6px); right: 0;
    background: rgba(20,20,20,0.95); border-radius: 8px; overflow: hidden;
    display: flex; flex-direction: column; min-width: 64px; box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  }
  #ep-root .vc-speed-option {
    background: none; border: none; color: #fff; font-size: 13px;
    font-family: "Montserrat", sans-serif; font-weight: 500;
    padding: 7px 14px; cursor: pointer; text-align: center;
    transition: background 0.15s, color 0.15s;
  }
  #ep-root .vc-speed-option:hover { background: rgba(255,255,255,0.1); }
  #ep-root .vc-speed-option.active { color: #f07030; font-weight: 700; }

  /* ================================================================
     КАРТОЧКИ УСЛУГ
     ================================================================ */
  #ep-root .top-services-section {
    padding-top: clamp(20px, 3vw, 40px);
    padding-bottom: clamp(30px, 4vw, 60px);
  }
  #ep-root .top-services-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
  }
  #ep-root .top-service-card {
    position: relative; overflow: hidden; cursor: pointer;
    aspect-ratio: 3 / 4; border-radius: var(--br); display: block;
  }
  #ep-root .top-service-img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.4s ease; will-change: transform;
  }
  #ep-root .top-service-card:hover .top-service-img { transform: scale(1.06); }
  #ep-root .top-service-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.28);
    display: flex; align-items: center; justify-content: center;
    padding: 20px; transition: background 0.4s ease;
  }
  #ep-root .top-service-card:hover .top-service-overlay { background: rgba(0,0,0,0.50); }
  #ep-root .top-service-title {
    font-size: clamp(13px, 1.1vw, 16px); font-weight: 600;
    color: #fff; line-height: 1.3; text-align: center;
  }

  /* — Инжиниринг — */
  #ep-root .engineering-section { padding-bottom: clamp(40px, 6vw, 90px); }
  #ep-root .engineering-wrapper {
    display: flex; align-items: center; gap: 40px;
    background: #fff; border: 1px solid #e8e8e8;
    border-radius: var(--br); padding: 40px 50px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }
  #ep-root .scheme-wrap { flex-shrink: 0; padding-left: 40px; }
  #ep-root .scheme-system { position: relative; width: 580px; height: 580px; }
  #ep-root .center-circle {
    width: 190px; height: 190px; border-radius: 50%;
    background: #fff; border: 14px solid #f07030;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 0 4px rgba(240,112,48,0.15);
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2; overflow: hidden; transition: box-shadow 0.3s;
  }
  #ep-root .center-circle:hover { box-shadow: 0 0 0 10px rgba(240,112,48,0.2); }
  #ep-root .center-icon {
    width: 270px; height: 270px; object-fit: contain;
    filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(600%) hue-rotate(345deg) brightness(100%);
  }
  #ep-root .sat-circle {
    width: 95px; height: 95px; border-radius: 50%; background: #f07030;
    display: flex; align-items: center; justify-content: center;
    position: absolute; top: 50%; left: 50%; z-index: 2; cursor: pointer;
    transition: filter 0.3s, box-shadow 0.3s;
  }
  #ep-root .sat-circle:hover { filter: brightness(0.85); box-shadow: 0 8px 20px rgba(211,93,45,0.45); }
  #ep-root .sat-icon { width: 50px; height: 50px; object-fit: contain; flex-shrink: 0; filter: brightness(0) invert(1); }
  #ep-root .sat-icon--doc { width: 42px; height: 42px; }
  #ep-root .mid-circle {
    width: 36px; height: 36px; border-radius: 50%; background: #f07030;
    position: absolute; top: 50%; left: 50%; z-index: 2; cursor: pointer;
    transition: filter 0.3s; display: flex; align-items: center; justify-content: center;
  }
  #ep-root .mid-circle:hover { filter: brightness(0.85); }
  #ep-root .mid-circle .material-symbols-outlined {
    font-size: 18px; color: #fff;
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
    display: block; line-height: 1;
  }
  #ep-root .sat-label {
    position: absolute; top: 50%; left: 50%;
    font-size: 13px; font-weight: 500; color: #333; line-height: 1.4;
    z-index: 3; width: 140px;
  }
  #ep-root .text-block { flex-shrink: 0; width: 420px; margin-left: 80px; }
  #ep-root .eng-title {
    font-weight: 800; font-size: 28px; line-height: 1.1; color: #111;
    text-transform: uppercase; margin-bottom: 16px;
  }
  #ep-root .eng-subtitle { font-size: clamp(15px, 1.3vw, 18px); font-weight: 500; color: #555; margin-bottom: 24px; }
  #ep-root .eng-list { list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }
  #ep-root .eng-list li {
    display: flex; align-items: center; gap: 12px;
    font-size: clamp(13px, 1.1vw, 15px); font-weight: 500; color: #222;
  }
  #ep-root .eng-list li i { color: #f07030; font-size: 18px; flex-shrink: 0; width: 22px; text-align: center; }
  #ep-root .adv-icon {
    width: 22px; height: 22px; flex-shrink: 0; object-fit: contain;
    filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(600%) hue-rotate(345deg) brightness(100%);
  }
  #ep-root .btn-order {
    display: block; width: 100%; padding: 16px 20px;
    background: #f07030; color: #fff; font-family: "Montserrat", sans-serif;
    font-size: 16px; font-weight: 600; text-align: center;
    border-radius: var(--br); border: none; cursor: pointer;
    transition: background 0.3s, transform 0.3s;
  }
  #ep-root .btn-order:hover { background: #d35d2d; transform: translateY(-2px); }

  /* ================================================================
     СТАТИСТИКА
     ================================================================ */
  #ep-root .stats-section {
    padding: clamp(40px, 5vw, 70px) 0;
    background: #f4f4f4; margin-bottom: clamp(40px, 6vw, 90px);
  }
  #ep-root .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  #ep-root .stats-card {
    background: #fff; border-radius: var(--br); padding: 36px 24px 32px;
    display: flex; flex-direction: column; align-items: center; text-align: center;
    border-top: 4px solid transparent; box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; cursor: default;
  }
  #ep-root .stats-card:hover {
    transform: translateY(-6px); border-top-color: #f07030;
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }
  #ep-root .stats-number { font-weight: 800; font-size: clamp(48px, 5vw, 72px); line-height: 1; color: #111; letter-spacing: -2px; }
  #ep-root .stats-unit { font-size: clamp(28px, 3vw, 40px); font-weight: 800; color: #f07030; letter-spacing: -1px; }
  #ep-root .stats-divider { width: 40px; height: 3px; background: #f07030; border-radius: 99px; margin: 12px 0; }
  #ep-root .stats-label { font-size: clamp(13px, 1vw, 15px); font-weight: 500; color: #888; line-height: 1.4; }

  /* — Буклеты — */
  #ep-root .booklets-section { padding-bottom: clamp(40px, 6vw, 90px); }
  #ep-root .booklet-block {
    display: flex; align-items: flex-start; gap: 50px;
    padding: clamp(30px, 4vw, 50px) 0; border-bottom: 1px solid #ebebeb;
  }
  #ep-root .booklet-block:last-child { border-bottom: none; }
  #ep-root .booklet-img {
    flex-shrink: 0; width: 520px; height: 340px;
    border-radius: var(--br); overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  #ep-root .booklet-img:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(211,93,45,0.2); }
  #ep-root .booklet-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
  #ep-root .bmk-video-box { position: relative; overflow: hidden; background: #111; }
  #ep-root .booklet-content { flex: 1; }
  #ep-root .booklet-heading { font-weight: 700; font-size: clamp(20px, 2vw, 28px); color: #111; margin-bottom: 20px; }
  #ep-root .booklet-heading--link:hover { color: #f07030; text-decoration: underline; }
  #ep-root .booklet-desc { font-size: clamp(15px, 1.3vw, 18px); font-weight: 400; color: #444; line-height: 1.8; text-align: justify; }

  /* — Модальная форма — */
  #ep-root .order-modal-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    animation: ep-fadeIn 0.25s ease;
  }
  @keyframes ep-fadeIn { from { opacity: 0; } to { opacity: 1; } }
  #ep-root .order-modal {
    background: #fff; border-radius: var(--br); padding: 40px 36px 36px;
    width: 100%; max-width: 520px; position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,0.2); animation: ep-slideUp 0.25s ease;
  }
  @keyframes ep-slideUp { from { transform: translateY(24px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  #ep-root .order-modal__close {
    position: absolute; top: 14px; right: 18px;
    background: none; border: none; font-size: 28px; line-height: 1;
    color: #aaa; cursor: pointer; transition: color 0.2s; padding: 0;
  }
  #ep-root .order-modal__close:hover { color: #d35d2d; }
  #ep-root .order-modal__title { font-size: 22px; font-weight: 700; color: #111; margin-bottom: 6px; }
  #ep-root .order-modal__sub { font-size: 14px; color: #888; margin-bottom: 24px; line-height: 1.5; }
  #ep-root .order-modal__form { display: flex; flex-direction: column; gap: 14px; }
  #ep-root .order-modal__input {
    width: 100%; border: 1.5px solid #ddd; border-radius: var(--br);
    padding: 13px 16px; font-family: "Montserrat", sans-serif;
    font-size: 15px; color: #111; outline: none; transition: border-color 0.2s;
  }
  #ep-root .order-modal__input:focus { border-color: #f07030; }
  #ep-root .order-modal__input.is-danger { border-color: #f14668; }
  #ep-root .order-modal__input::placeholder { color: #bbb; }
  #ep-root .order-modal__error-text { color: #f14668; font-size: 12px; margin-top: 5px; }
  #ep-root .order-modal__textarea { resize: vertical; min-height: 100px; }
  #ep-root .order-modal__submit {
    width: 100%; padding: 15px; background: #f07030; color: #fff;
    font-family: "Montserrat", sans-serif; font-size: 16px; font-weight: 600;
    border: none; border-radius: var(--br); cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }
  #ep-root .order-modal__submit:hover { background: #d35d2d; transform: translateY(-2px); }

  /* ================================================================
     MOBILE SCHEME LIST (hidden on desktop, shown on ≤768px)
     ================================================================ */
  #ep-root .scheme-mobile-list {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
  }
  #ep-root .scheme-mobile-item {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 14px 20px;
    background: #fff;
    border: 1.5px solid #f07030;
    border-radius: 12px;
    transition: background 0.2s, box-shadow 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  #ep-root .scheme-mobile-item:hover,
  #ep-root .scheme-mobile-item:active {
    background: rgba(240, 112, 48, 0.06);
    box-shadow: 0 4px 16px rgba(240, 112, 48, 0.15);
  }
  #ep-root .scheme-mobile-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #f07030;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  #ep-root .scheme-mobile-icon img {
    width: 26px;
    height: 26px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
  #ep-root .scheme-mobile-text {
    font-size: 14px;
    font-weight: 500;
    color: #222;
    line-height: 1.4;
  }
  #ep-root .scheme-mobile-arrow {
    display: flex;
    justify-content: center;
    padding: 6px 0;
    color: #f07030;
    font-size: 16px;
  }

  /* ================================================================
     RESPONSIVE — Tablet ≤768px
     ================================================================ */
  @media (max-width: 768px) {
    /* Services → 1 column */
    #ep-root .top-services-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    #ep-root .top-service-card {
      aspect-ratio: 16 / 9;
    }
    #ep-root .top-service-title {
      font-size: 15px;
    }

    /* Engineering: vertical, hide circle, show mobile list */
    #ep-root .engineering-wrapper {
      flex-direction: column;
      padding: 30px 24px;
      gap: 24px;
    }
    #ep-root .scheme-wrap {
      display: none;
    }
    #ep-root .scheme-mobile-list {
      display: flex;
    }
    #ep-root .text-block {
      width: 100%;
      margin-left: 0;
    }

    /* Statistics → 2×2 grid */
    #ep-root .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    /* Booklets → vertical stack */
    #ep-root .booklet-block {
      flex-direction: column;
      gap: 24px;
    }
    #ep-root .booklet-img {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }

  /* ================================================================
     RESPONSIVE — Mobile ≤480px
     ================================================================ */
  @media (max-width: 480px) {
    /* Containers */
    #ep-root .site-container,
    #ep-root .site-container--wide {
      padding-left: 16px;
      padding-right: 16px;
    }

    /* Hero */
    #ep-root .hero-section .video-box {
      height: 56vh;
      min-height: 280px;
    }
    #ep-root .hero-head {
      padding: 16px 16px 18px;
      gap: 10px;
    }
    #ep-root .video-top-bar__title {
      font-size: 16px;
      line-height: 1.35;
    }
    #ep-root .video-top-bar__link {
      font-size: 13px;
      padding: 12px 24px;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }

    /* Services */
    #ep-root .top-services-section {
      padding-top: 16px;
      padding-bottom: 24px;
    }

    /* Engineering */
    #ep-root .engineering-wrapper {
      padding: 24px 20px;
    }
    #ep-root .eng-title {
      font-size: 22px;
    }
    #ep-root .eng-list li {
      font-size: 14px;
      gap: 10px;
    }
    #ep-root .btn-order {
      padding: 18px 20px;
      font-size: 15px;
    }
    #ep-root .scheme-mobile-item {
      padding: 12px 16px;
      gap: 12px;
    }
    #ep-root .scheme-mobile-icon {
      width: 42px;
      height: 42px;
    }
    #ep-root .scheme-mobile-text {
      font-size: 13px;
    }

    /* Statistics */
    #ep-root .stats-grid {
      gap: 10px;
    }
    #ep-root .stats-card {
      padding: 24px 16px 20px;
    }
    #ep-root .stats-number {
      font-size: 36px;
      letter-spacing: -1px;
    }
    #ep-root .stats-unit {
      font-size: 20px;
    }
    #ep-root .stats-label {
      font-size: 12px;
    }

    /* Booklets */
    #ep-root .booklet-block {
      gap: 16px;
      padding: 20px 0;
    }
    #ep-root .booklet-heading {
      font-size: 18px;
      margin-bottom: 12px;
    }
    #ep-root .booklet-desc {
      font-size: 14px;
      line-height: 1.65;
      text-align: left;
    }

    /* Video controls — simplified */
    #ep-root .vc-volume,
    #ep-root .vc-speed-wrap {
      display: none;
    }
    #ep-root .play-btn {
      width: 56px;
      height: 56px;
      opacity: 1;
    }
    #ep-root .play-btn i {
      font-size: 20px;
    }
    #ep-root .video-controls {
      opacity: 1;
    }

    /* Modal form → bottom sheet */
    #ep-root .order-modal-overlay {
      align-items: flex-end;
    }
    #ep-root .order-modal {
      max-width: 100%;
      border-radius: 16px 16px 0 0;
      padding: 24px 20px 20px;
      margin: 0;
      animation: ep-slideUpMobile 0.3s ease;
    }
    #ep-root .order-modal__input {
      font-size: 16px;
      padding: 14px 14px;
    }
    #ep-root .order-modal__submit {
      min-height: 48px;
      font-size: 15px;
    }
    #ep-root .order-modal__title {
      font-size: 20px;
    }
  }

  @keyframes ep-slideUpMobile {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  /* Animated scroll down arrow in hero section */
  #ep-root .hero-scroll-btn {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 28px;
    z-index: 10;
    opacity: 0.8;
    animation: ep-bounce 2s infinite ease-in-out;
    transition: opacity 0.3s ease, color 0.3s ease;
  }
  #ep-root .hero-scroll-btn:hover {
    opacity: 1;
    color: #f60;
  }
  @media (max-width: 768px) {
    #ep-root .hero-scroll-btn {
      bottom: 20px;
      font-size: 24px;
    }
  }
  @keyframes ep-bounce {
    0%, 100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
  }
</style>