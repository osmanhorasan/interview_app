import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import AuthButton from "./AuthButton";
import Auth0ProviderWithNavigate from "./provider/Auth0ProviderWithNavigate";
import { BrowserRouter } from "react-router-dom";

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
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
