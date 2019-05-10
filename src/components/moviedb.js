import React from 'react';

class MovieDB extends React.Component{
  
  render(){
    let results = this.props.movies((item, idx) => (
      <li>
        <p><span>{item.title}</span> was relased on { item.released_on }. Out of { item.total_votes } total votes, {item.title} has an    average vote of {item.average_votes} and a popularity score of { item.popularity }.</p>
        <img src={item.image_url} />
        <p>{item.overview}</p>
    </li>
    ));
    return(
      <React.Fragment>
        <h2>MovieDB Results</h2>
        <ul>{results}</ul>
      </React.Fragment>
     
    );
  }
}

export default MovieDB;