import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';

import IconConstants from './IconConstants';
import logo from './logo.png';
import './App.css';
import './fonts.css';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

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
        <div>
          <AppBar
            title={
              <TextField
                className="va-input"
                hintText="Search"
                fullWidth={true}
                underlineShow={false}
                onChange={this.handleChange}
              />
            }
            style={{backgroundColor:'#242424'}}
            iconElementLeft={<IconButton><ActionSearch /></IconButton>}
            iconElementRight={
              <img
                src={logo}
                className="va-logo"
                alt="VideoAmp"
              />
            }
          />
          <div>
            <h2>VideoAmp Icons</h2>
            <p>A suite of Material Design inspired icons used in the VideoAmp Console.</p>
            <IconList items={this.getFilteredItems(this.state.items)} />
          </div>
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
            <span className="va-icon">{item}</span>
            <p>{item}</p>
          </li>
        )) }
      </ul>
    );
  }
}

export default App;