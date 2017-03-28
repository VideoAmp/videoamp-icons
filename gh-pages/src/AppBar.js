import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const AppBarIconButton = () => (
  <AppBar
    title={<TextField hintText="Search" fullWidth={true} underlineShow={false} onChange={this.handleChange}/>}
    iconElementLeft={<IconButton><ActionSearch /></IconButton>}
    iconElementRight={<FlatButton label="Logo" />}
  />
);

export default AppBarIconButton;