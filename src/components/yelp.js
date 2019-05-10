import React from 'react';

class Yelp extends React.Component{
 

  render(){
    
    let renderYelp = this.props.yelp.map((item, idx) => (
      <li key={idx}> 
        <a href={item.url}>{item.name}</a>
        <p>The average rating is {item.rating} out of 5 and the average cost is {item.price} out of 4</p>
        <img src={item.image_url} />
      </li>
      
    ));
    return(
      <React.Fragment>
        <h2>Yelp Results</h2>
        <ul>{renderYelp}</ul>
      </React.Fragment>
     
    );
  }
}

export default Yelp;