import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/authTypes";
import { AppDispatch } from "../redux/store";
import { Button } from "@mui/material";
import React from "react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    dispatch({ type: LOGOUT });
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
