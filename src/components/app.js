import React from 'react';
import Header from '../components/header.js';
import SearchForm from '../components/search-form.js';
import Map from '../components/map.js';
import SearchResults from '../components/search-results.js';

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