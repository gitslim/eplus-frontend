<script>
  import Icon from 'fa-svelte'
  import {faHistory, faUsers, faRoad, faChartBar} from '@fortawesome/free-solid-svg-icons'

</script>

<style lang="scss">
  .counter-icon {
    font-size: xx-large;
  }
</style>


<section class="section">
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-6-tablet is-3-desktop">
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <Icon class="counter-icon" icon="{faHistory}" />
              </figure>
            </div>
            <div class="media-content has-text-right">
              <h3 class="title is-1 has-text-info">17</h3>
            </div>
          </div>
          <h4 class="title">Лет</h4>
          <h5 class="subtitle">на рынке</h5>
          <progress class="progress is-info" role="progressbar" value="75" max="100"></progress>
        </div>
      </div>
      <div class="column is-6-tablet is-3-desktop">
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <Icon class="counter-icon counter-icon-years" icon="{faUsers}" />
              </figure>
            </div>
            <div class="media-content has-text-right">
              <h3 class="title is-1 has-text-danger">165</h3>
            </div>
          </div>
          <h4 class="title">Организаций</h4>
          <h5 class="subtitle">заказчиков</h5>
          <progress class="progress is-danger" role="progressbar" value="75" max="100"></progress>
        </div>
      </div>
      <div class="column is-6-tablet is-3-desktop">
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <Icon class="counter-icon counter-icon-years" icon="{faChartBar}" />
              </figure>
            </div>
            <div class="media-content has-text-right">
              <h3 class="title is-1 has-text-success">370</h3>
            </div>
          </div>
          <h4 class="title">Проектов</h4>
          <h5 class="subtitle">выполнено</h5>
          <progress class="progress is-success" role="progressbar" value="75" max="100"></progress>
        </div>
      </div>
      <div class="column is-6-tablet is-3-desktop">
        <div class="box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <Icon class="counter-icon counter-icon-years" icon="{faRoad}" />
              </figure>
            </div>
            <div class="media-content has-text-right">
              <h3 class="title is-1 has-text-info">530</h3>
            </div>
          </div>
          <h4 class="title">Километров</h4>
          <h5 class="subtitle">запроектировано</h5>
          <progress class="progress is-info" role="progressbar" value="75" max="100"></progress>
        </div>
      </div>
    </div>
  </div>
</section>
