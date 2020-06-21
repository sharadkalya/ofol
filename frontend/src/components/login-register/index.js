import React, { useState } from 'react';
import Register from './register';
import Login from './login';
import styles from './login.module.css';
import { Tabs, Tab } from 'react-bootstrap';

const LoginRegister = () => {
    const [activeKey, setActiveKey] = useState('login');

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>
                    <Tab eventKey="login" title="Login" className={styles.tab}>
                        <Login />
                    </Tab>
                    <Tab eventKey="register" title="Register" className={styles.tab}>
                        <Register />
                    </Tab>
                </Tabs>
            </div>
        </div >
    );
}

export default LoginRegister;
