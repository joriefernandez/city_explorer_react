import React from 'react';
import superagent from 'superagent';


class SearchForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    
    this.setState({value: event.target.value});
  };

 
  handleSubmit = async e => {
    e.preventDefault();
    this.props.handleForm(this.state.value.toLowerCase());
  };
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
       <label>
          Enter location:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      </form>
    );
  }
}

export default SearchForm;