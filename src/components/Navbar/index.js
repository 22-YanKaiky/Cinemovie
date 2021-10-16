import React from "react";
import Cinemovie from "../../icons/cinemovie.png";
import "./navbar.css";

export default function Navbar() {
    
    return (
        <div>
            <header>
                <img src={Cinemovie} al="Cinemovie"/>
            </header>

            <section>
                <p>Animes</p>                
                <p>Filmes</p>                
                <p>Séries</p>                
            </section>
        </div>
    )
}