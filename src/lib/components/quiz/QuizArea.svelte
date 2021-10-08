<script>
    import QuizResult from '$lib/components/quiz/QuizResult.svelte'
    import QuizItem from '$lib/components/quiz/QuizItem.svelte'

    export let quizId = 0
    export let title = 'Расчет объектов теплоэнергетики'
    export let subtitle = ''
    export let inverted

    let currentItemId = 0
    let answers = []
    let isBusy
    let isError
    let resultText

    const sym = Object.freeze({
        numBuildingsTtr: Symbol('Количество зданий для тепло-технического расчета'),
        destination: Symbol('Назначение'),
        buildingSquare: Symbol('Площадь здания'),
        buildingTypeOffice: Symbol('офисное'),
        buildingTypeWarehouse: Symbol('складское'),
        buildingTypeResidential: Symbol('жилое'),
        buildingTypeIndustrial: Symbol('промышленное')
    })

    let items = {
        0: {
            0: {
                title: sym.numBuildingsTtr,
                widget: 'input',
                mask: '00',
                placeholder: 'Количество зданий',
                next: 1
            },
            1: {
                title: sym.destination,
                widget: 'radio',
                options: [
                    {title: sym.buildingTypeOffice, next: 2},
                    {title: sym.buildingTypeWarehouse, next: 2},
                    {title: sym.buildingTypeResidential, next: 2},
                    {title: sym.buildingTypeIndustrial, next: 2}]
            },
            2: {
                title: sym.buildingSquare,
                widget: 'input',
                mask: '00000',
                next: 3,
                func: () => {
                    console.debug('func', answers)
                    let sum = 123
                    resultText = `Примерная стоимость: ${sum}`
                },
                delay: 1000
            },
            3: {
                title: Symbol('Введите контактные данные'),
                widget: 'contact-form',
                lead: lead,
                next: 4
            }
        },
        1: {
            0: {
                title: 'Объект расчета',
                widget: 'radio',
                options: [{title: 'Котельная', next: 1}, {title: 'Газопровод', next: 2}],
            },
            1: {
                title: 'Тип проекта',
                widget: 'radio',
                options: [{title: 'Внутриплощадочный газопровод', next: 1}, {title: 'Внутренний газопровод', next: 2}],
            },
            2: {
                title: 'Вид строительства',
                widget: 'radio',
                options: [{title: 'Новое'}, {title: 'Тех. перевооружение'}, {title: 'Реконструкция'}]
            }
        }
    }

    $: item = items[quizId][currentItemId]
    $: lead = {
        type: 'lead.Quiz',
        title: title,
        data: JSON.stringify(answers)
    }

    async function handleAnswer(event) {
        const answer = event.detail
        console.log(answer)

        answers.push(`${answer.q.description}: ${answer.a}`)
        // answers = [...answers, event.detail.map((o) => {
        //     console.log(o)
        //     return {
        //         q: o.q.description,
        //         a: o.a
        //     }
        // })]
        console.debug('answers', answers)
        const item = items[quizId][currentItemId]
        const func = item.func
        if (func) {
            isBusy = true
            try {
                func()
            } catch (e) {
                console.debug('Quiz item func error', e)
            } finally {
                setTimeout(() => {
                    isBusy = false
                }, item.delay || 100)
            }
        }
        currentItemId = answer.next
    }
</script>


<section class="hero is-primary is-halfheight" class:is-inverted={inverted}>
    <!--{JSON.stringify(answers)}:{resultText}-->
    <div class="hero-body is-justify-content-center">
        <div class="has-text-centered">
            <div class="title has-text-weight-light">
                {title}
            </div>
            <p class="subtitle">
                {subtitle}
            </p>
            <div class="hero-foot">
                {#if resultText}
                    <div class="pt-4">
                        <h3 class="title has-text-success-dark">{resultText}</h3>
                        <div class="subtitle has-text-dark pt-4">
                            <span>Закажите точный расчет по телефону</span>
                            <a rel="external"
                               class="has-text-centered has-text-white" class:is-inverted={inverted}
                               href="tel:+74957907697">
                                <span class="callibri_phone">+7 (495) 790-76-97</span>
                            </a>
                        </div>
                    </div>
                {:else if item}
                    {#if isBusy}
                        <div class="pt-3">
                            <span>Пожалуйста подождите...</span>
                            <progress class="progress is-small is-primary" class:is-inverted={inverted}></progress>
                        </div>
                    {:else}
                        <div class="has-text-left">
                            <QuizItem {item} on:answer={handleAnswer}/>
                        </div>
                    {/if}
                {:else}
                    <!--                    <button class="button is-large is-primary is-inverted is-bold is-radiusless"-->
                    <!--                            on:click={()=>{itemId=initialItemId}}>Начать расчет-->
                    <!--                    </button>-->
                    <QuizResult/>
                {/if}
            </div>
        </div>
    </div>
</section>