import React from "react";
import "./animes.css";

export default function Animes(card) {
    function Season() {
        let season;
        if (card.seasons !== 1) {
            season = "Temporadas"
        } else {
            season = "Temporada"
        }

        return `${card.seasons} ${season}` 
    }

    return (
        <div className="card">
            <header className="card-folder">
                <img src={card.src} alt={card.name} />
            </header>

            <section className="card-information">
                <h1>{card.name}</h1>
                <p><strong>Ano: </strong>{card.year}</p>
                <p><strong>Gênero: </strong>{card.genre} ‧ {Season()}</p>
                <p><strong>Episódios: </strong>{card.episodes}</p>
                <p>{card.synopsis}</p>
            </section>

            <section className="card-trailer">
                <iframe width="520" height="350" src={card.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </div>
    )
}