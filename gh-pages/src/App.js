import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import _ from 'lodash';

import IconConstants from './IconConstants';
import './App.css';
import './fonts.css';
import Logo from './logo.png';
import SearchIcon from 'material-ui/svg-icons/action/search';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: IconConstants,
      searchQuery: '',
      open: false,
      activeItem: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  isActive = item => {
    console.log("item", item)
    console.log("this.state.activeItem", this.state.activeItem)
    return (_.get(this.state, ["activeItem", "ligature"]) === item);
    // console.log("this.state.activeItem", this.state.activeItem)
    // const activeItem = _.find(IconConstants, { ligature: item });
    // if (_.get(activeItem, "ligature") === item) {
    //   return 'is-active';
    // } else {
    //   return '';
    // }
  }

  handleChange = (evt) => {
    this.setState({searchQuery: evt.target.value.toLowerCase()});
  }

  handleToggle = item =>
    evt => {
      if (this.state.open) {
        this.setState({open: false});
      } else {
        const activeItem = _.find(IconConstants, { ligature: item });

        this.setState({
          activeItem,
          open: true,
        })
      }
    }

  getFilteredItems = (items) => items
    .filter(item => item.ligature.toLowerCase().includes(this.state.searchQuery))
    .map(item => item.ligature)

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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
            iconElementLeft={
              <SearchIcon
                className="va-appbar-icon"
              />
            }
            iconElementRight={
              <a href="https://videoamp.com">
                <img
                  src={Logo}
                  className="va-appbar-icon"
                  alt="VideoAmp"
                />
              </a>
            }
          />
          <div className="va-container">
            <h2>VideoAmp Icons</h2>
            <p>A suite of Material Design inspired icons used in the VideoAmp Console.</p>
            <ul>
              { this.getFilteredItems(this.state.items).map(item => (
                <li
                  key={item}
                  className={this.isActive(item)}
                  onTouchTap={this.handleToggle(item)}
                >
                  <span className="va-icon">{item}</span>
                  <p>{item}</p>
                </li>
              )) }
            </ul>
          </div>
          <Drawer
            className="va-drawer"
            openSecondary={true}
            open={this.state.open}
            width="280"
          >
            <div className="va-drawer-icon">
              <span className="va-icon">{_.get(this.state, ["activeItem", "ligature"])}</span>
            </div>
            <h3>PREVIEW</h3>
            <h3>HTML</h3>
            <TextField
              defaultValue="<span class='va-icon va-icon-channel_web'></span>"
            />


            <p>{_.get(this.state, ["activeItem", "ligature"])}</p>
            <p>{_.get(this.state, ["activeItem", "css_class"])}</p>
            <p>{_.get(this.state, ["activeItem", "unicode"])}</p>
            <p>{_.get(this.state, ["activeItem", "description"])}</p>

          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;