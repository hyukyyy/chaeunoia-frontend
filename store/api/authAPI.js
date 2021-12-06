import { httpPost, httpUrl } from ".";

export const login = (formData) => {
  httpPost(httpUrl.login, [], formData);
};
