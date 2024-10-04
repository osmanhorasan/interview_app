// src/redux/authReducer.ts
import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGOUT } from './authTypes';

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
