import React from 'react';



class Map extends React.Component{
  constructor(props){
    super(props);
  }
  

  render(){
    const map_url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}` ;

  
    return(
      <div>
        <img src= {map_url} alt ="map"/>
      </div>
    );
  }
}

export default Map;