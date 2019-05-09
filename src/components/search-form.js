import React from 'react';

class SearchForm extends React.Component{
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
      <form>
        <input onChange={this.handleLocation} />
        <button onClick={this.handleClick}>Search</button>
      </form>
    );
  }
}

export default SearchForm;