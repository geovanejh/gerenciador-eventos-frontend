import axios from "axios";

export const mock = axios.create({
  baseURL: "http://localhost:3001",
});

export const api = axios.create({
  //baseURL: "https://8a5ef201986ae3.lhr.life/",
  baseURL: "http://localhost:5000/",
});
