import React, { Component } from 'react';
import logo from './logo.svg';
import { pushRotate as Menu } from 'react-burger-menu';
import Logo from './components/Logo'
import './App.css';
import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInLeft: {
    animation: 'x 3s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}
 

class App extends Component {
  render() {
    return (

      
      <div id="outer-container">
  
          <Menu 
            left
            pageWrapId={ "page-wrap" } 
            outerContainerId={ "outer-container" } >
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>

  <main id="page-wrap">
    <div className="App-header">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Logo />
      <br />
    </div>
    
    <div className="Introduction-section">
      <div className="container">
      <StyleRoot>
      <div className="test" style={styles.slideInLeft}>
      <h1> Hi!</h1>
      </div>
    </StyleRoot>
      </div>
    </div>
  </main>
      </div>

    
      

    );
  }
}

export default App;
