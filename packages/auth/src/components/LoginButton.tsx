import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../redux/authTypes";
import { AppDispatch } from "../redux/store";
import { Button } from "@mui/material";
import React from "react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // Oturum açma işlemi
      await loginWithRedirect({
        appState: {
          returnTo: window.location.pathname,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const fetchUserData = async () => {
    if (isAuthenticated) {
      try {
        // Access token al
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: "openid profile email offline_access",
          },
        });

        // Redux state'e kullanıcı bilgilerini dispatch et
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  // fetchUserData fonksiyonunu kullanıcının durumu değiştiğinde çağır
  React.useEffect(() => {
    fetchUserData();
  }, [isAuthenticated]);

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginButton;
