import { setup } from "axios-cache-adapter";

const api = setup({
  baseURL: "https://www.thesportsdb.com/api/v1/json/3/",
  headers: {
    "Content-Type": "application/json",
  },
  cache: {
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
  },
});

export default api;
