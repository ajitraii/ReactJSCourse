import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const getPost = (endpoint) => {
  return api.get(endpoint);
};
export const addPost = (endpoint, payload) => {
  return api.post(endpoint, payload);
};
