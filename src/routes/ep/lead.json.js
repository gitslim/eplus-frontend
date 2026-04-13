export const post = async (request) => {
  //   const bitrixUrl = import.meta.env.VITE_BITRIX_HOOK_URL;
  const bitrixUrl = process.env['VITE_BITRIX_HOOK_URL'];
  let { title, name, phone, email, comments } = request.body;
  title = title || ""
  name = name || ""
  phone = phone || ""
  email = email || ""
  comments = comments || ""

  // FOR LOCAL TESTING 
  // if (!bitrixUrl) {
  //   console.warn("VITE_BITRIX_HOOK_URL is not set. Returning mock success response.");
  //   return {
  //     status: 200,
  //     body: { result: "mock_success" }
  //   };
  // }

  let res = await fetch(
    `${bitrixUrl}crm.lead.add.json?FIELDS[TITLE]=${title}&FIELDS[NAME]=${name}&FIELDS[PHONE][0][VALUE]=${phone}&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[COMMENTS]=${comments}`,
  );

  console.log(res);

  if (res.ok) {
    return {
      status: 200,
      body: await res.json(),
    };
  }
  return {
    status: res.status,
  };
};
