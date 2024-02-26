import axios from "axios";

export const baseURL = "http://localhost:3000/";

const HttpService = axios.create({
  baseURL,
  withCredentials: true,
});

export { HttpService };
