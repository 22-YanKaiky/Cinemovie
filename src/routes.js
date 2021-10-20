import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animes from "./pages/Animes";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/animes" component={Animes}/>
                <Route path="/movies" component={Movies}/>
                <Route path="/series" component={Series}/>
            </Switch>
        </Router>                                                                                        
    )
}