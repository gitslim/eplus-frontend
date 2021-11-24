<script>
    import {createEventDispatcher} from 'svelte'
    // import {createForm} from 'svelte-forms-lib'
    import Icon from 'fa-svelte'
    import {faCheck, faExclamationTriangle, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
    // import * as yup from 'yup'
    import {imask} from '@imask/svelte'
    import Switch from '$lib/components/form/Switch.svelte'
    import {intersection} from '$lib/utils'
    import { useForm, HintGroup, Hint, validators, email, required } from "svelte-use-form"
    import ContactForm from '$lib/components/ContactForm.svelte'
    import {jobSelected, jobTypeSelected} from '$lib/components/calc/customValidators'

    const dispatch = createEventDispatcher()

    const form = useForm()

    let jobs = []
    let lead = {}

    $: isVp = intersection(jobs, ['projectVp', 'montVp']).length > 0
    $: isV = intersection(jobs, ['projectV', 'montV']).length > 0
    $: formValid = isVp || isV

    function handleSuccess() {
        console.debug('success')
        dispatch('complete', {
        })
    }

    $: amount = 0
    // $: isVp = intersection($form.jobs, ['projectVp', 'smrVp']).length > 0
    // $: nameCls = $touched.name ? ($errors.name ? 'is-danger' : 'is-success') : ''
    // $: phoneCls = $touched.phone ? ($errors.phone ? 'is-danger' : 'is-success') : ''
    // $: powerVpCls = $touched.powerVp ? ($errors.powerVp ? 'is-danger' : 'is-success') : ''

    function accept({detail: maskRef}) {
        console.log('accept', maskRef.value)
        // value = maskRef.value
    }

    function complete({detail: maskRef}) {
        console.log('complete', maskRef.unmaskedValue)
    }

    function handleJobsInput(e) {
        console.log(e)
        jobs = e.target.value
    }
</script>


<div class="container">
    <form use:form>
<!--        <button on:click={()=>{jobs = 'foo'}} on:click|preventDefault>Click</button>-->
<!--        <input name="jobs"  value={jobs2} on:input={handleJobsInput}/>-->
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Вид работ:</label>
            </div>
             <div class="field-body">
                    <div class="field">
<!--                        <div class="control">-->
<!--                            <label class="checkbox">-->
<!--                                <input name="projectVp" type="checkbox"  use:validators={[jobTypeSelected]}>-->
<!--                                проект на внутриплощадочный газопровод-->
<!--                            </label>-->
<!--                        </div>-->
                        <Switch name="projectVp" value="projectVp" bind:group={jobs}>проект на внутриплощадочный газопровод</Switch>
                    </div>
                </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label"></label>
            </div>
            <div class="field-body">
                <div class="field">
                    <Switch name="projectV" value="projectV" bind:group={jobs}>проект на внутренний газопровод</Switch>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label"></label>
            </div>
            <div class="field-body">
                <div class="field">
                    <Switch name="montVp" value="montVp" bind:group={jobs}>монтаж внутриплощадочного газопровода</Switch>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label"></label>
            </div>
            <div class="field-body">
                <div class="field">
                    <Switch name="montV" value="montV" bind:group={jobs}>монтаж внутреннего газопровода</Switch>
                </div>
            </div>
        </div>

        <div class="field is-horizontal" class:is-hidden={!isVp}>
            <div class="field-label is-expanded">
                <label class="label">Ориентировочная протяженность внутриплощадочного газопровода, м</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input name="lenVp"
                               use:imask={{mask: /^\d{0,5}$/}}
                               class="input"
                               placeholder="Протяженность, м"
                        />
                        <span class="icon is-small is-left"><Icon icon="{faUser}"/></span>
                        <!--{#if powerVpCls === 'is-danger'}-->
                        <!--    <div class="icon is-small is-right has-text-danger">-->
                        <!--        <Icon icon="{faExclamationTriangle}"/>-->
                        <!--    </div>-->
                        <!--{:else if powerVpCls === 'is-success'}-->
                        <!--    <div class="icon is-small is-right has-text-success">-->
                        <!--        <Icon icon="{faCheck}"/>-->
                        <!--    </div>-->
                        <!--{/if}-->
                    </div>
                    <!--{#if powerVpCls === 'is-danger'}-->
                    <!--    <p class="help is-danger">{$errors.powerVp}</p>-->
                    <!--{/if}-->
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Телефон:</label>
            </div>
            <div class="field-body">
                <div class="field">
<!--                    <ContactForm {lead} on:success={(event)=>handleSuccess(event.detail)}/>-->
                    <div class="control has-icons-left has-icons-right">
                        <input name="phone"
                               use:imask={{mask: /^\d{0,10}$/}}
                               use:validators={[required]}
                               class="input"
                               placeholder="10 цифр номера"
                        />
                        <span class="icon is-small is-left"><Icon icon="{faUser}"/></span>
                        <HintGroup for="phone">
                            <Hint on="required">Введите номер телефона</Hint>
                        </HintGroup>
                        <!--{#if powerVpCls === 'is-danger'}-->
                        <!--    <div class="icon is-small is-right has-text-danger">-->
                        <!--        <Icon icon="{faExclamationTriangle}"/>-->
                        <!--    </div>-->
                        <!--{:else if powerVpCls === 'is-success'}-->
                        <!--    <div class="icon is-small is-right has-text-success">-->
                        <!--        <Icon icon="{faCheck}"/>-->
                        <!--    </div>-->
                        <!--{/if}-->
                    </div>
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
                        <button class="button is-primary" disabled={!formValid} on:click|preventDefault>
                            Рассчитать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <pre>
		{JSON.stringify($form.values, null, 1)}
	</pre>
    <pre>
		{JSON.stringify($form, null, 1)}
	</pre>
</div>
