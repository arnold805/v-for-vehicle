import CsrfToken from "./csrfToken";

export const HttpClient = () => {
  let responseOkayCallback = function () {
    throw "Implement Me";
  };

  let responseNotOkayCallback = function () {
    throw "Implement Me";
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-CSRF-Token": CsrfToken(),
  };

  function handleResponse(res) {
    res
      .json()
      .then((json) => {
        console.log(json);
        if (res.ok) {
          responseOkayCallback(json);
        } else {
          responseNotOkayCallback(json);
        }
      })
      .catch((err) => {
        throw("There was a problem parsing the response body\n" + err);
      });
  }

  function handleDeleteResponse(res) {
    if (res.ok) {
      responseOkayCallback();
    } else {
      responseNotOkayCallback();
    }
  }

  function catchError(err) {
    throw("There was a problem connecting to the server" + err);
  }

  function executeRequest(path, options) {
    fetch(path, options).then(handleResponse).catch(catchError);
  }

  return {
    get: function (path, responseOkayCallback, responseNotOkayCallback) {
      this.responseOkayCallback = responseOkayCallback;
      this.responseNotOkayCallback = responseNotOkayCallback;
      let options = {
        method: "GET",
        headers,
      };
      executeRequest(path, options);
    },
    post: function (path, obj, responseOkayCallback, responseNotOkayCallback) {
      this.responseOkayCallback = responseOkayCallback;
      this.responseNotOkayCallback = responseNotOkayCallback;
      let options = {
        method: "GET",
        headers,
        body: JSON.stringify(obj),
      };
      executeRequest(path, options);
    },
    delete: function (path, responseOkayCallback, responseNotOkayCallback) {
      this.responseOkayCallback = responseOkayCallback;
      this.responseNotOkayCallback = responseNotOkayCallback;
      let options = {
        method: "DELETE",
        headers,
      };
      fetch(path, options).then(handleDeleteResponse).catch(catchError);
    },
  };
};
