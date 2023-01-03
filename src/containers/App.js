import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

class App  extends Component {
    constructor(props){
        super(props)
        // Adding a state (an object) which describes the app and enables us to have interactive components.
        this.state = {
            // Mainly our App contains two components Robots and Search Bar
            robots: [],
            searchField: ""
        }
    }

    // Fetching the user details using an API call and rendering the updates.
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState( {robots : users }))
    }

    onSearchHandle = (event) => {
       this.setState( {searchField : event.target.value})
    }

    render(){
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
            <div className='tc'>
                <div>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchHandle} />
                </div>
                <Scroll>
                    <CardList robots = {filteredRobots} />
                </Scroll>
            </div>
        );
    } 
}

export default App;