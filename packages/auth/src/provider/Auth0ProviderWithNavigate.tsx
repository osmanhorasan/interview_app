import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "../redux/store";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: `${window.location.origin}`,
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: "openid profile email offline_access",
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <Provider store={store}>{children}</Provider>
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
