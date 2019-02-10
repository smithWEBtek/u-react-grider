import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// ***************************  fetchPostsAndUsers() *****************************************
// call fetchPosts
// get list of posts
// find unique userId's
// iterate over unique userId's
// call 'fetchUser' with each userId

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  console.log('getState, posts.data: ', getState().posts.data);
  console.log('fetched posts');
  // find unique userId's, with lodash 

  const user_ids = _.uniq(_.map(getState().posts.data, 'userId'))
  console.log("user_ids: ", user_ids);

  user_ids.forEach(id => dispatch(fetchUser(id)));
}

// ***************************  fetchPosts() *****************************************
export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response });
  };
};

// ***************************  fetchUser() *****************************************
// fetches each user, all 100 times for 100 posts, even though only 10 users
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  console.log('fetchUser called ...');
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// memoized version of fetchUser(), saved here
// a function [fetchUser(id)], that returns a function [dispatch], that calls _fetchUser(id, dispatch)
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
// this only fetches the user once and would prevent state updates to user from triggering re-render (as you would likely want)