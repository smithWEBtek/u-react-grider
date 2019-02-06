import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async dispatch => {
	console.log('about to fetch posts');
	await dispatch(fetchPosts());
	console.log('fetched posts');
}

export const fetchPosts = () => {
	return async function (dispatch, getState) {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response });
	};
};
// refactor
// export const fetchPosts = () => async dispatch => {
// 	const response = await jsonPlaceholder.get('/posts');
// 	dispatch({ type: 'FETCH_POSTS', payload: response });
// };

export const fetchUser = (id) => {
	return async function (dispatch, getState) {
		const response = await jsonPlaceholder.get(`/users/${id}`);
		debugger;
		dispatch({ type: 'FETCH_USER', payload: response.data });
	};
};
// refactor
// export const fetchUser = (id) => async dispatch => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// };


const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
});