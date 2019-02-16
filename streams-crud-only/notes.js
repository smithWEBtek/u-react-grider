import { EDIT_STREAM } from "./client/src/actions/types";

// sample code showing diff of 3 ways to handle state data

// Array based: storing state as Array, you have to find the element
const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      })
    default:
      return state;
  }
};

// Object based: storing state as JS Object
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState
    default:
      return state;
  }
};

// Object based: refactored: storing state as JS Object
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};
