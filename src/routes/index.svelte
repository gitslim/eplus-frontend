<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_outward" />
</svelte:head>

<!-- ================================================================
     SCRIPT
     ================================================================ -->
<script>
  import { onMount } from 'svelte';

  let showModal = false;

  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      fields: {
        TITLE: `Заявка с сайта от ${formData.get('username')}`,
        NAME: formData.get('username'),
        PHONE: [{ VALUE: formData.get('phone'), VALUE_TYPE: 'WORK' }],
        COMMENTS: formData.get('message') || 'Без комментариев'
      }
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_BITRIX_HOOK_URL}crm.lead.add.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        form.reset();
        showModal = false;
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или позвоните нам.');
    }
  }

  // — Видео Hero —
  let videoEl;
  let playing = false;
  let currentTime = 0;
  let duration = 0;
  let volume = 1;
  let isMuted = true;
  let speed = 1;
  let showSpeedMenu = false;
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // — Видео БМК —
  let bmkVideoEl;
  let bmkPlaying = false;
  let bmkCurrentTime = 0;
  let bmkDuration = 0;
  let bmkVolume = 1;
  let bmkIsMuted = true;
  let bmkSpeed = 1;
  let bmkShowSpeedMenu = false;

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  function togglePlay() {
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.muted = false;
      videoEl.volume = volume;
      videoEl.play();
      playing = true;
    } else {
      videoEl.pause();
      playing = false;
    }
  }

  function onTimeUpdate() { currentTime = videoEl.currentTime; }

  function onLoadedMetadata() {
    duration = videoEl.duration;
    if (!isFinite(duration)) videoEl.currentTime = 1e101;
  }

  function onDurationChange() {
    if (isFinite(videoEl.duration)) duration = videoEl.duration;
  }

  function onSeeked() {
    if (!isFinite(duration) || duration === 0) {
      duration = videoEl.currentTime;
      videoEl.currentTime = 0;
    }
  }

  function toggleMute() {
    isMuted = !isMuted;
    videoEl.muted = isMuted;
  }

  function changeVolume(e) {
    volume = parseFloat(e.target.value);
    videoEl.volume = volume;
    isMuted = volume === 0;
    videoEl.muted = isMuted;
  }

  function setSpeed(s) {
    speed = s;
    videoEl.playbackRate = s;
    showSpeedMenu = false;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) videoEl.closest('.video-box').requestFullscreen();
    else document.exitFullscreen();
  }

  let seekEl;
  $: progress = duration ? (currentTime / duration) * 100 : 0;
  $: if (seekEl) seekEl.style.setProperty('--pct', progress.toFixed(2));

  function bmkTogglePlay() {
    if (!bmkVideoEl) return;
    if (bmkVideoEl.paused) {
      bmkVideoEl.muted = false;
      bmkVideoEl.volume = bmkVolume;
      bmkVideoEl.play();
      bmkPlaying = true;
    } else {
      bmkVideoEl.pause();
      bmkPlaying = false;
    }
  }
  function bmkOnTimeUpdate()     { bmkCurrentTime = bmkVideoEl.currentTime; }
  function bmkOnLoadedMetadata() {
    bmkDuration = bmkVideoEl.duration;
    if (!isFinite(bmkDuration)) bmkVideoEl.currentTime = 1e101;
  }
  function bmkOnDurationChange() { if (isFinite(bmkVideoEl.duration)) bmkDuration = bmkVideoEl.duration; }
  function bmkOnSeeked()         {
    if (!isFinite(bmkDuration) || bmkDuration === 0) {
      bmkDuration = bmkVideoEl.currentTime;
      bmkVideoEl.currentTime = 0;
    }
  }
  function bmkToggleMute()       { bmkIsMuted = !bmkIsMuted; bmkVideoEl.muted = bmkIsMuted; }
  function bmkChangeVolume(e)    {
    bmkVolume = parseFloat(e.target.value);
    bmkVideoEl.volume = bmkVolume;
    bmkIsMuted = bmkVolume === 0;
    bmkVideoEl.muted = bmkIsMuted;
  }
  function bmkSetSpeed(s)        { bmkSpeed = s; bmkVideoEl.playbackRate = s; bmkShowSpeedMenu = false; }
  function bmkToggleFullscreen() {
    if (!document.fullscreenElement) bmkVideoEl.closest('.bmk-video-box').requestFullscreen();
    else document.exitFullscreen();
  }

  let bmkSeekEl;
  $: bmkProgress = bmkDuration ? (bmkCurrentTime / bmkDuration) * 100 : 0;
  $: if (bmkSeekEl) bmkSeekEl.style.setProperty('--pct', bmkProgress.toFixed(2));

  // — Данные —
  const services = [
    { img: '/fotoandvideo/proectotp.jpg',  alt: 'Проектирование котельных',               title: 'Проектирование котельных и систем газоснабжения',    href: 'https://xn--c1adkmgpem4hrai.xn--p1ai/page/proektirovanie' },
    { img: '/fotoandvideo/creating.jpg',   alt: 'Производство блочно-модульных котельных', title: 'Производство блочно-модульных котельных и ГРПШ',      href: 'https://xn--c1adkmgpem4hrai.xn--p1ai/page/izgotovlenie-blochno-modulnyh-kotelnyh' },
    { img: '/fotoandvideo/create.png',     alt: 'Строительство котельных',                 title: 'Строительство котельных по индивидуальным проектам', href: 'https://xn--c1adkmgpem4hrai.xn--p1ai/page/proektirovanie-avtonomnyh-kotelnyh' },
  ];

  const stats = [
    { number: '22',  unit: '',   label: 'года работы' },
    { number: '45',  unit: '',   label: 'построенных котельных' },
    { number: '750', unit: 'км', label: 'проектов газопроводов' },
    { number: '225', unit: '',   label: 'довольных заказчиков' },
  ];

  const advantages = [
    { faIcon: 'fa-fire',                                                   text: 'Получение тех. возможности подачи газа' },
    { svgIcon: '/ickonandlogo/newsrtikon/architecture.svg',                 text: 'Оптимальные технические решения в 2D, 3D' },
    { svgIcon: '/ickonandlogo/newsrtikon/diversity.svg',                    text: 'Комплексные проекты энергообеспечения' },
    { svgIcon: '/ickonandlogo/newsrtikon/person.svg',                       text: 'Своевременная сдача результата работ' },
    { svgIcon: '/ickonandlogo/newsrtikon/leaderboart.svg',                  text: 'Гарантия положительного заключения экспертизы' },
  ];

  const schemeItems = [
    { svgSrc: '/ickonandlogo/newsrtikon/document.svg', label: 'Сбор исходно-разрешительной<br/>документации',                        satClass: 'sat-1', midClass: 'mid-1', labelClass: 'label-1', arrowDeg: 75  },
    { svgSrc: '/ickonandlogo/newsrtikon/magnifier.svg', label: 'Проектно-изыскательские<br/>работы, экспертиза,<br/>авторский надзор', satClass: 'sat-2', midClass: 'mid-2', labelClass: 'label-2', arrowDeg: 135 },
    { svgSrc: '/ickonandlogo/newsrtikon/crane.svg',    label: 'Строительство,<br/>комплектация,<br/>монтаж',                          satClass: 'sat-3', midClass: 'mid-3', labelClass: 'label-3', arrowDeg: 195 },
    { svgSrc: '/ickonandlogo/newsrtikon/gears.svg',    label: 'Наладка,<br/>режимные<br/>испытания',                                  satClass: 'sat-4', midClass: 'mid-4', labelClass: 'label-4', arrowDeg: 255 },
    { svgSrc: '/ickonandlogo/newsrtikon/tools.svg',    label: 'Сервис, ремонт',                                                       satClass: 'sat-5', midClass: 'mid-5', labelClass: 'label-5', arrowDeg: 315 },
    { svgSrc: '/ickonandlogo/newsrtikon/panel.svg',    label: 'Обследования,<br/>энергоаудит',                                        satClass: 'sat-6', midClass: 'mid-6', labelClass: 'label-6', arrowDeg: 15  },
  ];

  const booklets = [
    {
      video: '/fotoandvideo/b4v1.mp4',
      alt: 'Блочно-модульные котельные',
      heading: 'Блочно-модульные котельные «ООО Энергия Плюс»',
      desc: 'Автоматизированные контейнерные котельные, полной заводской готовности. В комплектации оборудования для работы, как на природном газе, так и на дизельном топливе в соответствии с СП «Котельные установки» и СП «Газораспределительные системы» по принципу «Включил и забыл».',
      href: null,
    },
    {
      img: '/fotoandvideo/bucletenerge.png',
      alt: 'Индивидуальные котельные',
      heading: 'Индивидуальные котельные ООО «Энергия Плюс»',
      desc: 'Котельные по проектам нового строительства, реконструкции, капитального ремонта и технического перевооружения по принципу «Под ключ».',
      href: 'https://xn--c1adkmgpem4hrai.xn--p1ai/presentation/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82%20%D1%81%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%B5%D1%82%D0%B8%D0%BA%D0%B8.pdf',
    },
    {
      img: '/fotoandvideo/bukletgaz.png',
      alt: 'Проекты газоснабжения',
      heading: 'Проекты газоснабжения ООО «Энергия Плюс»',
      desc: 'Полный спектр работ по проектированию линейных объектов для всех видов строительства (изыскания, проекты планировки территории, проектно-сметная документация, государственная/негосударственная экспертиза, рабочая документация, авторский надзор).',
      href: 'https://xn--c1adkmgpem4hrai.xn--p1ai/presentation/%D0%91%D1%83%D0%BA%D0%BB%D0%B5%D1%82%20%D1%81%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%BE%D1%81%D0%BD%D0%B0%D0%B1%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.pdf',
    },
  ];
