import React from 'react';

class Darksky extends React.Component{
  
  

  render(){
    
    let renderWeather = this.props.weather.map((item, idx) => (
      <li key={idx}>{item}</li>
    ));
    return(
      <React.Fragment>
        <h2>Weather Results</h2>
        <ul>{renderWeather}</ul>
      </React.Fragment>
     
    );
  }
}

export default Darksky;