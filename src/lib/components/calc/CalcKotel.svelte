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
        if (vals.power === '')
            _errs.power = 'Укажите мощность котельной'
        if (parseFloat(vals.power) < 0.4)
            _errs.power = 'Минимальная мощность котельной 0.4 МВт'
        if (vals.name === '')
            _errs.name = 'Введите имя'
        if (vals.phone === '')
            _errs.phone = 'Введите телефон'

        errs = _errs
    }
    $: valid = Object.keys(errs).length === 0

    const {form, handleChange, handleSubmit} = createForm({
        initialValues: {
            type: 'typeNew',
            power: '',
            hw: 'hwImport',
            proj: true,
            mont: false,

            name: '',
            phone: ''
        },
        onSubmit: async values => {
            let log = []
            if (vals.proj)
                 log.push('Проект')
            if (vals.mont)
                log.push('Монтаж')
            if(vals.type === 'typeNew')
                log.push('нового строительства')
            if(vals.type === 'typePer')
                log.push('тех. перевооружения')
            if(vals.type === 'typeRec')
                log.push('реконструкции')
            log.push('котельной мощностью ' + vals.power + 'МВт')
            if (vals.hw === 'hwImport')
                log.push('на импортном оборудовании')
            if (vals.hw === 'hwRus')
                log.push('на отечественном оборудовании')

            amount = calculate()
            log.push('Сумма расчета: ' + amount + ' руб.')

            let data = {
                type: 'lead.calcKotel',
                title: 'Калькулятор котельной',
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
                alert('Ошибка отправки формы. Попробуйте еще раз!')
                reset()
            }
        }
    })

    function calculate() {
        isCalculating = true
        isDone = false
        amount = 0

        let power = parseFloat(vals.power)
        console.debug('power', power)

        if (0.4 <= power && power <= 1){
            if (vals.type === 'typeNew'){
                if(vals.proj)
                    amount += 920000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 9800000
                    if(vals.hw === 'hwRus')
                        amount += power * 9300000
                }
            }
            if (vals.type === 'typePer'){
                if(vals.proj)
                    amount += 800000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8800000
                    if(vals.hw === 'hwRus')
                        amount += power * 8400000
                }
            }
            if (vals.type === 'typeRec'){
                if(vals.proj)
                    amount += 1100000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 10800000
                    if(vals.hw === 'hwRus')
                        amount += power * 10300000
                }
            }
        }
        if (1 < power && power <= 3){
            if (vals.type === 'typeNew'){
                if(vals.proj)
                    amount += 1200000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 9600000
                    if(vals.hw === 'hwRus')
                        amount += power * 9100000
                }
            }
            if (vals.type === 'typePer'){
                if(vals.proj)
                    amount += 1000000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8650000
                    if(vals.hw === 'hwRus')
                        amount += power * 8200000
                }
            }
            if (vals.type === 'typeRec'){
                if(vals.proj)
                    amount += 1450000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 10600000
                    if(vals.hw === 'hwRus')
                        amount += power * 10000000
                }
            }
        }
        if (3 < power && power <= 7){
            if (vals.type === 'typeNew'){
                if(vals.proj)
                    amount += 1500000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 9300000
                    if(vals.hw === 'hwRus')
                        amount += power * 8700000
                }
            }
            if (vals.type === 'typePer'){
                if(vals.proj)
                    amount += 1300000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8400000
                    if(vals.hw === 'hwRus')
                        amount += power * 7800000
                }
            }
            if (vals.type === 'typeRec'){
                if(vals.proj)
                    amount += 1800000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 10200000
                    if(vals.hw === 'hwRus')
                        amount += power * 9500000
                }
            }
        }
        if (7 < power && power <= 12){
            if (vals.type === 'typeNew'){
                if(vals.proj)
                    amount += 2000000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8900000
                    if(vals.hw === 'hwRus')
                        amount += power * 8300000
                }
            }
            if (vals.type === 'typePer'){
                if(vals.proj)
                    amount += 1700000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8000000
                    if(vals.hw === 'hwRus')
                        amount += power * 7450000
                }
            }
            if (vals.type === 'typeRec'){
                if(vals.proj)
                    amount += 2400000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 9800000
                    if(vals.hw === 'hwRus')
                        amount += power * 9100000
                }
            }
        }
        if (12 < power && power <= 20){
            if (vals.type === 'typeNew'){
                if(vals.proj)
                    amount += 2800000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8500000
                    if(vals.hw === 'hwRus')
                        amount += power * 7600000
                }
            }
            if (vals.type === 'typePer'){
                if(vals.proj)
                    amount += 2400000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 7650000
                    if(vals.hw === 'hwRus')
                        amount += power * 6900000
                }
            }
            if (vals.type === 'typeRec'){
                if(vals.proj)
                    amount += 3400000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 9400000
                    if(vals.hw === 'hwRus')
                        amount += power * 8500000
                }
            }
        }
        if (20 < power){
            if (vals.type === 'typeNew'){
                if(vals.proj)
                    amount += power * 150000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8000000
                    if(vals.hw === 'hwRus')
                        amount += power * 7200000
                }
            }
            if (vals.type === 'typePer'){
                if(vals.proj)
                    amount += power * 135000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 7200000
                    if(vals.hw === 'hwRus')
                        amount += power * 6500000
                }
            }
            if (vals.type === 'typeRec'){
                if(vals.proj)
                    amount += power * 170000
                if(vals.mont){
                    if(vals.hw === 'hwImport')
                        amount += power * 8800000
                    if(vals.hw === 'hwRus')
                        amount += power * 7900000
                }
            }
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
                    <label class="label">Вид строительства:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="field">
                            <input  type="radio" bind:group={$form.type} id="typeNew" name="typeNew" value="typeNew" class="is-checkradio is-medium" >
                            <label for="typeNew">новое</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="field">
                            <input  type="radio" bind:group={$form.type} id="typePer" name="typePer" value="typePer" class="is-checkradio is-medium" >
                            <label for="typePer">тех. перевооружение</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="field">
                            <input  type="radio" bind:group={$form.type} id="typeRec" name="typeRec" value="typeRec" class="is-checkradio is-medium" >
                            <label for="typeRec">реконструкция</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Мощность котельной, МВт</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control is-expanded has-icons-left has-icons-right">
                            <input name="power"
                                   use:imask={{mask: /^\d{0,3}[.,]{0,1}\d{0,3}$/}}
                                   class="input"
                                   class:is-danger={errs.lenVp}
                                   placeholder="Мощность, МВт"
                                   bind:value={$form.power}
                                   on:change={handleChange}
                            />
                            <span class="icon is-small is-left"><Icon icon="{icons.faFire}"/></span>
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
                            <p class="help is-danger">{errs.power}</p>
                        {/if}
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Оборудование:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="field">
                            <input  type="radio" bind:group={$form.hw} id="hwImport" name="hwImport" value="hwImport" class="is-checkradio is-medium" >
                            <label for="hwImport">импортное</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="field">
                            <input  type="radio" bind:group={$form.hw} id="hwRus" name="hwRus" value="hwRus" class="is-checkradio is-medium" >
                            <label for="hwRus">отечественное</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Вид работ:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="proj" value={$form.proj} on:change={handleChange}>проект</Switch>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label"></label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <Switch name="mont" value={$form.mont} on:change={handleChange}>монтаж</Switch>
                    </div>
                </div>
            </div>

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
