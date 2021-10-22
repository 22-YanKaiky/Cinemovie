import React from "react";
import { Link } from "react-router-dom";
import Cinemovie from "../../images/cinemovie.png";
import "./home.css";

export default function Home() {
    return (
        <div className="container">
            <div className="container-index">
                <div className="container-img">
                    <Link className="buttons-links" exact to="/">
                        <img src={Cinemovie} alt="Cinemovie" />
                    </Link>
                </div>

                <div className="div-container-cards">
                    <Link className="buttons-links" to="/animes">Animes</Link>
                    <Link className="buttons-links" to="/movies">Filmes</Link>
                    <Link className="buttons-links" to="/series">Séries</Link>
                </div>

                <div className="button-suggestions">
                    <button onClick={() => console.log("Sugestões")}>Sugestões</button>
                </div>
            </div>
        </div>
    )
}