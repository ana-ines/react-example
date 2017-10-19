import React from 'react';
import User from './User';

function UserList({users}) {
	return <ul>
		{ users.map( (u, i) => <li key={i}> <User user={u} /> </li>) }	
	</ul>;
}

export default UserList;