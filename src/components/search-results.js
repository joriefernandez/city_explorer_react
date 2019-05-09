import React from 'react';
import Yelp from '../components/yelp.js';
import Darksky from '../components/darksky.js';
import MovieDB from '../components/moviedb.js';
import EventBrite from '../components/eventbrite.js';

class SearchResults extends React.Component{
  
  

  render(){
    return(
      <React.Fragment>
        <Darksky lat={this.props.latitude}  longitude={this.props.longitude} />
        <EventBrite lat={this.props.latitude}  longitude={this.props.longitude} />
        <Yelp lat={this.props.latitude}  longitude={this.props.longitude} />
        <MovieDB lat={this.props.latitude}  longitude={this.props.longitude} />
      </React.Fragment>
     
    );
  }
}

export default SearchResults;

