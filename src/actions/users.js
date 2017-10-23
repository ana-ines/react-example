import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_ALL_USERS_FULFILLED = 'FETCH_ALL_USERS_FULFILLED';
export const FETCH_ALL_USERS_REJECTED = 'FETCH_ALL_USERS_REJECTED';

export const fetchAllUsers = () => ({ type: FETCH_ALL_USERS });
export const fetchUser = username => ({ type: FETCH_USER, username: username });
export const fetchAllUsersFulfilled = users => ({ type: FETCH_ALL_USERS_FULFILLED, users });
export const fetchError = error => ({ type: FETCH_ALL_USERS_REJECTED, payload: error.message });

export const fetchUserEpic = action$ => (
	action$.ofType(FETCH_ALL_USERS)
		.mergeMap(action =>
			ajax
				.getJSON(`https://api.github.com/users`)
				.map(fetchAllUsersFulfilled)
				.catch(error => Observable.of(fetchError(error)))
	  )
);

export const fetchUserByNameEpic = action$ => (
	action$.ofType(FETCH_USER)
		.debounceTime(500)
		.mergeMap(action =>
			ajax
				.getJSON(`https://api.github.com/search/users?q=${action.username}`)
				.map(resp => fetchAllUsersFulfilled(resp.items) )
				.takeUntil(action$.ofType(FETCH_USER))
				.catch(error => Observable.of(fetchError(error)))
	  )
);