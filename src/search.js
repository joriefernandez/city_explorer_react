import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      location: '',
    };
  }

  handleLocation = e => {
    e.preventDefault();
    let location = e.target.value;
    this.setState({location});
  };

  handleClick = e => {
    e.preventDefault();
    let location = this.state.location;
    this.setState({location});
    console.log('Search clicked!');
  };

  render(){
    return(
      <div>
        <input onChange={this.handleLocation} />
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;