<script>
    import QuizItem from '$lib/components/quiz/QuizItem.svelte'
    import {t} from 'svelte-i18n'

    export let quizId = 0
    export let title = ''
    export let subtitle = ''

    let currentItemId = 0
    let answers = {}
    let log = []

    $: items = {
        0: {
            0: {
                title: $t('calculators.quiz.q0_buildings_count'),
                widget: 'input',
                mask: '00',
                placeholder: $t('calculators.quiz.q0_buildings_count_ph'),
                next: 1,
            },
            1: {
                title: $t('calculators.quiz.q0_buildings_purpose'),
                widget: 'radio',
                options: [
                    {title: $t('calculators.quiz.opt_office'), val: 0, next: 2},
                    {title: $t('calculators.quiz.opt_warehouse'), val: 1, next: 2},
                    {title: $t('calculators.quiz.opt_residential'), val: 2, next: 2},
                    {title: $t('calculators.quiz.opt_industrial'), val: 3, next: 2}]
            },
            2: {
                title: $t('calculators.quiz.q0_area'),
                widget: 'input',
                mask: '00000',
                next: 3
            },
            3: {
                title: $t('calculators.quiz.q0_height'),
                widget: 'input',
                mask: '000',
                next: 4
            },
            4: {
                title: $t('calculators.quiz.q0_hot_water'),
                widget: 'input',
                mask: '000',
                next: 5
            },
            5: {
                title: $t('calculators.quiz.calculating'),
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
                title: $t('calculators.quiz.contact_form_title_5min'),
                widget: 'contact-form',
                next: 7
            },
            7: {
                title: $t('calculators.quiz.thank_you_title'),
                widget: 'thank-you',
                text: $t('calculators.quiz.thank_you_text'),
            }
        },
        1: {
            0: {
                title: $t('calculators.quiz.q1_object_name'),
                widget: 'input',
                mask: /.*/,
                placeholder: $t('calculators.quiz.q1_object_name_ph'),
                next: 1,
            },
            1: {
                title: $t('calculators.quiz.q1_region'),
                widget: 'input',
                mask: /.*/,
                placeholder: $t('calculators.quiz.q1_region_ph'),
                next: 2,
            },
            2: {
                title: $t('calculators.quiz.q1_gas_object'),
                widget: 'radio',
                options: [
                    {title: $t('calculators.quiz.opt_boiler'), val: 0, next: 3},
                    {title: $t('calculators.quiz.opt_tech_equip'), val: 1, next: 3}
                ]
            },
            3: {
                title: $t('calculators.quiz.q1_tu'),
                widget: 'radio',
                options: [
                    {title: $t('calculators.quiz.opt_yes'), val: 0, next: 4},
                    {title: $t('calculators.quiz.opt_no'), val: 1, next: 5}
                ]
            },
            4: {
                title: $t('calculators.quiz.q1_gas_volume'),
                widget: 'input',
                mask: '000000',
                placeholder: $t('calculators.quiz.q1_gas_volume_ph'),
                next: 5,
            },
            5: {
                title: $t('calculators.quiz.q1_pipe_len'),
                widget: 'input',
                mask: '00000',
                placeholder: $t('calculators.quiz.q1_pipe_len_ph'),
                next: 6,
            },
            6: {
                title: $t('calculators.quiz.please_wait'),
                widget: 'calc',
                next: 7,
                delay: 5000,
                fn: (answers) => {
                    console.debug('fn', answers)
                    return 0
                }
            },
            7: {
                title: $t('calculators.quiz.contact_form_title'),
                widget: 'contact-form',
                next: 8
            },
            8: {
                title: $t('calculators.quiz.thank_you_title'),
                widget: 'thank-you',
                text: $t('calculators.quiz.thank_you_text'),
            }
        },
        2: {           
            0: {
                title: $t('calculators.quiz.q0_buildings_count'),
                widget: 'input',
                mask: '00',
                placeholder: $t('calculators.quiz.q0_buildings_count_ph'),
                next: 1,
            },
            1: {
                title: $t('calculators.quiz.q0_buildings_purpose'),
                widget: 'radio',
                options: [
                    {title: $t('calculators.quiz.opt_office'), val: 0, next: 2},
                    {title: $t('calculators.quiz.opt_warehouse'), val: 1, next: 2},
                    {title: $t('calculators.quiz.opt_residential'), val: 2, next: 2},
                    {title: $t('calculators.quiz.opt_industrial'), val: 3, next: 2}]
            },
            2: {
                title: $t('calculators.quiz.q0_area'),
                widget: 'input',
                mask: '00000',
                next: 3
            },
            3: {
                title: $t('calculators.quiz.q0_height'),
                widget: 'input',
                mask: '000',
                next: 4
            },
            4: {
                title: $t('calculators.quiz.q0_hot_water'),
                widget: 'input',
                mask: '000',
                next: 5
            },
            5: {
                title: $t('calculators.quiz.please_wait'),
                widget: 'calc',
                next: 6,
                delay: 3000,
                fn: (answers) => {
                    console.debug('fn', answers)
                    return 0
                }
            },
            6: {
                title: $t('calculators.quiz.heat_calc_done'),
                widget: 'email-form',
                next: 7
            },
            7: {
                title: $t('calculators.quiz.thank_you_title'),
                widget: 'thank-you',
                text: $t('calculators.quiz.thank_you_text'),
            }
        }
    }

    $: item = items[quizId] ? items[quizId][currentItemId] : null

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