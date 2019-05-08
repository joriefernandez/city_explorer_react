import React from 'react';
import Search from './search.js';
import Map from './map.js';
import Result from './result.js';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
     
    );
  }
}

export default Main;

