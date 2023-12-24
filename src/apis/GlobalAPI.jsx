import axios from "axios";

const api_key = "ca506869c8a54ca3bb52b083f297f4c2";
const createAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getListGenres = createAxios.get(`/genres?key=${api_key}`);
const getGames = createAxios.get(`/games?key=${api_key}`)
const getGamesByID = (id) => createAxios.get(`/games?key=${api_key}&genres=${id}`);

export default {
  getListGenres,
  getGames,
  getGamesByID
};
