import React, { Component } from 'react';
import styles from './App.css'
import ss from './components/mainTalk/mainTalk.module.css'
import Input from './components/input';
import MainTalk from './components/mainTalk/mainTalk';
import ReplyInput from './components/ReplyInput/ReplyInput';
import { discussions } from './components/data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { replyButton: [true, false, false] }
  }

  render() {
    return (
      <div className='app'>
        <Input />
        {discussions.map((_, i) => {
          return (
            <>
              <MainTalk name={_.user.name} avatar={_.user.avatar} Likes={_.likes} text={_.text} isRepliable={true} iLikedIt={_.iLikedIt} key={i}>
                {_.replies.map((item, index) =>
                  <div className={ss.reply}>
                    <MainTalk name={item.user.name} avatar={item.user.avatar} text={item.text} Likes={item.likes} iLikedIt={item.iLikedIt} key={i}></MainTalk>
                  </div>
                )}
              </MainTalk>
              {this.state.replyButton[i] ? <div className={ss.reply}>
                <ReplyInput />
              </div> : <></>}
            </>)
        }
        )}
      </div>
    );
  }
}

export default App;