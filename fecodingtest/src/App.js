import React, { Component } from 'react';

//import the components
import RestaurantsContainer from './components/RestaurantsContainer';

class App extends Component {
  

  /*

  getRestaurants = async (e) =>{
    e.preventDefault();

    const api_call = await fetch('http://localhost:3000/api/list');
    
    const data = await api_call.json();
    this.setState({restaurants: data})
    console.log(this.state)
  }*/

  render() {
    return (
      <div className="App">
          <RestaurantsContainer/>
      </div>
    );
  }
}

export default App;
