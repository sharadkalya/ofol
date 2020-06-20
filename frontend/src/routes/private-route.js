import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
        rest.isAuthenticated ? (
                children
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
        }
    />
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
};

export default connect(mapStateToProps)(PrivateRoute);
