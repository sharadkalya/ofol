import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
// import PrivateRoute from './private-route';
import Home from '../components/home';
import LoginRegister from '../components/login-register';
import Header from '../components/common/header';
import {existingUserLogin} from '../action-creators/user';

const Routes = ({ isNotAuthenticated, existingUserLogin: login }) => {
    useEffect(() => {
        login();
    }, []);

    return (
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
                {isNotAuthenticated && (
                    <Route exact path="/login">
                        <LoginRegister />
                    </Route>
                )}
            </Switch>
        </Router>
    )
};

const mapStateToProps = (state) => {
    return {
        isNotAuthenticated: !state.user.isAuthenticated
    };
};

export default connect(mapStateToProps, {existingUserLogin})(Routes);
