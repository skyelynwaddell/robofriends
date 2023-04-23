import React from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import { robots } from './robots';
import './app.css';

class App extends React.Component {
        constructor(){
            super()
            this.state={
                robots: robots,
                searchfield: '',   
            }
        }

        OnSearchChange = (event) => {
            this.setState({searchfield: event.target.value})
        }
        render(){
            const filteredRobots = this.state.robots.filter(robots =>{
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            return (
            <div>
            <h1 style={{
                fontSize: 100
            }}
            >RoboFriends</h1>
            <SearchBox searchChange={this.OnSearchChange}/>
            <CardList robots={filteredRobots} />
            </div>
            );
        }
    }

    export default App;