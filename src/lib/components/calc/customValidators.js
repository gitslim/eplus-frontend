export function jobTypeSelected(value, form) {
    console.log('jobTypeSelected', form.values.projectVp)
    if (form.values.projectV === 'checked'
        || form.values.projectVp === 'checked'
        || form.values.montV === 'checked'
        || form.values.montVp === 'checked') {
        return null
    }
    return {jobTypeSelected: true}
}

export function jobSelected(value, form) {
    console.log('jobSelected', value)
    if (form.values.jobs.length === 0)
        return {jobSelected: true}
}