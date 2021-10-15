import React from "react";
import "./movies.css";

export default function Movies(card) {

    return (
        <div className="card">
            <>
                <header className="card-folder">
                    <img src={card.src} alt={card.name} />
                </header>

                <section className="card-information">
                    <h1>{card.name}</h1>
                    <p>Ano: <strong>{card.year}</strong></p>
                    <p>{card.synopsis}</p>
                </section>

                <section className="card-trailer">
                    <iframe width="520" height="350" src={card.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
            </>
        </div>
    )
}