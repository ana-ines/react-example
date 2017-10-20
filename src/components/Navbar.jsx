import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';

const styles = {
	header: {
		color: 'rgba(255, 255, 255, 1)',
    backgroundColor: '#232323',
    padding: '0.5em',
    width: '100%',
    fontFamily: 'Helvetica, sans-serif'
	},
	navContainer: {
		marginLeft: '3em',
	},
	title: {
		color: 'white',
		fontWeight: '100',
	}
};

const Navbar = ({ classes }) => (
  <AppBar className={ classes.header }
    title="Title">
    <div className={ classes.navContainer }>
    	<h3 className={ classes.title } >:::  React by example </h3>
    </div>
  </AppBar>
);

export default withStyles(styles)(Navbar);