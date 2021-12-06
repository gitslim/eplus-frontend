<script>
    import {createEventDispatcher} from 'svelte'
    import {createForm} from 'svelte-forms-lib'
    import {imask} from '@imask/svelte'
    import Switch from '$lib/components/form/Switch.svelte'

    import Icon from 'fa-svelte'
    import * as icons from '@fortawesome/free-solid-svg-icons'
    import CalcResult from '$lib/components/calc/CalcResult.svelte'
    import {bitrixLead} from '$lib/utils.js'

    const dispatch = createEventDispatcher()

    let amount = 0
    let isDone = false
    let calcDelay = 3000
    let isCalculating = false
    let errs = {}
    let vals, valid

    $: vals = $form
    $: {
        let _errs = {}
        if (vals.projVp || vals.montVp) {
            if (vals.lenVp === '')
                _errs.lenVp = 'Укажите протяженность газопровода'
        }
        if (vals.projV || vals.montV) {
            if (vals.lenV === '')
                _errs.lenV = 'Укажите протяженность газопровода'
        }
        if (!(vals.projVp || vals.montVp || vals.projV || vals.montV)) {
            _errs.common = 'Выберите вид работ'
        }

        if (vals.name === '')
            _errs.name = 'Введите имя'
        if (vals.phone === '')
            _errs.phone = 'Введите телефон'

        errs = _errs
    }
    $: valid = Object.keys(errs).length === 0

    const {form, handleChange, handleSubmit} = createForm({
        initialValues: {
            projVp: false,
            montVp: false,
            lenVp: '',
            needGrpsh: false,

            projV: false,
            montV: false,
            lenV: '',
            needGru: false,
            needUchet: false,

            name: '',
            phone: ''
        },
        onSubmit: async values => {
            let log = []

            if (vals.projVp || vals.montVp) {
                if (vals.projVp) {
                    log.push('Проект')
                }
                if (vals.montVp) {
                    log.push('Монтаж')
                }
                log.push('внутриплощадочного газопровода')
                log.push('длиной ' + vals.lenVp + 'м')
                if (vals.needGrpsh)
                    log.push('с ГРПШ')
                log.push('|')
            }
            if (vals.projV || vals.montV) {
                if (vals.projV) {
                    log.push('Проект')
                }
                if (vals.montV) {
                    log.push('Монтаж')
                }
                log.push('внутреннего газопровода')
                log.push('длиной ' + vals.lenV + 'м')
                if (vals.needGru)
                    log.push('с ГРУ')
                if (vals.needUchet)
                    log.push('с узлом учета газа')
                log.push('|')
            }

            amount = calculate()
            log.push('Сумма расчета: ' + amount + ' руб.')

            let data = {
                type: 'lead.calcGaz',
                title: 'Калькулятор газопроводов',
                comments: log.join(' '),
                name: vals.name,
                phone: vals.phone
            }
            // console.debug('lead data', data)
            setTimeout(() => {
                isCalculating = false
                isDone = true
            }, calcDelay)

            let response = await bitrixLead(data)
            if (response.ok) {
                console.debug('bitrix response', response)
            } else {
                console.error('Ошибка отправки формы. Попробуйте еще раз!')
            }
        }
    })

    function calculate() {
        isCalculating = true
        isDone = false
        amount = 0

        let lenVp = parseInt(vals.lenVp)
        let lenV = parseInt(vals.lenV)

        if (vals.projVp) {
            amount += 130000 + lenVp * 800
            if (vals.needGrpsh)
                amount += 8000
        }
        if (vals.projV) {
            amount += 100000 + lenV * 2000
            if (vals.needGru)
                amount += 100000
            if (vals.needUchet)
                amount += 170000
        }
        if (vals.montVp) {
            amount += lenVp * 25000
            if (vals.needGrpsh)
                amount += 1000000
        }
        if (vals.montV) {
            amount += 200000 + lenV * 15000
            if (vals.needGru)
                amount += 1000000
            if (vals.needUchet)
                amount += 850000
        }
        console.debug('amount', amount, 'vals', vals)
        return amount
    }

    function reset(){
        isDone = false
        amount = 0
    }

</script>


