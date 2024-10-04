import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../redux/authTypes";
import { AppDispatch } from "../redux/store";
import { Button } from "@mui/material";
import React from "react";
const LoginButton: React.FC = () => {
  const { loginWithRedirect, getAccessTokenSilently, user } = useAuth0();
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async () => {
    await loginWithRedirect();
    const token = await getAccessTokenSilently();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginButton;
