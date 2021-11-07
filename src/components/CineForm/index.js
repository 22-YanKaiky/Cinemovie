import React from "react";
import Navbar from "../Navbar";
import "./cineform.css";

export default function CineForm() {
    const typeObj = {
        anime: 1,
        movie: 2,
        serie: 3
    }


    return (
        <>
            <Navbar />

            <form>
                <div className="line-one">
                    <label className="video-name">
                        Nome do Video <br />
                        <input placeholder="Nome" />
                    </label>

                    <label className="video">
                        Video <br />
                        <select>
                            <option disabled>Estilo</option>
                            <option name="anime" value={typeObj.anime}>Anime</option>
                            <option name="movie" value={typeObj.movie}>Filme</option>
                            <option name="serie" value={typeObj.serie}>Série</option>
                        </select>
                    </label>
                </div>
            </form>
        </>
    )
}