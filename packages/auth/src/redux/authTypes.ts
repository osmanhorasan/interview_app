// src/redux/authTypes.ts
export interface AuthState {
    token: string | null;
    user: any;
    isAuthenticated: boolean;
  }
  
  export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  export const LOGOUT = 'LOGOUT';
  
  interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
      token: string;
      user: any;
    };
  }
  
  interface LogoutAction {
    type: typeof LOGOUT;
  }
  
  export type AuthActionTypes = LoginSuccessAction | LogoutAction;
  