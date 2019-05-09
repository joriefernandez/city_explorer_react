import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js/index.js';
import Map from './map.js';
import SearchResults from './search-results.js/index.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: {}
    };
  }

  //render
  render(){
    return(
      <React.Fragment>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
      </React.Fragment>
    )
  }
}

export default App;
