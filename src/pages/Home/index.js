import React from "react";
import Home from "../../components/Home";

export default function PageHome() {
    return (
        <>
            <Home />

            <div className="card-index">
                <Navbar src={Avatar} />
                <div className="card-img">
                    <img src={Cinemovie} alt="Cinemovie" />
                </div>

                <div className="div-cards">
                    <input type="button" value="Lançamentos" onClick={() => console.log("Lançamentos")} />
                    <input type="button" value="Animes" onClick={() => console.log("Animes")} />
                    <input type="button" value="Filmes" onClick={() => console.log("Filmes")} />
                    <input type="button" value="Séries" onClick={() => console.log("Séries")} />
                </div>

                <div className="div-button">
                    <button onClick={() => console.log("Sugestões")}>Sugestões</button>
                </div>
            </div>
        </>
    )
}