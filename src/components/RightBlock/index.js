import React from "react";
// import { useState } from 'react';
import Search from './Search';


function RightBlock({ state, searchTweetsByText, onChangeSearchInput }) {
    // const [title, setTitle] = useState(state.content);

    return (
        <div className='d-flex flex-column'>
            <Search searchTweetsByText={searchTweetsByText} onChangeSearchInput={onChangeSearchInput} searchContent={state.searchContent} />
        </div>
    )

}




export default RightBlock