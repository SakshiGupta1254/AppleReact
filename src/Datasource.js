
export async function callApi(
    url,
    queryparamsObj,
    method,
    body,
    type,property
  ) {
    console.log("url:", url,"method:", method,"query: ",queryparamsObj,"body: ",body);
    let response, error, queryParams;
    if (queryparamsObj === null) {
      queryParams = "";
    } else {
      queryParams = "?";
      let count = 1;
      const objLength = Object.keys(queryparamsObj).length;
  
      for (let key in queryparamsObj) {
        if (count !== objLength) {
          queryParams += `${key}=${queryparamsObj[key]}&`;
        } else {
          queryParams += `${key}=${queryparamsObj[key]}`;
        }
        count++;
      }
    }
  
    //console.log(queryParams);
  
    try {
      const data = await fetch(
        url + queryParams,
        {
          method: method,
          headers: {
            Accept: "application/json",
          ...(type !== "form data" && {
            "Content-Type": "application/json"})},
          body: body?body:null,
        }
      );
  
      if (data.status === 401 && data.statusText === "Unauthorized") {
        return { response: "Unauthorized", error: null };
      }
      if (data.status === 403 && data.statusText === "Forbidden") {
        return { response: "Forbidden", error: null };
      }
      if (!data.ok) {
        throw new Error(data);
      }
      
      response = await data.json();
      //  console.log(response);
      return { response, error,property};
    } catch (err) {
      error = err;
      return { response, error,property };
    }
  }