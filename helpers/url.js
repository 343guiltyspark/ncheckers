import Axios from "axios";

export const url = (method, endPoint, object, callback) => {
  const baseUrl = "http://localhost:8080";

  const get = (url, params, callback) => {
    Axios.get(url, params)
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const post = (url, params, callback) => {
    Axios.post(url, params)
      .then((res) => {
        callback != null ? callback(res) : null;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let url = baseUrl + endPoint;
  switch (method) {
    case (method = "get"):
      get(url, object, callback);
      break;
    case (method = "post"):
      post(url, object, callback);
      break;
    default:
      console.log("Something went wrong! :(");
  }
};
