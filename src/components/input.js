import React, { Component } from 'react';
import styles from './input.module.css';

class input extends Component {
    render() {
        return (
            <div className={styles.header}>
                <img src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} alt="avatar" />
                <input placeholder='Start a discussion'/>
            </div>
        );
    }
}

export default input;