import React from 'react';
import Yelp from '../components/yelp.js';
import Darksky from '../components/darksky.js';
import MovieDB from '../components/moviedb.js';
import EventBrite from '../components/eventbrite.js';

class SearchResults extends React.Component{
  
  

  render(){
    return(
      <section>
        <Darksky weather={this.props.weather} />
        <EventBrite event={this.props.event} />
        <Yelp yelp={this.props.yelp} />
        <MovieDB movies={this.props.movies} />
      </section>
     
    );
  }
}

export default SearchResults;

