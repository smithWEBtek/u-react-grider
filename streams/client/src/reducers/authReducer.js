import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    case CREATE_STREAM:
      console.log('[CREATE_STREAM]updated state: ', { ...state, streams: [...state.streams, action.payload] });
      return { ...state, streams: [...state.streams, action.payload] }
    default:
      return state;
  }
};
