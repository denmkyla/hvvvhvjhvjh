import axios from "axios";

const $api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export default $api;
