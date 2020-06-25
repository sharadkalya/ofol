import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { loginUser, registerUser } from '../../action-creators/user';
import { FullScreenLoader } from '../common/loaders';
import Register from './register';
import Login from './login';
import styles from './login.module.css';

const LoginRegister = (props) => {
    const [activeKey, setActiveKey] = useState('login');
    const { history, loginUser: login, fetchingUser, registerUser: register, isAuthenticated } = props;
    console.log('isAuthenticated', isAuthenticated);

    return isAuthenticated ? (
        <Redirect
            to={{
                pathname: '/'
            }}
        />
    ) : (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>
                        <Tab eventKey="login" title="Login" className={styles.tab}>
                            <Login
                                history={history}
                                onLogin={login}
                            />
                        </Tab>
                        <Tab eventKey="register" title="Register" className={styles.tab}>
                            <Register
                                history={history}
                                onRegister={register}
                            />
                        </Tab>
                    </Tabs>
                </div>
                <FullScreenLoader isVisible={fetchingUser} />
            </div>
        );
};

const mapStateToProps = (state) => {
    return {
        error: state.user.error,
        fetchingUser: state.user.fetchingUser,
        isAuthenticated: state.user.isAuthenticated,
        userData: state.user.userData,
    };
};

const loginRegisterWithRouter = withRouter(LoginRegister);

export default connect(mapStateToProps, {
    loginUser,
    registerUser,
})(loginRegisterWithRouter);
