import React, { useState } from 'react';
import Register from './register';
import Login from './login';
import styles from './login.module.css';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../action-creators/user';
import { FullScreenLoader } from '../common/loaders';

const LoginRegister = (props) => {
    const [activeKey, setActiveKey] = useState('login');

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>
                    <Tab eventKey="login" title="Login" className={styles.tab}>
                        <Login
                            onLogin={props.loginUser}
                        />
                    </Tab>
                    <Tab eventKey="register" title="Register" className={styles.tab}>
                        <Register
                            onRegister={props.registerUser}
                        />
                    </Tab>
                </Tabs>
            </div>
            <FullScreenLoader isVisible={props.fetchingUser} />
        </div >
    );
}


const mapStateToProps = (state) => {
    return {
        fetchingUser: state.user.fetchingUser,
        error: state.user.error,
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, {
    loginUser,
    registerUser
})(LoginRegister);
