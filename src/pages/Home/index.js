import React from "react";
import { Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { RiPlayList2Fill } from "react-icons/ri";
import { FiAirplay } from "react-icons/fi";
import Cinemovie from "../../images/cinemovie.png";
import "./home.css";

export default function Home() {
    return (
        <div className="container">
            <div className="container-index">
                <div className="container-img">
                    <Link exact to="/">
                        <img src={Cinemovie} alt="Cinemovie" />
                    </Link>
                </div>

                <div className="div-container-cards">
                    <Link className="buttons-links" to="/animes">
                        <FiAirplay />&nbsp; <span>Animes</span>
                    </Link>

                    <Link className="buttons-links" to="/movies">
                        <BiMoviePlay />&nbsp; <span>Filmes</span>
                    </Link>

                    <Link className="buttons-links" to="/series">
                        <RiPlayList2Fill />&nbsp; <span>Séries</span>
                    </Link>

                </div>

                <div className="button-suggestions">
                    <a href='mailto:yankaikys@gmail.com' rel="noreferrer" target="_blank">
                        <button>Sugestões</button>
                    </a>
                </div>
            </div>
        </div>
    )
}