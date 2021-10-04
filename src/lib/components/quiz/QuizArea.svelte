<script>
    import QuizQuestion from '$lib/components/quiz/QuizQuestion.svelte'
    import ContactForm from '$lib/components/ContactForm.svelte'

    export let title = 'Расчет объектов теплоэнергетики'
    export let subtitle = 'Онлайн калькулятор'
    export let questionId

    let answers = []
    let completed

    let questions = {
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

    $: question = questionId !== undefined ? questions[questionId] : undefined
    $: lead = {
        type: 'lead.Quiz',
        title: title,
        data: JSON.stringify(answers)
    }


    function handleAnswer(event) {
        answers = [...answers, event.detail]
        questionId = event.detail.next
        if (!questionId)
            completed = true
        console.debug('answers', JSON.stringify(answers))
    }
</script>


<section class="hero is-primary is-halfheight">
    <!--{JSON.stringify(answers)}-->
    {#if question}
        <div class="hero-body is-justify-content-center">
            <QuizQuestion question={question} on:answer={handleAnswer}/>
        </div>
    {:else}
        <div class="hero-body is-justify-content-center">
            <div class="has-text-centered">
                {#if completed}
                    <ContactForm inverted="true" lead="{lead}"/>
                {:else}
                    <div class="title">
                        {title}
                    </div>
                    <p class="subtitle">
                        {subtitle}
                    </p>
                    <div class="hero-foot">
                        <button class="button is-large is-primary is-inverted is-bold is-radiusless"
                                on:click={()=>{questionId=0}}>Начать расчет
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</section>