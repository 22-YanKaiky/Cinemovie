import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Animes from "../../pages/Animes";
import Cinemovie from "../../icons/cinemovie.png";
import Avatar from "../../icons/avatar.jpg";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import "./home.css";

export default function Home() {
  return (
    <Router>
      <nav>
        <header>
          <img src={Cinemovie} alt="Cinemovie" />
        </header>
        {/* <Link to="/">Home</Link> */}
        <section className="tool-bar">
          <Link className="links" exact to="/animes">Animes</Link>
          <Link className="links" exact to="/movies">Filmes</Link>
          <Link className="links" exact to="/series">Séries</Link>

          <img src={Avatar} alt="Avatar" />
        </section>
      </nav>

      <div className="card-index">
        {/* <div className="card-img">
          <img src={Cinemovie} alt="Cinemovie" />
        </div> */}

        <div className="div-cards">
          <Link className="buttons-links" exact to="/animes">Animes</Link>
          <Link className="buttons-links" exact to="/movies">Filmes</Link>
          <Link className="buttons-links" exact to="/series">Séries</Link>
        </div>

        <div className="div-button">
          <button onClick={() => console.log("Sugestões")}>Sugestões</button>
        </div>
      </div>

      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/animes" component={Animes} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
      </Switch>
    </Router>
  )
}
