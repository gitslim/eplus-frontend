import website from '$lib/config/website'

const {bitrixHookUrl} = website

const fetchEndpoint = async function (fetchFn, endpoint, params) {

    const res = await fetchFn(endpoint, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })

    if (res.ok) {
        return {
            props: {
                data: await res.json()
            }
        }
    }

    return {
        status: res.status,
        error: new Error(endpoint)
    }
}


const formatDate = function (dateString) {
    const date = new Date(dateString)
    const dateTimeFormat = new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
    const [
        {value: day},
        ,
        {value: month},
        ,
        {value: year},
    ] = dateTimeFormat.formatToParts(date)
    return `${day}-${month}-${year}`
}

const chooseImageUrl = function (image) {
    const validFormats = ['medium', 'small', 'thumbnail']
    for (let idx in validFormats) {
        try {
            return image.formats[validFormats[idx]].url
        } catch (e) {
        }
    }
    return image.url
}

const twitter = function (url, title) {
}

const calculation = function (data) {
    let projectGazLine = 0,
        projectPower = 0,
        installGazLine = 0,
        installPower = 0

    if (data.project) {
        projectGazLine = data.gazLine
            ? 90000 + (parseInt(data.gazLine) - 100) * 600
            : 0
        projectPower = data.gazPower
            ? 80000 + (parseInt(data.gazPower) - 1) * 8000
            : 0
    }

    if (data.install) {
        installGazLine = data.gazLine ? 20000 * parseInt(data.gazLine) : 0
        installPower = data.gazPower
            ? 1000000 + (parseInt(data.gazPower) - 1) * 7500
            : 0
    }

    let amount = projectGazLine + projectPower + installGazLine + installPower
    return amount
}

const gtmEvent = (data) => {
    if (window !== undefined) {
        const dataLayer = window.dataLayer || []
        dataLayer.push(data)
    }
}

const bitrixLead = async ({type, title, name, phone}) => {
    gtmEvent({
        'event': type,
        'title': title,
        'name': name,
        'phone': phone
    })
    const leadUri = `${bitrixHookUrl}crm.lead.add.json`
    const uriGet = `${leadUri}?FIELDS[TITLE]=${title}&FIELDS[NAME]=${name}&FIELDS[PHONE][0][VALUE]=${phone}`
    let response = await fetch(uriGet)
    console.debug('bitrixLead response', response)
    return response
}

export {fetchEndpoint, formatDate, chooseImageUrl, twitter, calculation, bitrixLead, gtmEvent}
