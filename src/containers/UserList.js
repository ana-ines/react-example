import { connect } from 'react-redux';
import UserList from '../components/UserList'

function mapStateToUsers(state) {   
	return {     
		users: state.users   
	} 
};  

export default connect(mapStateToUsers)(UserList);