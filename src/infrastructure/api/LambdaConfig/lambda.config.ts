import axios, { AxiosInstance } from "axios";
import { url_modules } from "../../config/url_modules";
import { errorInterceptor, responseInterceptor } from "./lambda.helper";

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL, timeout: 20000 });

  instance.interceptors.response.use(responseInterceptor, errorInterceptor);

  instance.interceptors.request.use((config) => {
    const nuevoToken = localStorage.getItem("user");
    if (nuevoToken && config.headers) {
      config.headers.Authorization = nuevoToken;
    }
    return config;
  }, Promise.reject);

  return instance;
};

export const clients = {
  BASE: createAxiosInstance(url_modules.API_BASE_URL) as AxiosInstance,
};
