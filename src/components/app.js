import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';
import superagent from 'superagent';


const URL = "https://citylab09.herokuapp.com";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: {},
      weathers: [],
      eventbrite: [],
      yelp: [],
      movies: []
    };
  }

  handleForm = async (result) => {
    this.setState({ location: result });
    console.log('Location', this.state.location);
    await this.getAPI('weather');
    await this.getAPI('yelp');
    await this.getAPI('events');
    await this.getAPI('movies');
    
  };

  
  getAPI = async (resource) => {
    console.log("Current Loc", this.state.location);
    await superagent.get(`${URL}/${resource}`)
      // .query({data: this.state.location})
      .query( { data: { search_query: this.state.location.search_query, formatted_query: this.state.location.formatted, latitude: this.state.location.latitude, longitude: this.state.location.longitude } })
      .then(result => {
        switch(resource){
          case 'weather': 
            let mod_result= result.body.map(currentWeather => `${currentWeather.time}: ${currentWeather.forecast}` );
            this.setState({weathers: mod_result});
            break;
          case 'events':
            
            this.setState({eventbrite: result.body});
            console.log('Events', result.body);
            break;
          case 'yelp':
            this.setState({yelp: result.body});
            console.log('Yelp', this.state.yelp);
            break;
          case 'movies':
            this.setState({movies: result.body});
            console.log('Movies', result.body);
            break;
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
        <SearchResults weather={this.state.weathers} event={this.state.eventbrite} yelp={this.state.yelp} movies={this.state.movies}  />
      </React.Fragment>
    )
  }
}

export default App;
