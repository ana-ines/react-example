import React from 'react';
import User from './User';
import { withStyles } from 'material-ui/styles';

const styles = {
	userList: {
		display: 'inline-block',
		margin: '0.5em',
		float: 'left'
	}
};

function UserList({ users, classes }) {
	return <ul>
		{ users.map( (u, i) => <li className={ classes.userList } key={i}> <User user={u} /> </li>) }	
	</ul>;
}

export default withStyles(styles)(UserList);