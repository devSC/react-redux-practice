require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';

let yeomanImage = require('../images/yeoman.png');


export default class AppComponent extends Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {

};