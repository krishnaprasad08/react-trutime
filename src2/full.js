import React, { Component } from 'react';


import Header from './Header/header';
import Container from './container';

class FullContainer extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>
        <Container/>
       
      
      </div>
    );
  }
}

export default FullContainer;
