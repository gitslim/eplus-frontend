<script>
    import {createEventDispatcher} from 'svelte'
    import {createForm} from 'svelte-forms-lib'
    import {imask} from '@imask/svelte'
    import Switch from '$lib/components/form/Switch.svelte'

    import Icon from 'fa-svelte'
    import * as icons from '@fortawesome/free-solid-svg-icons'
    import ContactForm from '$lib/components/ContactForm.svelte'

    const dispatch = createEventDispatcher()

    let lead = {}
    let errs = {}
    $: vals = $form
    $: {
        console.log('validate', vals)
        let _errs = {}
        if (vals.projVp || vals.montVp) {
            if (vals.lenVp === '')
                _errs.lenVp = 'Укажите протяженность газопровода'
        } else if (vals.projV || vals.montV) {
            if (vals.lenV === '')
                _errs.lenV = 'Укажите протяженность газопровода'
        } else {
            _errs.common = 'Выберите вид работ'
        }

        if (vals.name === '')
            _errs.name = 'Введите имя'
        if(vals.phone === '')
            _errs.phone = 'Введите телефон'

        errs = _errs
        console.log('validated', errs)
    }
    $: valid = Object.keys(errs).length === 0

    const {form, isSubmitting, handleChange, handleSubmit} = createForm({
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
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })

</script>


<div class="container">
    <form on:submit={handleSubmit}>

        <div class="is-divider" data-content="Внутриплощадочный газопровод"></div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Вид работ:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <Switch name="projVp" bind:value={$form.projVp} on:change={handleChange}>проект на
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
                    <Switch name="montVp" bind:value={$form.montVp} on:change={handleChange}>монтаж внутриплощадочного
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
                    <div class="control has-icons-left has-icons-right">
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
                    <Switch name="needGrpsh" bind:value={$form.needGrpsh} on:change={handleChange}>Необходимость
                        установки ГРПШ
                    </Switch>
                </div>
            </div>
        </div>

        <div class="is-divider" data-content="Внутренний газопровод"></div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Вид работ:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <Switch name="projV" bind:value={$form.projV} on:change={handleChange}>проект на внутренний
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
                    <Switch name="montV" bind:value={$form.montV} on:change={handleChange}>монтаж внутреннего
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
                    <div class="control has-icons-left has-icons-right">
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
                    <Switch name="needGru" bind:value={$form.needGru} on:change={handleChange}>Необходимость установки
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
                    <Switch name="needUchet" bind:value={$form.needUchet} on:change={handleChange}>Необходимость
                        установки коммерческого узла учета газа
                    </Switch>
                </div>
            </div>
        </div>

        <div class="is-divider" data-content="Контактные данные"></div>

        <div class="field is-horizontal">
            <div class="field-label is-expanded">
                <label class="label">Ваше имя:</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input name="name"
                               class="input"
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
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input name="phone"
                               class="input"
                               class:is-danger={errs.phone}
                               bind:value={$form.phone}
                               on:change={handleChange}
                        />
                        <span class="icon is-small is-left"><Icon icon="{icons.faPhone}"/></span>
                        {#if errs.phone}
                            <div class="icon is-small is-right has-text-danger">
                                <Icon icon="{icons.faExclamationTriangle}"/>
                            </div>
                        {:else}
                            <div class="icon is-small is-right">
                                <Icon icon="{icons.faCheck}"/>
                            </div>
                        {/if}
                    </div>
                    {#if errs.phone}
                        <p class="help is-danger">{errs.phone}</p>
                    {/if}
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" disabled={!valid} on:click|preventDefault>
                            Рассчитать
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </form>
<!--    <pre>-->
<!--        valid: {JSON.stringify(valid, null, 1)}-->
<!--        errs: {JSON.stringify(errs, null, 1)}-->
<!--        vals: {JSON.stringify(vals, null, 1)}-->
<!--	</pre>-->
</div>
