import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import AuthButton from "./AuthButton";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./redux/store";

console.log("Auth0 Domain:", process.env.REACT_APP_AUTH0_DOMAIN);
console.log("Auth0 Client ID:", process.env.REACT_APP_AUTH0_CLIENT_ID);
console.log("Auth0 Audience:", process.env.REACT_APP_AUTH0_AUDIENCE);


const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: auth</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
      <AuthButton />
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Auth0Provider
    domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
    clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE, // Management API için gerekli
    }}
    useRefreshTokens={true} // Refresh Token aktif hale getirildi
    cacheLocation="localstorage" // Token'ları local storage'da sakla
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
