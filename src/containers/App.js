import { connect } from 'react-redux';
import { fetchUser } from '../actions/users';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => { return { onInputChanged: username => dispatch(fetchUser(username)) } }

function mapStateToUser(state) {   
	return {     
		user: state.user   
	}
};


export default connect(mapStateToUser, mapDispatchToProps)(App);