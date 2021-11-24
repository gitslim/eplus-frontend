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

export {calculation}