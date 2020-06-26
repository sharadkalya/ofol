import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
            rest.isAuthenticated ? (
                children
            ) :
                (
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

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    };
};

export default connect(mapStateToProps)(PrivateRoute);
