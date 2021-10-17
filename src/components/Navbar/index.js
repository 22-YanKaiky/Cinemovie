import React from "react";
import Cinemovie from "../../icons/cinemovie.png";
import "./navbar.css";

export default function Navbar(nav) {
    
    return (
        <div className="navbar">
            <header>
                <img src={Cinemovie} al="Cinemovie"/>
            </header>

            <section className="tool-bar">
                <button>Animes</button>
                <button>Filmes</button>
                <button>Séries</button>         

                <img src={nav.src} alt="Avatar"/>
            </section>
        </div>
    )
}