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
      <div>
        <h2>EventBrite Results</h2>
        <ul>{results}</ul>
      </div>
     
    );
  }
}

export default EventBrite;