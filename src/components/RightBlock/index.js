import React from "react";
import Search from './Search';
import Home from '../HomeComponent';


class RightBlock extends React.Component {




    render() {

        return (
            <div>
                {/* <Search searchTweetsByText={Home.searchFilterByText} onChangeTextInput={Home.onChangeTextInput} content={Home.state.content} /> */}
                <Search />
                {console.log(Home.searchTweetsByText)}
            </div>
        )

    }


}

export default RightBlock