import React, { Component } from 'react';
import styles from './ReplyButton.module.css';


class ReplyButton extends Component {
    render() {
        return (
            <div >
                <button className={styles.ReplyButton}>Reply</button>
            </div>
        );
    }
}

export default ReplyButton;