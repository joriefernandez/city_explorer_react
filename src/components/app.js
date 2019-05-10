import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';
import superagent from 'superagent';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: {},
      weathers: []
    };
  }

  handleForm = (result) => {
    this.setState({ location: result });
    this.getWeatherAPI();
    
  };

  getWeatherAPI = async () => {
    await superagent.get('https://intense-earth-74704.herokuapp.com/weather').query({data: this.state.location})
      .then(result => {
        
        let mod_weathers = result.body.map(currentWeather => `${currentWeather.time}: ${currentWeather.forecast}` );
        this.setState({weathers: mod_weathers});
        
      }); 
  };


  //render
  render(){
    return(
      <React.Fragment>
        <Header />
        <SearchForm handleForm = {this.handleForm}/>
        <Map latitude={this.state.location.latitude} longitude={this.state.location.longitude} />
        <SearchResults weather={this.state.weathers}/>
      </React.Fragment>
    )
  }
}

export default App;
