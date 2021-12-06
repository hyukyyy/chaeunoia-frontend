import Const from "../../const";

const serverUrl =
  Const.serverProtocol + "://" + Const.serverIp + ":" + Const.serverPort;

const makeUrl = (url, params) => {
  var result = serverUrl + url;
  if (params === null) return result;
  params.forEach((param) => {
    result = util.format(result, param);
  });
  return result;
};

const httpExec = (method, url, data) => {
  return new Promise((resolve, reject) => {
    Axios({
      method: method,
      url: url,
      data: data,
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const httpGet = (url, params, data) => {
  console.log(makeUrl(url, params));
  return httpExec("GET", makeUrl(url, params), data);
};

const httpPut = (url, params, data) => {
  return httpExec("PUT", makeUrl(url, params), data);
};

const httpPost = (url, params, data) => {
  return httpExec("POST", makeUrl(url, params), data);
};

export { httpGet, httpPost, httpPut };

export const httpUrl = {
  login: "/auth/login",
  logout: "/auth/logout",
};
