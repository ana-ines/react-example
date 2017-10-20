import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { Paper } from 'material-ui';

const styles = {
			avatar: {
				width: '6em',
				height: '6em',
				borderRadius: '100%',
				border: '0.4em solid white',
				boxShadow: '0px 0px 9px 3px #cccccc'
			},
			container: {
				backgroundColor: '#607d8b',
				width: '100%',
    		textAlign: 'center' 
			},
			paper: {
				display: 'flex',
		    padding: '1em',
		    backgroundColor: 'white',
		    width: '14em',
		    height: '14em',
		    borderRadius: '0.2em'
			},
			avatarContainer: {
		    backgroundColor: '#e6e6e6',
		    paddingTop: '1em',
		    paddingBottom: '1em'
			},
			userData: {
				marginTop: '1em',
	    	textTransform: 'uppercase',
	    	fontFamily: 'Roboto, sans-serif',
	    	color: 'white',
	    	fontWeight: '400'
			}
};

function User({ user, classes }) {
	return (<Paper className={classes.paper} zDepth={4}>
						<div className={ classes.container }>
							<div className="row">
								<div className={ classes.avatarContainer }>
									<img className={ classes.avatar } src={ user.avatar_url }/>
								</div>
							</div>
							<div className="row">
								<div className={ classes.userData }>	
									<span>{ user.login }</span>
								</div>
							</div>
						</div>
					</Paper>)
}

// spread operator
// destructuring

export default withStyles(styles)(User);