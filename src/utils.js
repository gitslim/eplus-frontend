const formatDate = function (dateString) {
  const date = new Date(dateString)
  const dateTimeFormat = new Intl.DateTimeFormat('ru', {year: 'numeric', month: '2-digit', day: '2-digit'})
  const [{value: day}, , {value: month}, , {value: year}] = dateTimeFormat.formatToParts(date)
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

export {formatDate, chooseImageUrl}
