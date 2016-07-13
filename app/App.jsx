import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
// Import other components here

class App extends Component {
  render() {
    return(
      <div>
        Welcome to React!
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
