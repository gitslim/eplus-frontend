<script>
  import Icon from 'fa-svelte'
  import {faPhone,faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
  import {faVk, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
</script>

<ul>
  <li>
              <span>
                <Icon icon="{faMapMarkerAlt}"/>
                111123, Москва, 1-я Владимирская, д.10А, стр. 1
              </span>
  </li>
  <li>
    <a href="tel:+74957907697">
      <Icon icon="{faPhone}"/>
      <span class="callibri_phone">+7 (495) 790-76-97</span>
    </a>
  </li>
  <li>
    <a href="mailto:info@energy-plus.biz">
      <Icon icon="{faEnvelope}"/>
      info@energy-plus.biz
    </a>
  </li>
</ul>
