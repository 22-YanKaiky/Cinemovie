import React from "react";
import "./series.css";

export default function Series(card) {
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
                <a className="link" href={card.link}>
                    <img src={card.src} alt={card.name} />
                </a>
            </header>

            <section className="card-information">
                <a className="link" href={card.link}>
                    <h1>{card.name}</h1>
                </a>
                <p><strong>Ano: </strong>{card.year}</p>
                <p><strong>Gênero: </strong>{card.genre} ‧ {Season()}</p>
                <p><strong>Episódios: </strong>{card.episodes}</p>
                <p><strong>Direção: </strong>{card.direction}</p>
                <p className="synopsis"><strong>Sinopse: </strong>{card.synopsis}</p>
            </section>

            <section className="card-trailer">
                <iframe width="520" height="350" src={card.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </div>
    )
}