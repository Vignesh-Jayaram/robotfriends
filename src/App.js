import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App  extends Component {
    constructor(){
        super()
        // Adding a state (an object) which describes the app and enables us to have interactive components.
        this.state = {
            // Mainly our App contains two components Robots and Search Bar
            robots: robots,
            searchField: ""
        }
    }

    onSearchHandle = (event) => {
       this.setState( {searchField : event.target.value})
    }


    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return(
            <div className='tc'>
                <div>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchHandle} />
                </div>
                <CardList robots = {filteredRobots} />
            </div>
        );

    } 
}

export default App;