</script>

<!-- ================================================================
     HERO — видео с панелью управления
     ================================================================ -->
<section class="hero-section">
  <div class="site-container">
    <div class="video-hero-inner">
      <div class="video-box">
        <video
          bind:this={videoEl}
          class="video-poster"
          src="/fotoandvideo/videoheader.MOV"
          loop
          playsinline
          preload="metadata"
          on:timeupdate={onTimeUpdate}
          on:loadedmetadata={onLoadedMetadata}
          on:durationchange={onDurationChange}
          on:seeked={onSeeked}
          on:play={() => { videoEl.muted = false; videoEl.volume = volume; }}
        >
          <track kind="captions" />
        </video>

        <div class="video-top-bar">
          <p class="video-top-bar__title">Разработка и реализация современных энергетических и инженерных решений</p>
          <a href="https://xn--c1adkmgpem4hrai.xn--p1ai/uslugi" target="_blank" rel="noopener" class="video-top-bar__link">Перечень выполняемых работ</a>
        </div>

        <button class="play-btn" on:click={togglePlay} aria-label="Воспроизвести / Пауза">
          {#if playing}
            <i class="fa-solid fa-pause"></i>
          {:else}
            <i class="fa-solid fa-play"></i>
          {/if}
        </button>

        <div class="video-controls">
          <div class="vc-progress-wrap">
            <input
              bind:this={seekEl}
              class="vc-seek"
              type="range"
              min="0"
              max={duration || 100}
              step="0.1"
              value={currentTime}
              on:input={(e) => { videoEl.currentTime = parseFloat(e.target.value); }}
              aria-label="Перемотка"
            />
          </div>
          <div class="vc-row">
            <button class="vc-btn" on:click={togglePlay} aria-label="Play/Pause">
              <i class="fa-solid {playing ? 'fa-pause' : 'fa-play'}"></i>
            </button>
            <span class="vc-time">{fmt(currentTime)} / {fmt(duration)}</span>
            <div class="vc-spacer"></div>
            <button class="vc-btn" on:click={toggleMute} aria-label="Mute">
              <i class="fa-solid {isMuted || volume === 0 ? 'fa-volume-xmark' : volume < 0.5 ? 'fa-volume-low' : 'fa-volume-high'}"></i>
            </button>
            <input class="vc-volume" type="range" min="0" max="1" step="0.05" value={volume} on:input={changeVolume} aria-label="Громкость" />
            <div class="vc-speed-wrap">
              <button class="vc-btn vc-speed-btn" on:click={() => showSpeedMenu = !showSpeedMenu} aria-label="Скорость">
                {speed}x
              </button>
              {#if showSpeedMenu}
                <div class="vc-speed-menu">
                  {#each speeds as s}
                    <button class="vc-speed-option {s === speed ? 'active' : ''}" on:click={() => setSpeed(s)}>{s}x</button>
                  {/each}
                </div>
              {/if}
            </div>
            <button class="vc-btn" on:click={toggleFullscreen} aria-label="Полный экран">
              <i class="fa-solid fa-expand"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================================================================
     3 КАРТОЧКИ УСЛУГ
     ================================================================ -->
<section class="top-services-section" id="services">
  <div class="site-container--wide">
    <div class="top-services-grid">
      {#each services as svc}
        <a href={svc.href} target="_blank" rel="noopener" class="top-service-card">
          <div class="top-service-img-box">
            <img loading="lazy" src={svc.img} alt={svc.alt} class="top-service-img" />
          </div>
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
<section class="engineering-section">
  <div class="site-container--wide">
    <div class="engineering-wrapper">

      <div class="scheme-wrap">
        <div class="scheme-system">

          <svg style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;" viewBox="0 0 580 580">
            <line x1="290" y1="290" x2="290" y2="100" stroke="#f07030" stroke-width="2"/>
            <line x1="290" y1="290" x2="455" y2="195" stroke="#f07030" stroke-width="2"/>
            <line x1="290" y1="290" x2="455" y2="385" stroke="#f07030" stroke-width="2"/>
            <line x1="290" y1="290" x2="290" y2="480" stroke="#f07030" stroke-width="2"/>
            <line x1="290" y1="290" x2="125" y2="385" stroke="#f07030" stroke-width="2"/>
            <line x1="290" y1="290" x2="125" y2="195" stroke="#f07030" stroke-width="2"/>
            <circle cx="290" cy="290" r="190" fill="none" stroke="#f07030" stroke-width="2"/>
          </svg>

          <div class="center-circle">
            <img src="/ickonandlogo/newsrtikon/worker.svg" alt="Инженер" class="center-icon" />
          </div>

          {#each schemeItems as item}
            <div class="sat-circle {item.satClass}">
              {#if item.satClass === 'sat-1'}
                <svg class="sat-icon" viewBox="148 148 478 478" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <defs><clipPath id="doc-clip"><path d="m199 148.09h402v503.81h-402z"/></clipPath></defs>
                  <g clip-path="url(#doc-clip)">
                    <path d="m561.64 439.7v-133.18c0-13.816-5.6133-27.332-15.406-37.078l-106.64-106.12c-9.8711-9.8242-22.977-15.23-36.895-15.23h-152.46c-27.828 0-50.469 22.641-50.469 50.469v368.52c0 27.828 22.641 50.469 50.469 50.469h141.99c22.102 21.254 52.086 34.352 85.094 34.352 67.77 0 122.91-55.137 122.91-122.91-0.007813-35.148-14.863-66.871-38.594-89.301zm-311.39 146.48c-10.523 0-19.09-8.5664-19.09-19.09v-368.53c0-10.523 8.5664-19.09 19.09-19.09h152.46c5.5742 0 10.816 2.1641 14.762 6.0938l106.63 106.12c3.9766 3.9609 6.1641 9.2266 6.1641 14.832v111.58c-16.043-7.6836-33.992-11.996-52.93-11.996-4.8477 0-9.6133 0.35547-14.32 0.90625l-182.36-0.003906v23.617h123.32c-16.391 12.258-29.613 28.449-38.258 47.23h-85.059v23.617h76.988c-2.0391 8.8633-3.2188 18.059-3.2188 27.535 0 20.633 5.1328 40.086 14.16 57.176zm227.08 39.574c-53.348 0-96.754-43.398-96.754-96.754 0-53.348 43.398-96.754 96.754-96.754 53.348 0 96.754 43.398 96.754 96.754 0.003906 53.355-43.402 96.754-96.754 96.754z"/>
                  </g>
                  <path d="m280.65 336.16h199.83v23.617h-199.83z"/>
                  <path d="m457.24 582.46c-1.8203 0-3.5664-0.72266-4.8477-2.0078l-37.258-37.266c-1.2891-1.2812-2.0078-3.0312-2.0078-4.8477 0-1.8203 0.72266-3.5664 2.0078-4.8477l15.777-15.77c2.6758-2.6758 7.0234-2.6758 9.6992 0l16.641 16.641 56.797-56.797c2.6758-2.6758 7.0234-2.6758 9.6992 0l15.777 15.77c1.2812 1.2812 2.0078 3.0312 2.0078 4.8477 0 1.8203-0.72266 3.5664-2.0078 4.8477l-77.422 77.422c-1.2969 1.2812-3.043 2.0078-4.8633 2.0078z"/>
                </svg>
              {:else}
                <img src={item.svgSrc} alt="" class="sat-icon" />
              {/if}
            </div>
            <div class="mid-circle {item.midClass}">
              <span class="material-symbols-outlined" style="transform: rotate({item.arrowDeg}deg);">arrow_outward</span>
            </div>
            <div class="sat-label {item.labelClass}">{@html item.label}</div>
          {/each}

        </div>
      </div>

      <div class="text-block">
        <h2 class="eng-title">Инжиниринг полного<br/>цикла</h2>
        <p class="eng-subtitle">Наши преимущества</p>
        <ul class="eng-list">
          {#each advantages as adv}
            <li>
              {#if adv.faIcon}
                <i class="fa-solid {adv.faIcon}"></i>
              {:else}
                <img src={adv.svgIcon} alt="" class="adv-icon" />
              {/if}
              {adv.text}
            </li>
          {/each}
        </ul>
        <button class="btn-order" on:click={() => showModal = true}>Заказать котельную</button>
      </div>

    </div>
  </div>
</section>

<!-- ================================================================
     СТАТИСТИКА
     ================================================================ -->
<section class="stats-section">
  <div class="site-container--wide">
    <div class="stats-grid">
      {#each stats as s}
        <div class="stats-card">
          <div class="stats-number">{s.number}{#if s.unit}<span class="stats-unit">{s.unit}</span>{/if}</div>
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
<section class="booklets-section">
  <div class="site-container--wide">
    {#each booklets as b, i}
      <div class="booklet-block">

        {#if i === 0}
          <div class="booklet-img bmk-video-box">
            <video
              bind:this={bmkVideoEl}
              class="bmk-video"
              src="/fotoandvideo/b4v1.mp4"
              loop
              playsinline
              preload="metadata"
              on:timeupdate={bmkOnTimeUpdate}
              on:loadedmetadata={bmkOnLoadedMetadata}
              on:durationchange={bmkOnDurationChange}
              on:seeked={bmkOnSeeked}
              on:play={() => { bmkVideoEl.muted = false; bmkVideoEl.volume = bmkVolume; }}
            >
              <track kind="captions" />
            </video>
            <button class="play-btn bmk-play-btn" on:click={bmkTogglePlay} aria-label="Play/Pause">
              <i class="fa-solid {bmkPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </button>
            <div class="video-controls bmk-controls">
              <div class="vc-progress-wrap">
                <input
                  bind:this={bmkSeekEl}
                  class="vc-seek bmk-seek"
                  type="range" min="0"
                  max={bmkDuration || 100} step="0.1"
                  value={bmkCurrentTime}
                  on:input={(e) => { bmkVideoEl.currentTime = parseFloat(e.target.value); }}
                />
              </div>
              <div class="vc-row">
                <button class="vc-btn" on:click={bmkTogglePlay}>
                  <i class="fa-solid {bmkPlaying ? 'fa-pause' : 'fa-play'}"></i>
                </button>
                <span class="vc-time">{fmt(bmkCurrentTime)} / {fmt(bmkDuration)}</span>
                <div class="vc-spacer"></div>
                <button class="vc-btn" on:click={bmkToggleMute}>
                  <i class="fa-solid {bmkIsMuted || bmkVolume === 0 ? 'fa-volume-xmark' : bmkVolume < 0.5 ? 'fa-volume-low' : 'fa-volume-high'}"></i>
                </button>
                <input class="vc-volume" type="range" min="0" max="1" step="0.05" value={bmkVolume} on:input={bmkChangeVolume} />
                <div class="vc-speed-wrap">
                  <button class="vc-btn vc-speed-btn" on:click={() => bmkShowSpeedMenu = !bmkShowSpeedMenu}>{bmkSpeed}x</button>
                  {#if bmkShowSpeedMenu}
                    <div class="vc-speed-menu">
                      {#each speeds as s}
                        <button class="vc-speed-option {s === bmkSpeed ? 'active' : ''}" on:click={() => bmkSetSpeed(s)}>{s}x</button>
                      {/each}
                    </div>
                  {/if}
                </div>
                <button class="vc-btn" on:click={bmkToggleFullscreen}>
                  <i class="fa-solid fa-expand"></i>
                </button>
              </div>
            </div>
          </div>

        {:else}
          <div class="booklet-img">
            {#if b.href}
              <a href={b.href} target="_blank" rel="noopener">
                <img loading="lazy" src={b.img} alt={b.alt} />
              </a>
            {:else}
              <img loading="lazy" src={b.img} alt={b.alt} />
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
  <div class="order-modal-overlay" on:click|self={() => showModal = false}>
    <div class="order-modal">
      <button class="order-modal__close" on:click={() => showModal = false} aria-label="Закрыть">&times;</button>
      <h2 class="order-modal__title">Заказать котельную</h2>
      <p class="order-modal__sub">Оставьте заявку — мы свяжемся с вами в ближайшее время</p>
      <form class="order-modal__form" on:submit={handleFormSubmit}>
        <div class="order-modal__field">
          <input type="text" name="username" placeholder="Ваше имя" required class="order-modal__input" />
        </div>
        <div class="order-modal__field">
          <input type="tel" name="phone" placeholder="Ваш телефон" required class="order-modal__input" />
        </div>
        <div class="order-modal__field">
          <textarea name="message" placeholder="Расскажите о вашем проекте" class="order-modal__input order-modal__textarea"></textarea>
        </div>
        <button type="submit" class="order-modal__submit">Отправить заявку</button>
      </form>
    </div>
  </div>
{/if}

<!-- ================================================================
     СТИЛИ
     ================================================================ -->
<style>
  /* — Reset / Base — */
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    font-family: "Montserrat", sans-serif;
    background: #fff;
    overflow-x: hidden;
  }
  :global(img) { max-width: 100%; height: auto; display: block; }
  :global(a)   { text-decoration: none; color: inherit; }

  /* — CSS Variables — */
  :global(:root) {
    --primary-orange: #d35d2d;
    --orange: #f07030;
    --transition-speed: 0.3s;
    --border-radius: 10px;
    --shadow-lg: 0 20px 40px rgba(0,0,0,0.1);
  }

  /* — Containers — */
  .site-container {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    padding-left: clamp(20px, 5vw, 40px);
    padding-right: clamp(20px, 5vw, 40px);
  }
  .site-container--wide {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    padding-left: clamp(20px, 5vw, 40px);
    padding-right: clamp(20px, 5vw, 40px);
  }

  /* — Hero — */
  .hero-section {
    padding: clamp(20px, 3vw, 40px) 0;
    background: #fff;
  }
  .video-hero-inner {
    margin: 0 50px;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  .video-box {
    width: 100%;
    position: relative;
    background: #111;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  .video-poster {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .video-top-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    z-index: 2;
    background: rgba(50,50,50,0.75);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 14px 20px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .video-top-bar__title {
    font-size: clamp(15px, 1.4vw, 20px);
    font-weight: 600;
    color: #fff;
    text-align: center;
    line-height: 1.4;
  }
  .video-top-bar__link {
    font-size: clamp(12px, 1vw, 15px);
    font-weight: 400;
    color: #fff;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.3);
    padding: 6px 20px;
    border-radius: 6px;
    transition: background var(--transition-speed);
  }
  .video-top-bar__link:hover { background: rgba(255,255,255,0.25); }

  /* — Play/Pause кнопка — */
  .play-btn {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 72px; height: 72px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    border: 3px solid rgba(255,255,255,0.8);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: background 0.3s, transform 0.3s, opacity 0.3s;
  }
  .video-box:hover .play-btn { opacity: 1; }
  .play-btn:hover {
    background: rgba(240,112,48,0.75);
    border-color: #f07030;
    transform: translate(-50%, -50%) scale(1.1);
  }
  .play-btn :global(i) { font-size: 24px; color: #fff; line-height: 1; }
  .play-btn :global(i.fa-play)  { margin-left: 3px; }
  .play-btn :global(i.fa-pause) { margin-left: 0; }

  /* — Панель управления видео — */
  .video-controls {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    z-index: 4;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    padding: 24px 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .video-box:hover .video-controls { opacity: 1; }
  .vc-progress-wrap { width: 100%; padding: 4px 0; }
  .vc-seek {
    width: 100%;
    height: 4px;
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(
      to right,
      var(--orange) 0%,
      var(--orange) calc(var(--pct, 0) * 1%),
      rgba(255,255,255,0.3) calc(var(--pct, 0) * 1%),
      rgba(255,255,255,0.3) 100%
    );
    border-radius: 99px;
    cursor: pointer;
    outline: none;
    transition: height 0.15s;
  }
  .vc-seek:hover { height: 6px; }
  .vc-seek::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
    cursor: pointer;
    transition: transform 0.15s;
  }
  .vc-seek::-webkit-slider-thumb:hover { transform: scale(1.3); }
  .vc-seek::-moz-range-thumb {
    width: 14px; height: 14px;
    border-radius: 50%;
    background: #fff;
    border: none;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
    cursor: pointer;
  }
  .vc-row { display: flex; align-items: center; gap: 8px; }
  .vc-btn {
    background: none; border: none;
    color: #fff; font-size: 15px;
    cursor: pointer; padding: 4px 6px;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .vc-btn:hover { color: var(--orange); }
  .vc-time {
    font-size: 12px; font-weight: 500;
    color: #fff; white-space: nowrap;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.3px;
  }
  .vc-spacer { flex: 1; }
  .vc-volume { width: 72px; height: 4px; accent-color: var(--orange); cursor: pointer; }
  .vc-speed-wrap { position: relative; }
  .vc-speed-btn { font-size: 12px; font-weight: 600; font-family: "Montserrat", sans-serif; min-width: 36px; }
  .vc-speed-menu {
    position: absolute;
    bottom: calc(100% + 6px); right: 0;
    background: rgba(20,20,20,0.95);
    border-radius: 8px; overflow: hidden;
    display: flex; flex-direction: column;
    min-width: 64px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  }
  .vc-speed-option {
    background: none; border: none;
    color: #fff; font-size: 13px;
    font-family: "Montserrat", sans-serif; font-weight: 500;
    padding: 7px 14px; cursor: pointer; text-align: center;
    transition: background 0.15s, color 0.15s;
  }
  .vc-speed-option:hover { background: rgba(255,255,255,0.1); }
  .vc-speed-option.active { color: var(--orange); font-weight: 700; }

  /* — 3 Карточки услуг — */
  .top-services-section {
    padding-top: clamp(20px, 3vw, 40px);
    padding-bottom: clamp(30px, 4vw, 60px);
  }
  .top-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  .top-service-card {
    position: relative; overflow: hidden;
    cursor: pointer; aspect-ratio: 3 / 4;
    border-radius: var(--border-radius);
  }
  .top-service-img-box { width: 100%; height: 100%; }
  .top-service-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform var(--transition-speed);
  }
  .top-service-card:hover .top-service-img { transform: scale(1.05); }
  .top-service-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.25);
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    transition: background var(--transition-speed);
  }
  .top-service-card:hover .top-service-overlay { background: rgba(0,0,0,0.45); }
  .top-service-title {
    font-size: clamp(13px, 1.1vw, 16px);
    font-weight: 600; color: #fff;
    line-height: 1.3; text-align: center;
  }

  /* — Инжиниринг — */
  .engineering-section { padding-bottom: clamp(40px, 6vw, 90px); }
  .engineering-wrapper {
    display: flex; align-items: center; gap: 40px;
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: var(--border-radius);
    padding: 40px 50px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }
  .scheme-wrap { flex-shrink: 0; padding-left: 40px; }
  .scheme-system { position: relative; width: 580px; height: 580px; }

  /* — Центральный круг схемы — */
  .center-circle {
    width: 190px; height: 190px;
    border-radius: 50%;
    background: #fff;
    border: 14px solid var(--orange);
    display: flex;
    align-items: center; justify-content: center;
    box-shadow: 0 0 0 4px rgba(240,112,48,0.15);
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2; cursor: pointer;
    overflow: hidden;
    transition: box-shadow 0.3s, border-color 0.3s;
  }
  .center-circle:hover {
    box-shadow: 0 0 0 10px rgba(240,112,48,0.2);
    border-color: var(--primary-orange);
  }
  .center-icon {
    width: 270px; height: 270px;
    object-fit: contain;
    filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(600%) hue-rotate(345deg) brightness(100%);
  }

  /* — Спутниковые круги схемы — */
  .sat-circle {
    width: 95px; height: 95px;
    border-radius: 50%;
    background: var(--orange);
    display: flex; align-items: center; justify-content: center;
    position: absolute; top: 50%; left: 50%;
    z-index: 2; cursor: pointer;
    transition: filter 0.3s, box-shadow 0.3s;
  }
  .sat-circle:hover {
    filter: brightness(0.85);
    box-shadow: 0 8px 20px rgba(211,93,45,0.45);
  }
  .sat-icon {
    width: 50px; height: 50px;
    object-fit: contain;
    flex-shrink: 0;
    filter: brightness(0) invert(1);
  }
  .sat-1 svg.sat-icon {
    width: 42px; height: 42px;
  }

  /* — Промежуточные круги со стрелками — */
  .mid-circle {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--orange);
    position: absolute; top: 50%; left: 50%;
    z-index: 2; cursor: pointer;
    transition: filter 0.3s;
    display: flex; align-items: center; justify-content: center;
  }
  .mid-circle:hover { filter: brightness(0.85); }
  .mid-circle :global(.material-symbols-outlined) {
    font-size: 18px; color: #fff;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    display: block; line-height: 1;
  }

  /* — Позиции промежуточных кругов — */
  :global(.mid-1) { transform: translate(-50%,-50%) translate(95px,  -165px); }
  :global(.mid-2) { transform: translate(-50%,-50%) translate(190px,    0px); }
  :global(.mid-3) { transform: translate(-50%,-50%) translate(95px,   165px); }
  :global(.mid-4) { transform: translate(-50%,-50%) translate(-95px,  165px); }
  :global(.mid-5) { transform: translate(-50%,-50%) translate(-190px,   0px); }
  :global(.mid-6) { transform: translate(-50%,-50%) translate(-95px, -165px); }

  /* — Позиции спутниковых кругов — */
  :global(.sat-1) { transform: translate(-50%,-50%) translate(0px,   -190px); }
  :global(.sat-2) { transform: translate(-50%,-50%) translate(165px,  -95px); }
  :global(.sat-3) { transform: translate(-50%,-50%) translate(165px,   95px); }
  :global(.sat-4) { transform: translate(-50%,-50%) translate(0px,    190px); }
  :global(.sat-5) { transform: translate(-50%,-50%) translate(-165px,  95px); }
  :global(.sat-6) { transform: translate(-50%,-50%) translate(-165px, -95px); }

  /* — Подписи к спутникам — */
  .sat-label {
    position: absolute; top: 50%; left: 50%;
    font-size: 13px; font-weight: 500;
    color: #333; line-height: 1.4;
    z-index: 3; width: 140px;
  }
  :global(.label-1) { transform: translate(-50%,-100%) translate(0px,   -235px); text-align: center; }
  :global(.label-2) { transform: translate(0%,  -50%)  translate(215px,  -95px); text-align: left;   }
  :global(.label-3) { transform: translate(0%,  -50%)  translate(215px,   95px); text-align: left;   }
  :global(.label-4) { transform: translate(-50%, 0%)   translate(0px,    235px); text-align: center; }
  :global(.label-5) { transform: translate(-100%,-50%) translate(-215px,  95px); text-align: right;  }
  :global(.label-6) { transform: translate(-100%,-50%) translate(-215px, -95px); text-align: right;  }

  /* — Текстовый блок преимуществ — */
  .text-block { flex-shrink: 0; width: 420px; margin-left: 80px; }
  .eng-title {
    font-weight: 800; font-size: 28px;
    line-height: 1.1; color: #111;
    text-transform: uppercase; margin-bottom: 16px;
  }
  .eng-subtitle {
    font-size: clamp(15px, 1.3vw, 18px);
    font-weight: 500; color: #555; margin-bottom: 24px;
  }
  .eng-list {
    list-style: none;
    display: flex; flex-direction: column;
    gap: 14px; margin-bottom: 36px;
  }
  .eng-list li {
    display: flex; align-items: center; gap: 12px;
    font-size: clamp(13px, 1.1vw, 15px);
    font-weight: 500; color: #222;
  }
  .eng-list li :global(i) {
    color: var(--orange); font-size: 18px;
    flex-shrink: 0; width: 22px; text-align: center;
  }
  .adv-icon {
    width: 22px; height: 22px;
    flex-shrink: 0;
    object-fit: contain;
    filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(600%) hue-rotate(345deg) brightness(100%);
  }
  .btn-order {
    display: block; width: 100%;
    padding: 16px 20px;
    background: var(--orange); color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 16px; font-weight: 600;
    text-align: center;
    border-radius: var(--border-radius);
    border: none; cursor: pointer;
    transition: background 0.3s, transform 0.3s;
  }
  .btn-order:hover {
    background: var(--primary-orange);
    transform: translateY(-2px);
  }

  /* — Статистика — */
  .stats-section {
    padding: clamp(40px, 5vw, 70px) 0;
    background: #f4f4f4;
    margin-bottom: clamp(40px, 6vw, 90px);
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .stats-card {
    background: #fff;
    border-radius: var(--border-radius);
    padding: 36px 24px 32px;
    display: flex; flex-direction: column;
    align-items: center; text-align: center;
    border-top: 4px solid transparent;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    cursor: default;
  }
  .stats-card:hover {
    transform: translateY(-6px);
    border-top-color: var(--orange);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }
  .stats-number {
    font-weight: 800;
    font-size: clamp(48px, 5vw, 72px);
    line-height: 1; color: #111; letter-spacing: -2px;
  }
  .stats-unit {
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 800; color: var(--orange); letter-spacing: -1px;
  }
  .stats-divider {
    width: 40px; height: 3px;
    background: var(--orange);
    border-radius: 99px; margin: 12px 0;
  }
  .stats-label {
    font-size: clamp(13px, 1vw, 15px);
    font-weight: 500; color: #888; line-height: 1.4;
  }

  /* — Буклеты / продукты — */
  .booklets-section { padding-bottom: clamp(40px, 6vw, 90px); }
  .booklet-block {
    display: flex; align-items: flex-start; gap: 50px;
    padding: clamp(30px, 4vw, 50px) 0;
    border-bottom: 1px solid #ebebeb;
  }
  .booklet-block:last-child { border-bottom: none; }
  .booklet-img {
    flex-shrink: 0;
    width: 520px; height: 340px;
    border-radius: var(--border-radius); overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .booklet-img:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(211,93,45,0.2);
  }
  .booklet-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* — Видео БМК — */
  .bmk-video-box { position: relative; overflow: hidden; background: #111; }
  .bmk-video { width: 100%; height: 100%; object-fit: cover; display: block; }
  .bmk-video-box .play-btn { top: 50%; left: 50%; }
  .bmk-video-box:hover .play-btn { opacity: 1; }
  .bmk-video-box .video-controls { opacity: 0; }
  .bmk-video-box:hover .video-controls { opacity: 1; }

  /* — Текст буклета — */
  .booklet-content { flex: 1; }
  .booklet-heading {
    font-weight: 700;
    font-size: clamp(20px, 2vw, 28px);
    color: #111; margin-bottom: 20px;
  }
  .booklet-heading--link:hover { color: var(--orange); text-decoration: underline; }
  .booklet-desc {
    font-size: clamp(15px, 1.3vw, 18px);
    font-weight: 400; color: #444;
    line-height: 1.8; text-align: justify;
  }

  /* — Модальная форма — */
  .order-modal-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    animation: modalFadeIn 0.25s ease;
  }
  @keyframes modalFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .order-modal {
    background: #fff;
    border-radius: var(--border-radius);
    padding: 40px 36px 36px;
    width: 100%; max-width: 520px;
    position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,0.2);
    animation: modalSlideUp 0.25s ease;
  }
  @keyframes modalSlideUp {
    from { transform: translateY(24px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  .order-modal__close {
    position: absolute; top: 14px; right: 18px;
    background: none; border: none;
    font-size: 28px; line-height: 1;
    color: #aaa; cursor: pointer;
    transition: color 0.2s; padding: 0;
  }
  .order-modal__close:hover { color: var(--primary-orange); }
  .order-modal__title { font-size: 22px; font-weight: 700; color: #111; margin-bottom: 6px; }
  .order-modal__sub { font-size: 14px; color: #888; margin-bottom: 24px; line-height: 1.5; }
  .order-modal__form { display: flex; flex-direction: column; gap: 14px; }
  .order-modal__input {
    width: 100%;
    border: 1.5px solid #ddd;
    border-radius: var(--border-radius);
    padding: 13px 16px;
    font-family: "Montserrat", sans-serif;
    font-size: 15px; color: #111;
    outline: none; transition: border-color 0.2s;
  }
  .order-modal__input:focus { border-color: var(--orange); }
  .order-modal__input::placeholder { color: #bbb; }
  .order-modal__textarea { resize: vertical; min-height: 100px; }
  .order-modal__submit {
    width: 100%; padding: 15px;
    background: var(--orange); color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 16px; font-weight: 600;
    border: none; border-radius: var(--border-radius);
    cursor: pointer; transition: background 0.3s, transform 0.2s;
  }
  .order-modal__submit:hover {
    background: var(--primary-orange);
    transform: translateY(-2px);
  }
</style>