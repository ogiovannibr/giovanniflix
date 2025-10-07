import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

// URL DA API: https://api.themoviedb.org/3/movie/top_rated?api_key=fdce0040c6644124caffe33f4a9f9a4e&language=pt-BR



function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "fdce0040c6644124caffe33f4a9f9a4e",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 18));
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt="Filme title e foto poster" />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            <p>{new Date(filme.release_date).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric"
                            })}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;