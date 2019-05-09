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
    await superagent.get('https://secret-beyond-37824.herokuapp.com/location').query({data: this.state.value.toLowerCase()})
      .then(result => {
        this.props.handleForm(result.body);
      });
    
    
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