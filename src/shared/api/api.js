import axios from "axios";
import {getCookie} from "../helpers/helpers";

export const $api = axios.create({
  baseURL: `https://api.favorit-parts.ru/hs`
})

$api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: getCookie('userKey'),
  };
  
  return config;
});
