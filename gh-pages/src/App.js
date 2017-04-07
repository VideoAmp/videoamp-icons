import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import _ from "lodash";

import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import SearchIcon from "material-ui/svg-icons/action/search";
import { TwitterPicker } from "react-color";

import ReactDOM from "react-dom";

import IconConstants from "./IconConstants";
import "./App.css";
import "./fonts.css";
import Logo from "./logo.png";

injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: IconConstants,
            searchQuery: "",
            open: false,
            activeItem: "",
            activeItemBackgroundColor: "#40B2FF",
            activeItemColor: "#FFD11A",
        };
    }

    isActive = (item) => {
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

    searchQuery = (evt) => {
        this.setState({ searchQuery: evt.target.value.toLowerCase() });
    }


    iconColorPickerChange = (color) => {
        const hex = color.hex;
        this.setInputColor(this.iconTwitterPickerDOM, hex);
        this.setState({ activeItemColor: hex });
    }

    backgroundColorPickerChange = (color) => {
        const hex = color.hex;
        this.setInputColor(this.backgroundTwitterPickerDOM, hex);
        this.setState({ activeItemBackgroundColor: hex });
    }

    openDrawer = item =>
      () => {
          if (this.state.open) {
              this.setState({ open: !this.state.open });
          } else {
              const activeItem = _.find(IconConstants, { ligature: item });

              this.setState({
                  activeItem,
                  open: true,
              });
          }
      }

    setInputColor = (twitterPickerDOM, hex) => {
        const inputColor = twitterPickerDOM.querySelector("input");
        const color = _.replace(hex, "#", "");
        inputColor.setAttribute("value", color);
        inputColor.setAttribute("placeholder", color);
    }

    getFilteredItems = items => items.filter(
        item => item.ligature.toLowerCase().includes(this.state.searchQuery)
    )


    componentDidMount() {
        this.setInputColor(this.iconTwitterPickerDOM, this.iconTwitterPicker.props.color);
        this.setInputColor(this.backgroundTwitterPickerDOM, this.backgroundTwitterPicker.props.color);
    }

    render() {
        const cssClass = _.get(this.state, ["activeItem", "css_class"]);
        const ligature = _.get(this.state, ["activeItem", "ligature"]);
        const unicode = _.get(this.state, ["activeItem", "unicode"]);

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
                        onChange={this.searchQuery}
                    />
                    }
                    style={{ backgroundColor: "#242424" }}
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
                        onTouchTap={this.openDrawer(item.ligature)}
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
                    containerStyle={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                >
                    <div
                    className="va-drawer-icon"
                    style={{ backgroundColor: this.state.activeItemBackgroundColor }}
                    >
                    <span
                        className="va-icon"
                        style={{ color: this.state.activeItemColor }}
                    >
                        {ligature}
                    </span>
                    </div>
                    <div className="va-drawer-body">
                    <h3>PREVIEW</h3>

                    <div>
                        Icon
                        <TwitterPicker
                        ref={(picker) => {
                            this.iconTwitterPicker = picker;
                            this.iconTwitterPickerDOM = ReactDOM.findDOMNode(this.iconTwitterPicker);
                        }
                        }
                        width="205px"
                        color="40B2FF"
                        colors={["#40B2FF", "#45E5DD", "#50E578", "#FFD11A", "#FF8940"]}
                        triangle="hide"
                        onChange={this.iconColorPickerChange}
                        />
                    </div>
                    <div>
                        <span>Background</span>
                        <TwitterPicker
                        ref={(picker) => {
                            this.backgroundTwitterPicker = picker;
                            this.backgroundTwitterPickerDOM = ReactDOM.findDOMNode(this.backgroundTwitterPicker);
                        }
                        }
                        width="205px"
                        color="40B2FF"
                        colors={["#40B2FF", "#45E5DD", "#50E578", "#FFD11A", "#FF8940"]}
                        triangle="hide"
                        onChange={this.backgroundColorPickerChange}
                        />
                    </div>
                    </div>

                    <Divider style={{ backgroundColor: "#E5E5E5" }}/>

                    <div className="va-drawer-body">

                    <h3>HTML</h3>
                    <p>{`<span class="va-icon ${cssClass}"></span>`}</p>

                    <h3>HTML (using ligatures)</h3>
                    <p>{`<span class="va-icon">${ligature}</span>`}</p>

                    <h3>CSS</h3>
                    <p>{`.${cssClass}:before { content: "${unicode}"; }`}</p>
                    </div>
                </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
