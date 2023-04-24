import React from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import CatchError from '../components/catcherror';
import { robots } from '../components/robots';
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
            <h1><br/></h1>
            <Scroll>
            <CatchError>
            <CardList robots={filteredRobots} />
            </CatchError>
            </Scroll>
            </div>
            );
        }
    }

    export default App;