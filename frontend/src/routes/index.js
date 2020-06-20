import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PrivateRoute from './private-route';
import Home from '../home';

const routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/dashboard">
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default routes;
