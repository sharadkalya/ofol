import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './loaders.module.css';

const FullScreenLoader = React.memo((props) => {
    return (
        <React.Fragment>
            {props.isVisible && (
                <div className={styles.fullScreenLoader}>
                    <div className={styles.fullScreenLoaderContent}>
                        <Spinner
                            animation='grow'
                            variant='info'
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
});

export default FullScreenLoader;
