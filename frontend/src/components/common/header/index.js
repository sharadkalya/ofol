import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { logout } from '../../../action-creators/user';
import logo from '../../../assets/images/logo.png';
import styles from './header.module.css';

const Header = React.memo((props) => {
    const onRegisterLogin = () => {
        props.history.push('/login');
    };

    const onLogout = () => {
        props.logout();
    };

    return (
        <header className={styles.header}>
            <div>
                <img
                    alt='ofol'
                    className={styles.logo}
                    src={logo}
                />
            </div>
            {props.isAuthenticated ? (
                <div>
                    <h3>Hi User</h3>
                    <Button
                        onClick={onLogout}
                        variant='link'
                    >
                        Logout
                    </Button>
                </div>
            )
                :
                (
                    <>
                        {!props.history.location.pathname.includes('login') && (
                            <div className={styles.buttonWrapper}>
                                <Button
                                    onClick={onRegisterLogin}
                                    variant='link'
                                >
                                    Login / Register
                                </Button>
                            </div>
                        )}
                    </>
                )
            }
        </header>
    );
});

Header.propTypes = {
    history: PropTypes.objectOf(Object).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    };
};

const HeaderWithRouter = withRouter(Header);

export default connect(mapStateToProps, {
    logout
})(HeaderWithRouter);
