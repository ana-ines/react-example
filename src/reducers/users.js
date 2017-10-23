import { FETCH_ALL_USERS_FULFILLED } from '../actions/users';

const initialState = {
	users: []
}

function reducer(state = initialState, action) {
	if (action.type === FETCH_ALL_USERS_FULFILLED) {
		return {
			users: action.users.slice(0, 4)
		}	
	}
	return state;
};

export default reducer; 