<div class="container">
    {#if isCalculating}
        <div class="p-6 has-text-centered">
            <span class="subtitle">Производим расчет</span>
            <progress class="progress is-small is-primary"></progress>
        </div>
    {:else if isDone}
        <CalcResult {amount} on:complete={reset} text="Результат расчета"/>
    {:else}
        <form on:submit={handleSubmit}>

<!--            <div class="is-divider" data-content="Внутриплощадочный газопровод"></div>-->

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Вид работ:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="projVp" value={$form.projVp} on:change={handleChange}>проект на
                            внутриплощадочный газопровод
                        </Switch>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="montVp" value={$form.montVp} on:change={handleChange}>монтаж
                            внутриплощадочного
                            газопровода
                        </Switch>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal" class:is-hidden={!($form.projVp || $form.montVp)}>
                <div class="field-label is-expanded">
                    <label class="label">Ориентировочная протяженность внутриплощадочного газопровода, м</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control is-expanded has-icons-left has-icons-right">
                            <input name="lenVp"
                                   use:imask={{mask: /^\d{0,5}$/}}
                                   class="input"
                                   class:is-danger={errs.lenVp}
                                   placeholder="Протяженность, м"
                                   bind:value={$form.lenVp}
                                   on:change={handleChange}
                            />
                            <span class="icon is-small is-left"><Icon icon="{icons.faBacon}"/></span>
                            {#if errs.lenVp}
                                <div class="icon is-small is-right has-text-danger">
                                    <Icon icon="{icons.faExclamationTriangle}"/>
                                </div>
                            {:else}
                                <div class="icon is-small is-right">
                                    <Icon icon="{icons.faCheck}"/>
                                </div>
                            {/if}
                        </div>
                        {#if errs.lenVp}
                            <p class="help is-danger">{errs.lenVp}</p>
                        {/if}
                    </div>
                </div>
            </div>

            <div class="field is-horizontal" class:is-hidden={!($form.projVp || $form.montVp)}>
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="needGrpsh" value={$form.needGrpsh} on:change={handleChange}>Необходимость
                            установки ГРПШ
                        </Switch>
                    </div>
                </div>
            </div>

<!--            <div class="is-divider" data-content="Внутренний газопровод"></div>-->

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Вид работ:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="projV" value={$form.projV} on:change={handleChange}>проект на внутренний
                            газопровод
                        </Switch>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="montV" value={$form.montV} on:change={handleChange}>монтаж внутреннего
                            газопровода
                        </Switch>
                    </div>
                </div>
            </div>


            <div class="field is-horizontal" class:is-hidden={!($form.projV || $form.montV)}>
                <div class="field-label is-expanded">
                    <label class="label">Ориентировочная протяженность внутреннего газопровода, м</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control is-expanded has-icons-left has-icons-right">
                            <input name="lenV"
                                   use:imask={{mask: /^\d{0,5}$/}}
                                   class="input"
                                   class:is-danger={errs.lenV}
                                   placeholder="Протяженность, м"
                                   bind:value={$form.lenV}
                                   on:change={handleChange}
                            />
                            <span class="icon is-small is-left"><Icon icon="{icons.faBacon}"/></span>
                            {#if errs.lenV}
                                <div class="icon is-small is-right has-text-danger">
                                    <Icon icon="{icons.faExclamationTriangle}"/>
                                </div>
                            {:else}
                                <div class="icon is-small is-right">
                                    <Icon icon="{icons.faCheck}"/>
                                </div>
                            {/if}
                        </div>
                        {#if errs.lenV}
                            <p class="help is-danger">{errs.lenV}</p>
                        {/if}
                    </div>
                </div>
            </div>

            <div class="field is-horizontal" class:is-hidden={!($form.projV || $form.montV)}>
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="needGru" value={$form.needGru} on:change={handleChange}>Необходимость
                            установки
                            ГРУ
                        </Switch>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal" class:is-hidden={!($form.projV || $form.montV)}>
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="needUchet" value={$form.needUchet} on:change={handleChange}>Необходимость
                            установки коммерческого узла учета газа
                        </Switch>
                    </div>
                </div>
            </div>

<!--            <div class="is-divider" data-content="Контактные данные"></div>-->

            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Ваше имя:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input name="name"
                                   class="input"
                                   use:imask={{mask: /^[А-яA-z]{0,30}$/}}
                                   placeholder="Как к вам обращаться"
                                   class:is-danger={errs.name}
                                   bind:value={$form.name}
                                   on:change={handleChange}
                            />
                            <span class="icon is-small is-left"><Icon icon="{icons.faUser}"/></span>
                            {#if errs.name}
                                <div class="icon is-small is-right has-text-danger">
                                    <Icon icon="{icons.faExclamationTriangle}"/>
                                </div>
                            {:else}
                                <div class="icon is-small is-right">
                                    <Icon icon="{icons.faCheck}"/>
                                </div>
                            {/if}
                        </div>
                        {#if errs.name}
                            <p class="help is-danger">{errs.name}</p>
                        {/if}
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Телефон:</label>
                </div>
                <div class="field-body">
                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <p class="control">
                                <a class="button is-static">
                                    +7
                                </a>
                            </p>
                            <p class="control is-expanded has-icons-right">
                                <input name="phone"
                                       class="input"
                                       type="tel"
                                       use:imask={{mask: /^\d{0,10}$/}}
                                       placeholder="Максимум 10 цифр"
                                       class:is-danger={errs.phone}
                                       bind:value={$form.phone}
                                       on:change={handleChange}
                                />
                                <!--                        <span class="icon is-small is-left"><Icon icon="{icons.faPhone}"/></span>-->
                                {#if errs.phone}
                            <span class="icon is-small is-right has-text-danger">
                                <Icon icon="{icons.faExclamationTriangle}"/>
                            </span>
                                {:else}
                            <span class="icon is-small is-right">
                                <Icon icon="{icons.faCheck}"/>
                            </span>
                                {/if}
                            </p>
                        </div>
                        {#if errs.phone}
                            <p class="help is-danger">{errs.phone}</p>
                        {/if}
                    </div>
                </div>
            </div>

            <div class="field is-horizontal py-4">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button type="submit" class="button is-primary is-rounded" disabled={!valid}>
                                Рассчитать
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
<!--            <pre>-->
<!--                valid: {JSON.stringify(valid, null, 1)}-->
<!--                errs: {JSON.stringify(errs, null, 1)}-->
<!--                vals: {JSON.stringify(vals, null, 1)}-->
<!--        	</pre>-->
    {/if}
</div>
