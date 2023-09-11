const intersection = function (arr1, arr2) {
  const set = new Set(arr2);
  const intersection = new Set(arr1.filter((elem) => set.has(elem)));
  return Array.from(intersection);
};

const fetchEndpoint = async function (fetchFn, endpoint, params) {
  const res = await fetchFn(endpoint, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (res.ok) {
    return {
      props: {
        data: await res.json(),
      },
    };
  }

  return {
    status: res.status,
    error: new Error(endpoint),
  };
};

const formatDate = function (dateString) {
  const date = new Date(dateString);
  const dateTimeFormat = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const [{ value: day }, , { value: month }, , { value: year }] =
    dateTimeFormat.formatToParts(date);
  return `${day}-${month}-${year}`;
};

const chooseImageUrl = function (image) {
  const validFormats = ['medium', 'small', 'thumbnail'];
  for (let idx in validFormats) {
    try {
      return image.formats[validFormats[idx]].url;
    } catch (e) {}
  }
  return image.url;
};

const twitter = function (url, title) {};

const gtmEvent = (data) => {
  if (window !== undefined) {
    const dataLayer = window.dataLayer || [];
    dataLayer.push(data);
  }
};

const bitrixLead = async ({ type, title, name, phone, email, comments }) => {
  gtmEvent({
    event: type,
    title: title,
    name: name,
    phone: phone,
    email: email,
    comments: comments,
  });

  return await fetch('/ep/lead.json', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, name, phone, email, comments }),
  });
};

export { intersection, fetchEndpoint, formatDate, chooseImageUrl, twitter, bitrixLead, gtmEvent };
