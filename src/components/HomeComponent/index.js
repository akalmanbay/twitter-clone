import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
// import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from './images';

function Home({ state }) {

    return (
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home</h5>
            <NewTweet content={state.content} onChangeTextInput={state.onChangeTextInput} onTweet={state.addToTweets} />
            {/* <div>
                    <button onClick={()=>this.filterTweetsByTopic('politics')}>{`Politics ${this.state.count}`}</button>
                    <button onClick={()=>this.filterTweetsByTopic('education')}>Education</button>
                    <button onClick={()=>this.filterTweetsByTopic('blabla')}>Blabla</button>
                </div> */}
            <TweetsList tweets={state.tweets} deleteTweet={state.deleteTweet} />
        </div>
    )
}


export default Home;