import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable'; 
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers/users';
import { fetchUserEpic, fetchAllUsers, fetchUserByNameEpic } from './actions/users';

const epics = combineEpics(fetchUserEpic, fetchUserByNameEpic);

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(epicMiddleware)
)

render( <Provider store={ store }>
					<App />
				</Provider>, 
				document.getElementById('root')
			);

store.dispatch(fetchAllUsers());