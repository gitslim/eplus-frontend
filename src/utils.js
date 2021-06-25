const formatDate = function (dateString) {
  const date = new Date(dateString);
  const dateTimeFormat = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [
    { value: day },
    ,
    { value: month },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(date);
  return `${day}-${month}-${year}`;
};

const chooseImageUrl = function (image) {
  const validFormats = ["medium", "small", "thumbnail"];
  for (let idx in validFormats) {
    try {
      return image.formats[validFormats[idx]].url;
    } catch (e) {}
  }
  return image.url;
};

const twitter = function (url, title) {};

const calculation = function (data) {
  const projectGazLine = data.projectGazLine
    ? 90000 + (data.projectGazLine - 100) * 600
    : 0;
  const projectPower = data.projectPower
    ? 80000 + (data.projectPower - 1) * 8000
    : 0;
  const installGazLine = data.installGazLine ? 20000 * data.installGazLine : 0;
  const installPower = data.installPower
    ? 1000000 + (data.installPower - 1) * 7500
    : 0;

  return +(projectGazLine + projectPower + installGazLine + installPower);
};

export { formatDate, chooseImageUrl, twitter, calculation };
