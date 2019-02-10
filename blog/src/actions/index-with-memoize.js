import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// ***************************  fetchPosts() *****************************************
// export const fetchPosts = () => {
// 	return async function (dispatch, getState) {
// 		const response = await jsonPlaceholder.get('/posts');
// 		dispatch({ type: 'FETCH_POSTS', payload: response });
// 	};
// };

// refactor with arrow functions
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response });
};

// ***************************  fetchUser() *****************************************
// export const fetchUser = (id) => {
// 	return async function (dispatch) {
// 		const response = await jsonPlaceholder.get(`/users/${id}`);
// 		dispatch({ type: 'FETCH_USER', payload: response.data });
// 	};
// };

// 1st refactor with _.memoize outer function
// export const fetchUser = _.memoize(function (id) {
// 	return async function (dispatch) {
// 		const response = await jsonPlaceholder.get(`/users/${id}`);
// 		dispatch({ type: 'FETCH_USER', payload: response.data });
// 	}
// });

// 2nd refactor with _.memoize interior function
// export const fetchUser = function (id) {
// 	return _.memoize(async function (dispatch) {
// 		const response = await jsonPlaceholder.get(`/users/${id}`);
// 		dispatch({ type: 'FETCH_USER', payload: response.data })
// 	})
// };

// 3rd refactor with _.memoize inner function. SOLUTION: we need to: 
// 1. define a function outside of our action creator
// 2. (..the function that's going to actually make the request)
// 3. and then dispatch our action
// 4. we're going to memoize it OUTSIDE of the action creator
// 5. so that it only gets created one time

// export const fetchUser = id => dispatch => {
// 	_fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// ... final refactor:
// a function [fetchUser(id)], that returns a function [dispatch], that calls _fetchUser(id, dispatch)
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
});
// this only fetches the user once and would prevent state updates to user from triggering re-render (as you would likely want)