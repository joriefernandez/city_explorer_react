import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';
import superagent from 'superagent';

const URL = "https://intense-earth-74704.herokuapp.com";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: {},
      weathers: [],
      events: [],
      yelp: [],
      movies: []
    };
  }

  handleForm = async (result) => {
    this.setState({ location: result });
    // await this.getAPI('weather');
    // await this.getAPI('yelp');
    await this.getMovieAPI();
    // await this.getAPI('events');
    
  };

  getMovieAPI = async () => {
    await superagent.get(`${URL}/movies`)
      .then(result => {
        
            this.setState({movies: result.body});
            console.log('Movies', result.body);
           
      
      }); 
  };



  getAPI = async (resource) => {
    await superagent.get(`${URL}/${resource}`).query({data: this.state.location})
      .then(result => {
        switch(resource){
          case 'weather': 
            let mod_result= result.body.map(currentWeather => `${currentWeather.time}: ${currentWeather.forecast}` );
            this.setState({weathers: mod_result});
            break;
          case 'events':
            
            this.setState({events: result.body});
            console.log('Events', result.body);
            break;
          case 'yelp':
            this.setState({yelp: result.body});
            console.log('Yelp', this.state.yelp);
            break;
          // case 'movies':
          //   this.setState({movies: result.body});
          //   console.log('Movies', result.body);
          //   break;
        }
        
      
      }); 
  };



  //render
  render(){
    return(
      <React.Fragment>
        <Header />
        <SearchForm handleForm = {this.handleForm}/>
        <Map latitude={this.state.location.latitude} longitude={this.state.location.longitude} />
        <SearchResults weather={this.state.weathers} event={this.state.events} yelp={this.state.yelp}   />
      </React.Fragment>
    )
  }
}

export default App;
