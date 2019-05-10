import React from 'react';

class EventBrite extends React.Component{
  
  render(){
    let results = this.props.event.map((item, idx) => (
      <li>
      <a href={item.link}>{item.name}</a>
      <p>Event Date: {item.event_date}</p>
      <p>{item.summary}</p>
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