import React from 'react';

class Darksky extends React.Component{
  
  

  render(){
    
    let renderWeather = this.props.weather.map((item, idx) => (
      <li key={idx}>{item}</li>
    ));
    return(
      <div>
        <h2>Weather Results</h2>
        <ul>{renderWeather}</ul>
      </div>
     
    );
  }
}

export default Darksky;