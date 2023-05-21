// reducers/authReducer.js

const initialState = {
  loggedIn: false,
  username: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loggedIn: false,
        username: null,
        error: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;