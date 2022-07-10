import CsrfToken from "./csrfToken";

export function HttpClient(path, method, obj, responseOkayCallback, responseNotOkayCallback) {
    fetch(path, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-Token": CsrfToken(),
        },
        body: JSON.stringify(obj),
      })
      .then((res) => {
        res.json().then((json) => {
            console.log(json)
          if (res.ok) {
            responseOkayCallback(json);
          } else {
            responseNotOkayCallback(json);
          }
        })
        .catch((err) => {
          console.log("There was a problem parsing the response body" + err)
          console.log("body: " + res.body)
        });
      })
      .catch((err) => {
        console.log("There was a problem connecting to the server" + err)
      }); 
}