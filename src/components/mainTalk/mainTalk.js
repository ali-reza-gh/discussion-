import React, { Component } from 'react';
import styles from './mainTalk.module.css';
import ReplyButton from '../ReplyButton/ReplyButton';

class MainTalk extends Component {

    render() {
        return (
            <div className={styles.main}>

                <div className={styles.mainTalk}>

                    <div className={styles.avatar}>

                        {this.props.avatar ? <img src={this.props.avatar} alt="avatar" /> : <img src="https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg" alt="avatar" />}
                    </div>

                    <div className={styles.para}>

                        <div className={styles.name}>

                            <h3>{this.props.name}</h3>

                            <span>a minute ago</span>

                        </div>

                        <p>{this.props.text}</p>

                    </div>

                </div>

                <div className={styles.Like}>

                    {this.props.iLikedIt ? <button className={styles.likedButton}><img src="https://img.icons8.com/fluency-systems-regular/48/null/thumb-up.png"/> {this.props.Likes}</button>
                        : <button className={styles.likeButton}><img src="https://img.icons8.com/fluency-systems-regular/48/null/thumb-up.png"/>{this.props.Likes}</button>}

                    {this.props.isRepliable ? <div className={styles.reply}>
                        <ReplyButton />
                    </div> : <></>}
                </div>
                {this.props.children}

            </div>
        );
    }
}

export default MainTalk;
{/* <div className={styles.reply}>
    
</div> */}