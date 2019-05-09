import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js/';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: ''
    };
  }



  handleClick = (location) => {
    console.log(location)
    // this.setState({location: location});
    
  };


  //render
  render(){
    return(
      <React.Fragment>
        <Header />
        <SearchForm handleClick={this.handleClick} />
        <Map />
        <SearchResults />
      </React.Fragment>
    )
  }
}

export default App;
