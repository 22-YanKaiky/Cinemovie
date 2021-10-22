import React, { useState, useEffect } from "react";
import ANIMESAPI from "../../services/AnimesAPI";
import Animes from "../../components/Animes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

export default function PageAnimes() {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        async function Animes() {
            let results = await axios.get(ANIMESAPI)
            setAnimes(results.data)
        }

        Animes()
    }, []);

    return (
        <>
            <Navbar />
            
            <div>
                {animes.map((anime) => (
                    <Animes
                        name={anime.name}
                        src={anime.folder}
                        year={anime.year}
                        genre={anime.genre}
                        seasons={anime.seasons}
                        episodes={anime.episodes}
                        direction={anime.direction}
                        synopsis={anime.synopsis}
                        trailer={anime.trailer}
                    />
                ))}
            </div>

            <Footer />
        </>
    )
}