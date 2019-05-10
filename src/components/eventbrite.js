import React from 'react';

class EventBrite extends React.Component{
  
  render(){
    let results = this.props.event.map((item, idx) => (
      <li>
      <a href={item.link}></a>
      <p>Event Date: {this.event_date}</p>
      <p>{this.summary}</p>
    </li>
    ));
    return(
      <React.Fragment>
        <h2>EventBrite Results</h2>
        <ul>{results}</ul>
      </React.Fragment>
     
    );
  }
}

export default EventBrite;