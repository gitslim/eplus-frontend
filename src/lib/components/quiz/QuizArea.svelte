<script>
    import QuizItem from '$lib/components/quiz/QuizItem.svelte'

    export let quizId = 0
    export let title = ''
    export let subtitle = ''

    let currentItemId = 0
    let answers = {}

    let items = {
        0: {
            0: {
                title: 'Количество зданий для тепло-технического расчета',
                widget: 'input',
                mask: '00',
                placeholder: 'Количество зданий',
                next: 1,
            },
            1: {
                title: 'Назначение',
                widget: 'radio',
                options: [
                    {title: 'офисное', val: 0, next: 2},
                    {title: 'складское', val: 1, next: 2},
                    {title: 'жилое', val: 2, next: 2},
                    {title: 'промышленное', val: 3, next: 2}]
            },
            2: {
                title: 'Площадь здания',
                widget: 'input',
                mask: '00000',
                next: 3
            },
            3: {
                title: 'Высота здания',
                widget: 'input',
                mask: '000',
                next: 4
            },
            4: {
                title: 'Количество точек потребления горячей воды',
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
                title: 'Введите контактные данные',
                widget: 'contact-form',
                next: 7
            },
            7: {
                title: 'Резуьтат расчета',
                widget: 'result',
                answer: 5,
                text: 'Примерная стоимость:',
            },
        }
    }

    $: item = items[quizId][currentItemId]

    function handleAnswer(event) {
        const answer = event.detail
        console.debug(answer)
        answers[currentItemId] = answer.val
        console.debug('answers', answers)
        currentItemId = answer.next
    }

    function handleFinish(_) {
        currentItemId = 0
        answers = {}
    }
</script>


<section class="hero is-primary is-halfheight">
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
                    <QuizItem quizTitle={title} {item} {answers} on:answer={handleAnswer} on:finish={handleFinish}/>
                </div>
            </div>
        </div>
    </div>
</section>