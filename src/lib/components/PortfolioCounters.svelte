<script>
    import Icon from 'fa-svelte'
    import {faChartBar, faHistory, faRoad, faUsers} from '@fortawesome/free-solid-svg-icons'
    import {t} from 'svelte-i18n'
</script>

<style>
  :global(.portfolio-counter-icon) {
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
                                <Icon class="portfolio-counter-icon" icon="{faHistory}"/>
                            </figure>
                        </div>
                        <div class="media-content has-text-right">
                            <h3 class="title is-1 has-text-info">21</h3>
                        </div>
                    </div>
                    <h4 class="title">{$t('portfolio_counters.years_title')}</h4>
                    <h5 class="subtitle">{$t('portfolio_counters.years_subtitle')}</h5>
                    <progress aria-label="on-market" class="progress is-info" max="100" role="progressbar" value="75"></progress>
                </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <Icon class="portfolio-counter-icon portfolio-counter-icon-years" icon="{faUsers}"/>
                            </figure>
                        </div>
                        <div class="media-content has-text-right">
                            <h3 class="title is-1 has-text-danger">225</h3>
                        </div>
                    </div>
                    <h4 class="title">{$t('portfolio_counters.clients_title')}</h4>
                    <h5 class="subtitle">{$t('portfolio_counters.clients_subtitle')}</h5>
                    <progress aria-label="organizations" class="progress is-danger" max="100" role="progressbar" value="75"></progress>
                </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <Icon class="portfolio-counter-icon portfolio-counter-icon-years" icon="{faChartBar}"/>
                            </figure>
                        </div>
                        <div class="media-content has-text-right">
                            <h3 class="title is-1 has-text-success">485</h3>
                        </div>
                    </div>
                    <h4 class="title">{$t('portfolio_counters.projects_title')}</h4>
                    <h5 class="subtitle">{$t('portfolio_counters.projects_subtitle')}</h5>
                    <progress aria-label="projects" class="progress is-success" max="100" role="progressbar" value="75"></progress>
                </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <Icon class="portfolio-counter-icon portfolio-counter-icon-years" icon="{faRoad}"/>
                            </figure>
                        </div>
                        <div class="media-content has-text-right">
                            <h3 class="title is-1 has-text-info">750</h3>
                        </div>
                    </div>
                    <h4 class="title">{$t('portfolio_counters.km_title')}</h4>
                    <h5 class="subtitle">{$t('portfolio_counters.km_subtitle')}</h5>
                    <progress aria-label="kilometers" class="progress is-info" max="100" role="progressbar" value="75"></progress>
                </div>
            </div>
        </div>
    </div>
</section>
