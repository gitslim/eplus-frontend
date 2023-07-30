<script>
    import QuizItem from '$lib/components/quiz/QuizItem.svelte'

    export let quizId = 0
    export let title = ''
    export let subtitle = ''

    let currentItemId = 0
    let answers = {}
    let log = []

    let items = {
        0: {
            0: {
                title: 'Укажите количество зданий для теплотехнического расчета',
                widget: 'input',
                mask: '00',
                placeholder: 'Количество зданий',
                next: 1,
            },
            1: {
                title: 'Укажите назначение зданий',
                widget: 'radio',
                options: [
                    {title: 'офисное', val: 0, next: 2},
                    {title: 'складское', val: 1, next: 2},
                    {title: 'жилое', val: 2, next: 2},
                    {title: 'промышленное', val: 3, next: 2}]
            },
            2: {
                title: 'Укажите общую площадь здания',
                widget: 'input',
                mask: '00000',
                next: 3
            },
            3: {
                title: 'Укажите высоту здания',
                widget: 'input',
                mask: '000',
                next: 4
            },
            4: {
                title: 'Укажите количество точек потребления горячей воды',
                widget: 'input',
                mask: '000',
                next: 5
            },
            5: {
                title: 'Производим расчет...',
                widget: 'calc',
                next: 6,
                delay: 5000,
                fn: (answers) => {
                    console.debug('fn', answers)
                    let k = 1
                    switch (answers[1]) {
                        case 0:
                            k = 1.1 * k
                            break
                        case 1:
                            k = 1.2 * k
                            break
                        case 2:
                            k = 1.3 * k
                            break
                        case 3:
                            k = 1.4 * k
                            break
                    }
                    return parseInt(answers[0]) * k * parseInt(answers[4])
                }
            },
            6: {
                title: 'В течение 5 минут расчёт будет готов. Для получения результатов укажите Ваши контактные данные',
                widget: 'contact-form',
                next: 7
            },
            7: {
                title: 'Спасибо за обращение!',
                widget: 'thank-you',
                text: 'В ближайшее время мы сообщим вам результат расчета',
            }
        },
        1: {
            0: {
                title: 'Укажите наименование объекта',
                widget: 'input',
                mask: /.*/,
                placeholder: 'Наименование объекта',
                next: 1,
            },
            1: {
                title: 'Укажите регион расположения объекта',
                widget: 'input',
                mask: /.*/,
                placeholder: 'Регион объекта',
                next: 2,
            },
            2: {
                title: 'Укажите объект газоснабжения',
                widget: 'radio',
                options: [
                    {title: 'котельная', val: 0, next: 3},
                    {title: 'технологическое оборудование', val: 1, next: 3}
                ]
            },
            3: {
                title: 'Есть ли технические условия на газ?',
                widget: 'radio',
                options: [
                    {title: 'да', val: 0, next: 4},
                    {title: 'нет', val: 1, next: 5}
                ]
            },
            4: {
                title: 'Укажите объем планируемого потребления газа',
                widget: 'input',
                mask: '000000',
                placeholder: 'Объем потребления газа (куб.м)',
                next: 5,
            },
            5: {
                title: 'Укажите ориентировочную протяженность газопровода',
                widget: 'input',
                mask: '00000',
                placeholder: 'Протяженность газопровода (м)',
                next: 6,
            },
            6: {
                title: 'Пожалуйста подождите...',
                widget: 'calc',
                next: 7,
                delay: 5000,
                fn: (answers) => {
                    console.debug('fn', answers)
                    return 0
                }
            },
            7: {
                title: 'В течение нескольких минут расчёт будет готов. Для получения результатов укажите Ваши контактные данные',
                widget: 'contact-form',
                next: 8
            },
            8: {
                title: 'Спасибо за обращение!',
                widget: 'thank-you',
                text: 'В ближайшее время мы сообщим вам результат расчета',
            }
        }
    }

    $: item = items[quizId][currentItemId]

    function handleAnswer(event) {
        const answer = event.detail
        console.debug(answer)
        answers[currentItemId] = answer.val
        console.debug('answers', answers)
        log.push(answer.log)
        currentItemId = answer.next
    }

    function handleFinish(_) {
        currentItemId = 0
        answers = {}
        log = []
    }
</script>


<section class="hero is-white is-halfheight">
    <div class="hero-body is-justify-content-center">
        <div class="has-text-centered">
            <div class="title has-text-weight-light">
                {title}
            </div>
            <p class="subtitle">
                {subtitle}
            </p>
            <div class="hero-foot">
                <div class="has-text-left">
                    <QuizItem quizTitle={title} {item} {answers} {log} on:answer={handleAnswer}
                              on:finish={handleFinish}/>
                </div>
            </div>
        </div>
    </div>
</section>