import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Account from "./Pages/AccountPage";
import Auth0ProviderWithNavigate from "authApp/Auth0ProviderWithNavigate";
import AuthButton from "authApp/AuthButton";
const App = () => {
  return (
    <Auth0ProviderWithNavigate>
      <AuthButton />
      <Account />
    </Auth0ProviderWithNavigate>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
