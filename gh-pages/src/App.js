import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import './App.css';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Output'};

  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

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
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
          { this.state.value }
        </div>


      </MuiThemeProvider>
    );
  }
}

// const colors = [
//   'Red',
//   'Orange',
//   'Yellow',
//   'Green',
//   'Blue',
//   'Purple',
//   'Black',
//   'White',
//   'Edward',
// ];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: 500,
    // height: 450,
    // overflowY: 'auto',
  },
};

const tilesData = [
  {
    id: 1,
    img: 'http://placehold.it/350x150',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    id: 2,
    img: 'http://placehold.it/350x150',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    id: 3,
    img: 'http://placehold.it/350x150',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    id: 4,
    img: 'http://placehold.it/350x150',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: 'http://placehold.it/350x150',
    title: 'Hats',
    author: 'Hans',
  },
  {
    id: 6,
    img: 'http://placehold.it/350x150',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: 'http://placehold.it/350x150',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    id: 8,
    img: 'http://placehold.it/350x150',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

export default App;