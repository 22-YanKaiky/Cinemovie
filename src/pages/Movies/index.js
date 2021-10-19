import React, { useState, useEffect } from "react";
import MOVIESAPI from "../../services/MoviesAPI";
import Movies from "../../components/Movies";
import Navbar from "../../components/Navbar";
import axios from "axios";

export default function PageMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function Movies() {
            let results = await axios.get(MOVIESAPI)
            setMovies(results.data)
        }

        Movies()
    }, []);

    return (
        <>
            <Navbar />

            <div>
                {movies.map((movie) => (
                    <Movies
                        name={movie.name}
                        src={movie.folder}
                        genre={movie.genre}
                        time={movie.time}
                        year={movie.year}
                        direction={movie.direction}
                        synopsis={movie.synopsis}
                        trailer={movie.trailer}
                    />
                ))}
            </div>
        </>
    )
}