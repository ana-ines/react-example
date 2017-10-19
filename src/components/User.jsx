import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = {
			avatar: {
				width: '20px',
				height: '20px' 
			}
};

function User({ user, classes }) {
	return (<div><img className={ classes.avatar } src={ user.avatar_url }/><span>{ user.login }</span></div>)
}

// spread operator
// destructuring

export default withStyles(styles)(User);