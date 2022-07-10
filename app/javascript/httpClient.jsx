import CsrfToken from "./csrfToken";

export const HttpClient = () => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-CSRF-Token": CsrfToken(),
  };

  function handleResponse(res, okCallback, notOkCallback, optionalJsonObject) {
    if(okCallback === undefined) 
      okCallback = () => {
        console.log("The response was okay but nothing was done")
        // throw("The response was okay but nothing was done")
      }
    if(notOkCallback === undefined)
      notOkCallback = () => { 
        console.log("The response was not okay and nothing was done")
        // throw("The response was not okay and nothing was done")
      }

    if (res.ok) {
      okCallback(optionalJsonObject);
    } else {
      notOkCallback(optionalJsonObject);
    }
  }

  function handleResponseWithBody(res, okCallback, notOkCallback) {
    res
      .json()
      .then((json) => {
        console.log(json);
        handleResponse(res, okCallback, notOkCallback, json)
      })
      .catch((err) => {
        throw "There was a problem parsing the response body\n" + err;
      });
  }

  function catchError(err) {
    throw "There was a problem connecting to the server" + err;
  }

  function executeRequest(path, options, okCallback, notOkCallback) {
    fetch(path, options)
      .then((res) => handleResponseWithBody(res, okCallback, notOkCallback))
      .catch(catchError);
  }

  return {
    get: function (path, okCallback, notOkCallback) {
      let options = {
        method: "GET",
        headers,
      };
      executeRequest(path, options, okCallback, notOkCallback);
    },
    post: function (path, obj, okCallback, notOkCallback) {
      let options = {
        method: "POST",
        headers,
        body: JSON.stringify(obj),
      };
      executeRequest(path, options, okCallback, notOkCallback);
    },
    delete: function (path, okCallback, notOkCallback) {
      let options = {
        method: "DELETE",
        headers,
      };
      fetch(path, options)
        .then((res) => handleResponse(res, okCallback, notOkCallback))
        .catch(catchError);
    },
  };
};
