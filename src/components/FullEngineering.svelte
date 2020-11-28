<script>
  import Icon from 'fa-svelte'
  import {faMedal,faCubes,faBurn,faDraftingCompass,faUserShield,} from '@fortawesome/free-solid-svg-icons'
  import {faBattleNet} from '@fortawesome/free-brands-svg-icons'
  import LazyImage from 'svelte-lazy-image'
</script>

<div class="columns is-vcentered">
  <div class="column is-5">
    <figure class="image is-4by3">
      <LazyImage
        src="/images/Инжиниринг полного цикла.png"
        alt="Инжиниринг полного цикла в энергетике"
      />
    </figure>
  </div>
  <div class="column is-6 is-offset-1">
    <h1 class="title is-2">
      Инжиниринг полного цикла
    </h1>
    <h2 class="subtitle is-4">
      Наши преимущества
    </h2>

    <ul>
      <li>
        <Icon class="icon has-text-primary" icon="{faBurn}"/>
          Получение тех. возможности подачи газа
      </li>
      <li>
        <Icon class="icon has-text-primary" icon="{faDraftingCompass}"/>
        Оптимальные технические решения в 2D, 3D
      </li>
      <li>
        <Icon class="icon has-text-primary" icon="{faBattleNet}"/>
        Комплексные проекты энергообеспечения
      </li>
      <li>
        <Icon class="icon has-text-primary" icon="{faUserShield}"/>
        Своевременная сдача результата работ
      </li>
      <li>
        <Icon class="icon has-text-primary" icon="{faMedal}"/>
        Гарантия положительного заключения экспертизы
      </li>
    </ul>

    <p class="has-text-centered pt-6">
      <a class="button hero-buttons is-primary">
        Заказать расчет
      </a>
    </p>
  </div>
</div>
