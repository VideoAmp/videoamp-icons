import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
  'Edward',
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <AutoComplete
            floatingLabelText="Type 'r', case insensitive"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={colors}
          />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

