import React from "react";
import { Link } from "react-router-dom";
import Cinemovie from "../../icons/cinemovie.png";

export default function PageHome() {
    return (
        <div className="card-index">
            <div className="card-img">
                <img src={Cinemovie} alt="Cinemovie" />
            </div>

            <div className="div-cards">
                <Link className="buttons-links" exact to="/animes">Animes</Link>
                <Link className="buttons-links" exact to="/movies">Filmes</Link>
                <Link className="buttons-links" exact to="/series">Séries</Link>
            </div>

            <div className="div-button">
                <button onClick={() => console.log("Sugestões")}>Sugestões</button>
            </div>
        </div>
    )
}