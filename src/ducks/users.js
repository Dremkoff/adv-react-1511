import { appName } from '../config';
import { Record } from 'immutable';
import { reset } from 'redux-form';

/**
 * Constants
 * */
export const moduleName = 'users';
const prefix = `${appName}/${moduleName}`;

export const ADD_USER_SUCCESS = `${prefix}/ADD_USER_SUCCESS`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
	userList: [],
});

export default function reducer(state = new ReducerRecord(), action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_USER_SUCCESS:
			return state.update('userList', users => [...users, { ...payload.user }]);
		default:
			return state;
	}
}

/**
 * Selectors
 * */

/**
 * Init logic
 */

/**
 * Action Creators
 * */
export function addUser(user) {
	return dispatch => {
		dispatch(reset('addUser'));
		dispatch({
			type: ADD_USER_SUCCESS,
			payload: { user },
		});
	};
}
