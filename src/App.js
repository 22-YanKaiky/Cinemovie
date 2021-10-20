import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageHome from "./pages/Home";
import Animes from "./pages/Animes";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Users from "./pages/Users";
import Cinemovie from "./icons/cinemovie.png";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="card-index">
        <div className="card-img">
          <Link className="links" exact to="/">
            <img src={Cinemovie} alt="Cinemovie" />
          </Link>
        </div>

        <div className="div-cards">
          <Link className="buttons-links" to="/animes">Animes</Link>
          <Link className="buttons-links" to="/movies">Filmes</Link>
          <Link className="buttons-links" to="/series">Séries</Link>
        </div>

        <div className="div-button">
          <button onClick={() => console.log("Sugestões")}>Sugestões</button>
        </div>
      </div>

      <Switch>
        <Route path="/browse" component={PageHome} />
        <Route path="/animes" component={Animes} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  )
}