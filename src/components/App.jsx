import React from 'react';
import classNames from 'classnames';
import { Paper } from 'material-ui';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import UserList from './UserList';

const styles = {
	main: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		backgroundColor: red[300]
	},
	paper: {
		display: 'flex',
		padding: '15px'
	}
};


const users = [{
						    "login": "mojombo",
						    "id": 1,
						    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4"
						  },
						  {
						    "login": "defunkt",
						    "id": 2,
						    "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4"
						  }];

const theme = createMuiTheme();

function App({ pushPath, children, classes, onInputChanged }) {
	return (
		<MuiThemeProvider theme={theme}>
			<main className={classes.main} >
				<Paper className={classes.paper} zDepth={4} >
					<UserList users={ users } />
				</Paper>
			</main>
		</MuiThemeProvider>
	)
}

export default withStyles(styles)(App);