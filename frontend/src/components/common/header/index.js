import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import styles from './header.module.css';

const header = React.memo((props) => {
    const onRegisterLogin = () => {
        props.history.push('/login');
    };

    return (
        <header className={styles.header}>
            <div>
                <img
                    className={styles.logo}
                    src={logo}
                />
            </div>
            {props.isAuthenticated ? (
                <h3>Hi User</h3>
            ) : (
                    <React.Fragment>
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
                    </React.Fragment>
                )
            }
        </header>
    )
});

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        showLoginButtons: state.appState.showLoginButtons
    };
}

const HeaderWithRouter = withRouter(header)

export default connect(mapStateToProps)(HeaderWithRouter);
