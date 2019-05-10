import React from 'react';

class EventBrite extends React.Component{
  
  render(){
    console.log('Events', this.props.event);
    let results = this.props.event.map((item, idx) => (
      <li key={idx}>
        {item}
      </li>
    ));
    return(
      <React.Fragment>
        <ul>{results}</ul>
      </React.Fragment>
     
    );
  }
}

export default EventBrite;