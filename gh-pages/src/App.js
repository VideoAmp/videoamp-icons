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
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
    // console.log("item", item)
    // console.log("this.state.activeItem", this.state.activeItem)
    // return (_.get(this.state, ["activeItem", "ligature"]) === item);
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
        this.setState({open: !this.state.open});
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
    // .map(item => item.ligature)

  render() {
    // const ligature = _.get(this.state, ['activeItem', 'css_class']);
    // const ligatureExample = `<span class='va-icon ${ligature}'}></span>`;
    // console.log(ligatureExample);

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
                  key={item.ligature}
                  className={this.isActive(item.ligature)}
                  onTouchTap={this.handleToggle(item.ligature)}
                >
                  <span className="va-icon">{item.ligature}</span>
                  <p>{item.description}</p>
                </li>
              )) }
            </ul>
          </div>
          <Drawer
            className="va-drawer"
            openSecondary={true}
            open={this.state.open}
            width={280}
            containerStyle={{backgroundColor:'#FFFFFF', color:'#000000'}}
          >
            <div className="va-drawer-icon">
              <span className="va-icon">{_.get(this.state, ["activeItem", "ligature"])}</span>
            </div>
            <div className="va-drawer-body">
              <h3>PREVIEW</h3>
              <div>Size
                <SelectField
                  floatingLabelText="Frequency"
                  value={this.state.value}
                  onChange={this.handleChange}
                  labelStyle={{color:'#000000'}}
                >
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
              </div>
              <div>Icon
                <TextField
                  defaultValue="Default Icon"
                  inputStyle={{color:'#000000'}}
                />
              </div>
              <div>Background
                <TextField
                  defaultValue="Default Value"
                  inputStyle={{color:'#000000'}}
                />
              </div>
            </div>

            <Divider style={{backgroundColor:'#E5E5E5'}}/>

            <div className="va-drawer-body">
              <h3>HTML</h3>
              <p>{`<span class="va-icon ${_.get(this.state, ['activeItem', 'css_class'])}"></span>`}</p>

              <h3>HTML (using ligatures)</h3>
              <p>{`<span class="va-icon">${_.get(this.state, ['activeItem', 'ligature'])}</span>`}</p>

              <h3>CSS</h3>
              <p>{`.${_.get(this.state, ['activeItem', 'css_class'])}:before { content: "${_.get(this.state, ["activeItem", "unicode"])}"; }`}</p>
            </div>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;