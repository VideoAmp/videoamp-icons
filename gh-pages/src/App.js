import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import _ from 'lodash';

import IconConstants from './IconConstants';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: IconConstants,
      searchQuery: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (evt) => {
    this.setState({searchQuery: evt.target.value.toLowerCase()});
  }

  getFilteredItems = (items) => items
    .filter(item => item.ligature.toLowerCase().includes(this.state.searchQuery))
    .map(item => item.ligature)

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>VideoAmp Icons</h2>
            <p>A suite of Material Design inspired icons used in the VideoAmp Console.</p>
          </div>
          <TextField
            floatingLabelText="Search"
            onChange={this.handleChange}
          />
          <IconList items={this.getFilteredItems(this.state.items)} />
        </div>
      </MuiThemeProvider>
    );
  }
}

class IconList extends Component {
  render() {
    return (
      <ul>
        { this.props.items.map(item => (
          <li key={item}>
            {item}
          </li>
        )) }
      </ul>
    );
  }
}

export default App;