import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Animes from "./pages/Animes";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Avatar from "./icons/avatar.jpg"
import Navbar from "./components/Navbar";

export default function Routes() {
    return (
        <Router>
            <Navbar src={Avatar}/>

            <Link to="/">Home</Link>
            <Link to="/animes">Animes</Link>
            <Link to="/movies">Filmes</Link>
            <Link to="/series">Séries</Link>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/animes" component={Animes}/>
                <Route path="/movies" component={Movies}/>
                <Route path="/series" component={Series}/>
            </Switch>
        </Router>                                                                                        
    )
}