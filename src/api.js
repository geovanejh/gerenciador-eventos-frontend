import axios from "axios";

export const mock = axios.create({
  baseURL: "http://localhost:3001",
});

export const api = axios.create({
  baseURL: "https://be05-201-37-71-89.ngrok-free.app",
});
