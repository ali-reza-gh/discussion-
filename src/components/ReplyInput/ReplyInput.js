import React, { Component } from 'react';
import styles from './ReplyInput.module.css'

class ReplyInput extends Component {
    render() {
        return (
            <div className={styles.input}>
                <img src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} alt="avatar" />
                <input placeholder='Reply'/>
            </div>
        );
    }
}

export default ReplyInput;