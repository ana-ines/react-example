import React from 'react';
import classNames from 'classnames';
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
		background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'
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
						  },
						  {
						    "login": "pjhyett",
						    "id": 3,
						    "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4"
						  },
						  {
						    "login": "wycats",
						    "id": 4,
						    "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4"
						  }];

const theme = createMuiTheme();

function App({ pushPath, children, classes, onInputChanged }) {
	return (
		<MuiThemeProvider theme={theme}>
			<main className={classes.main} >
				<UserList users={ users } />
			</main>
		</MuiThemeProvider>
	)
}

export default withStyles(styles)(App);