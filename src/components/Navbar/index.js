import React from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import Cinemovie from "../../images/cinemovie.png";
import Avatar from "../../images/avatar.jpg";
import Home from "../../pages/Home";
import Animes from "../../pages/Animes";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import Users from "../../pages/Users";
// import { ImSearch } from "react-icons/im";
import "./navbar.css";

export default function Navbar() {
  return (
      <nav>
        <header>
          <NavLink className="links" exact to="/">
            <img src={Cinemovie} alt="Cinemovie"/>
          </NavLink>
        </header>

        {/* <div className="input-search">
          <label>
            <input type="text" placeholder="Search"/>

            <button type="submit">
              <ImSearch />
            </button>
          </label>
        </div> */}
        
        <section className="tool-bar">
          <NavLink className="links" to="/animes">Animes</NavLink>
          <NavLink className="links" to="/movies">Filmes</NavLink>
          <NavLink className="links" to="/series">Séries</NavLink>

          <NavLink className="links" to="/users">
            <img className="avatar" src={Avatar} alt="Avatar" />
          </NavLink>
        </section>
        
          <Route path="/" component={Home} />
          <Route path="/animes" component={Animes} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/users" component={Users} />
      </nav>
  )
}
