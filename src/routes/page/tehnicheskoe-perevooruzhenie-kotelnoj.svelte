<script context="module">
    import SvelteSeo from 'svelte-seo'
</script>

<script>
    import HeaderLanding from '$lib/components/HeaderLanding.svelte'
    import TitleLanding from '$lib/components/TitleLanding.svelte'
    import PurposeCard from '$lib/components/PurposeCard.svelte'
    import BtnZayavka from '$lib/components/BtnZayavka.svelte'
    import InfoBlock from '$lib/components/InfoBlock.svelte'
    import CalculationBlock from '$lib/components/CalculationBlock.svelte'
    import QuizArea from '$lib/components/quiz/QuizArea.svelte'

    let title = 'Техническое переворужение котельной'

    const headerCaption = {
        caption: title,
    }

    const info = {
        text:
            'Техническое перевооружение опасного производственного объекта - приводящие к изменению технологического процесса на опасном производственном объекте внедрение новой технологии, автоматизация опасного производственного объекта или его отдельных частей, модернизация или замена применяемых на опасном производственном объекте технических устройств.',
        subText:
            'Источник: Федеральный закон от 21.07.1997 № 116-ФЗ «О промышленной безопасности опасных производственных объектов» // СЗ РФ. 1997. № 30. Ст. 3588. (абзац девятый статьи 1) (абзац дополнен Федеральным законом от 04.03.2013 № 22-ФЗ)',
    }

    const questions = [
        {
            id: '01',
            text:
                'Как в условиях работы действующего предприятия провести модернизацию без останова основной деятельности предприятия?',
        },
        {
            id: '02',
            text: 'Как осуществить модернизацию с наименьшими затратами?',
        },
        {
            id: '03',
            text:
                'Какие технические решения позволят достичь максимальной энергоэффективности, т.е. позволят достичь оптимального соотношения потребления энергоресурсов на 1кВт вырабатываемой мощности?',
        },
        {
            id: '04',
            text: 'Как увеличить производительность котельной?',
        },
        {
            id: '05',
            text:
                'Какой набор документов потребуется для выполнения полного комплекса работ?',
        },
    ]

    const functionsCard = [
        {
            id: 1,
            text:
                'Энергоаудит, выбор оборудования, проведение технико-экономических расчетов и обоснований технического перевооружения/ модернизации объекта',
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-1.png',
        },
        {
            id: 2,
            text:
                'Проведение инженерных изысканий с целью определения свойств грунтов, состояния фундаментов в объеме, необходимом для проведения работ по техническому перевооружению, обследование и сбор (получение) заключений экспертизы промышленной безопасности на отдельные конструктивные элементы объекта, которые не затрагиваются проводимой модернизацией',
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-2.png',
        },
        {
            id: 3,
            text:
                'Разработка проектной документации на техническое перевооружения, в которой предусмотрены организационные и технические меры, обеспечивающие экологическую и промышленную безопасность.',
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-3.png',
        },
        {
            id: 4,
            text:
                'Сопровождение и получение положительного заключения экспертизы по проектной документации на техническое перевооружение. Регистрация заключения экспертизы промышленной безопасности проекта на техническое перевооружение опасного объекта в территориальном органе Ростехнадзора',
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-4.png',
        },
        {
            id: 5,
            text: 'Выполнение строительно-монтажных и пуско-наладочных работ',
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-5.png',
        },
        {
            id: 6,
            text:
                'Сдача объекта Федеральной службе по экологическому, технологическому и атомному надзору',
            alt: 'image-card',
            src: '/images/tehnicheskoePerevooruzhenie/steps-kot-6.png',
        },
    ]
</script>

<style lang="scss">
  .caption {
    display: block;
    padding-top: 180px !important;
    padding-bottom: 130px;
    background: url("/images/tehnicheskoePerevooruzhenie/main-banner.jpg") no-repeat center;
    background-size: cover;
    overflow: hidden;
    color: #fff;
    width: 100vw;
  }

  .main {
    &__info {
      &-block {
        position: relative;
        top: -35px;
      }
    }
  }

  .questions {
    padding-top: 60px;
    text-align: center;

    &__desc {
      max-width: 893px;
      margin: 0 auto 50px;
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__item {
      display: flex;
      padding-bottom: 50px;
      position: relative;

      &:last-child::before {
        display: none;
      }

      &::before {
        content: "";
        position: absolute;
        left: 94px;
        top: 54px;
        height: 100%;
        width: 2px;
        border-right: 2px dashed #3838387a;
      }

      &-num {
        font-size: 40px;
        color: rgb(56, 56, 56);
        font-weight: bold;
        text-align: center;
        min-width: 55px;
        margin-right: 100px;
        height: 100%;
      }

      &-text {
        display: inline-flex;
        align-items: center;
        text-align: left;
        font-size: 20px;
        color: rgb(56, 56, 56);
        font-weight: bold;
        line-height: 1.2;
      }

      &::after {
        content: "";
        position: absolute;
        top: 40px;
        left: 95px;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 4px solid #ff6600;
      }
    }
  }

  .functions {
    margin-bottom: 40px;
    padding-top: 60px;
    text-align: center;

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .calculation {
    background-image: url("/images/tehnicheskoePerevooruzhenie/form-bg.jpg");
    text-align: center;
    color: #fff;
    padding: 100px 0 70px;
    background-size: cover;
  }
</style>

<SvelteSeo {title}/>

<main class="main">
    <section class="section caption">
        <div class="container is-widescreen">
            <HeaderLanding {...headerCaption}/>
            <BtnZayavka btnText="Заказать" radius="true"/>
        </div>
    </section>

    <div class="container is-max-widescreen">
        <div class="main__info-block">
            <InfoBlock {...info}/>
        </div>
    </div>

    <section class="section questions">
        <div class="container is-max-widescreen">
            <p class="questions__desc">
                В настоящее время множество предприятий сталкивается с необходимостью
                замены выработавшего парковый ресурс теплогенерирующего оборудования. В
                этом случае на повестку дня ставится ряд вопросов:
            </p>
            <div class="questions__wrap">
                <div class="columns questions__items">
                    {#each questions as {text, id}}
                        <div class="column is-10 questions__item">
                            <p class="questions__item-num">{id}</p>
                            <p class="questions__item-text">{text}</p>
                        </div>
                    {/each}
                </div>
            </div>
            <p class="questions__desc">
                Специалисты ООО «Энергия Плюс» готовы предложить решения этих и многих
                других вопросов, возникающих при проведении подобного вида работ. С
                учетом конструктивных особенностей объекта и пожеланий Заказчика нами
                будут оптимизированы затраты на вышеуказанные мероприятия, особенно в
                части оформления требуемой надзорными органами документации, по
                трудоемкости сопоставимой со строительно-монтажными работами, а по
                длительности - часто превосходящей их.
            </p>
        </div>
    </section>
    <section class="section functions">
        <div class="container is-widescreen">
            <TitleLanding titleText="Этапы Перевооружения котельной"/>
            <div class="columns functions__items">
                {#each functionsCard as item}
                    <PurposeCard text={item.text} alt={item.alt} src={item.src}/>
                {/each}
            </div>
        </div>
    </section>
    <section class="section calculation">
        <div class="container is-max-widescreen">
            <CalculationBlock/>
<!--            <QuizArea/>-->
        </div>
    </section>
</main>
