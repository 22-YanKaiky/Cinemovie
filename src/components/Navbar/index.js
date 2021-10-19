import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Cinemovie from "../../icons/cinemovie.png";
import Avatar from "../../icons/avatar.jpg";
import PageHome from "../../pages/Home";
import Animes from "../../pages/Animes";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import Users from "../../pages/Users";
import "./navbar.css";

export default function Navbar() {
  return (
      <nav>
        <header>
          <Link className="links" exact to="/">
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
        
          <Route path="/" component={PageHome} />
          <Route path="/animes" component={Animes} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/users" component={Users} />
      </nav>

  )
}
