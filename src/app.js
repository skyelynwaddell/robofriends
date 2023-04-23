import React from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import {robots} from './robots';

const App = () =>{
    return(
    <div>
    <h1 style={{
        fontSize:50
    }}
    >RoboFriends</h1>
    <SearchBox />
    <CardList robots={robots}/>
    </div>
    );
}

export default App;