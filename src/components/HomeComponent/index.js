import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
// import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from './images';

function Home({ state, addToTweets, onChangeTextInput, deleteTweet }) {

    return (
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home</h5>
            {console.log('HOME', onChangeTextInput)}
            <NewTweet content={state.content} onChangeTextInput={onChangeTextInput} onTweet={addToTweets} />
            <TweetsList tweets={state.searchContent != '' ? state.searchedTweets : state.tweets} deleteTweet={deleteTweet} />
        </div>
    )
}


export default Home;