import React from "react";
import { Link } from "react-router-dom";
import Cinemovie from "../../icons/cinemovie.png";
import "./pagehome.css";

export default function Home() {
    return (
        <div className="card-index">
            <div className="card-img">
                <Link className="buttons-links" exact to="/">
                    <img src={Cinemovie} alt="Cinemovie" />
                </Link>
            </div>

            <div className="div-cards">
                <Link className="buttons-links" to="/animes">Animes</Link>
                <Link className="buttons-links" to="/movies">Filmes</Link>
                <Link className="buttons-links" to="/series">Séries</Link>
            </div>

            <div className="div-button">
                <button onClick={() => console.log("Sugestões")}>Sugestões</button>
            </div>
        </div>

    )
}