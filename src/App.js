import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';
import RightBlock from './components/RightBlock';
import React from 'react';
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from './components/HomeComponent/images';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      content: '',
      searchContent: '',
      tweets: [
        {
          id: 0,
          authorName: 'Free KZ today',
          authorUsername: '@kz',
          img: KZ_IMG_PATH,
          content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
          replies: 200,
          retweets: 1000,
          likes: 500,
          topic: 'politics'
        },
        {
          id: 1,
          authorName: 'nFactorial',
          authorUsername: '@nfactorial',
          img: NFACTORIAL_IMG_PATH,
          content: 'Data analytics course starts today!',
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: 'education'
        },
        {
          id: 2,
          authorName: 'nFactorial',
          authorUsername: '@nfactorial',
          img: NFACTORIAL_IMG_PATH,
          content: 'Black friday! Успей купить курсы сегодня!',
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: 'education'
        },
      ],
      filteredTweets: [
        {
          id: 0,
          authorName: 'Free KZ today',
          authorUsername: '@kz',
          img: KZ_IMG_PATH,
          content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
          replies: 200,
          retweets: 1000,
          likes: 500,
          topic: 'politics'
        },
        {
          id: 1,
          authorName: 'nFactorial',
          authorUsername: '@nfactorial',
          img: NFACTORIAL_IMG_PATH,
          content: 'Data analytics course starts today!',
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: 'education'
        },
        {
          id: 2,
          authorName: 'nFactorial',
          authorUsername: '@nfactorial',
          img: NFACTORIAL_IMG_PATH,
          content: 'Black friday! Успей купить курсы сегодня!',
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: 'education'
        }
      ],
      searchedTweets: ""
    }
  }

  onChangeTextInput = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  onChangeSearchInput = (e) => {
    this.setState({
      searchContent: e.target.value,
      searchedTweets: this.state.tweets.filter(item => item.content.toLowerCase().includes(e.target.value.toLowerCase())),
    })
  }

  addToTweets = () => {
    const newTweet = {
      id: this.state.tweets.length,
      authorName: 'Aruzhan',
      authorUsername: '@azhaubassar',
      img: PROFILE_IMG_PATH,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0,
      topic: 'blabla'
    }

    this.setState({
      tweets: [...this.state.tweets, newTweet],
      content: ''
    })
  }

  deleteTweet = (id) => {
    // id = 0
    this.setState({
      tweets: this.state.tweets.filter(item => item.id !== id)
    })
  }



  render() {
    return (
      <div className="App d-flex flex-row" >
        <SideMenu />
        <div className='vertical-divider'></div>
        <Home state={this.state} deleteTweet={this.deleteTweet}
          onChangeTextInput={this.onChangeTextInput}
          addToTweets={this.addToTweets}
        />
        <div className='vertical-divider'></div>
        <RightBlock state={this.state} searchTweetsByText={this.searchTweetsByText} onChangeSearchInput={this.onChangeSearchInput} />
      </div>
    );
  }
}

export default App;