import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: "https://websitee-practice.herokuapp.com",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;

export { URL };
