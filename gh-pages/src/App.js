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

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://placekitten.com/200/200',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://placekitten.com/250/250',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://placekitten.com/300/300',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://placekitten.com/350/350',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://placekitten.com/400/400',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://placekitten.com/450/450',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://placekitten.com/500/500',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://placekitten.com/550/550',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class App extends Component {
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
            value=""
          />
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>


      </MuiThemeProvider>
    );
  }
}

export default App;