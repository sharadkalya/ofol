import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import PrivateRoute from './private-route';
import Home from '../components/home';
import LoginRegister from '../components/login-register';
import Header from '../components/common/header';

const routes = () => (
    <Router>
        <Header />
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
            <Route exact path="/login">
                <LoginRegister />
            </Route>
        </Switch>
    </Router>
);

export default routes;
