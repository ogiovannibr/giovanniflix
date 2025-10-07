
// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/top_rated?api_key=fdce0040c6644124caffe33f4a9f9a4e&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;