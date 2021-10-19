import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cinemovie from "../../icons/cinemovie.png";
import Avatar from "../../icons/avatar.jpg";
import PageHome from "../../pages/Home";
import Animes from "../../pages/Animes";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import Users from "../../pages/Users";
import "./home.css";

export default function Home() {
  return (
    <Router>
      <nav>
        <header>
          <Link className="links" exact to="/browse">
            <img src={Cinemovie} alt="Cinemovie"/>
          </Link>
        </header>
        <section className="tool-bar">
          <Link className="links" exact to="/animes">Animes</Link>
          <Link className="links" exact to="/movies">Filmes</Link>
          <Link className="links" exact to="/series">Séries</Link>

          <Link className="links" exact to="/users">
            <img className="avatar" src={Avatar} alt="Avatar" />
          </Link>
        </section>
      </nav>

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
