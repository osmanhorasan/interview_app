import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router-dom";

import "./index.scss";

import Auth0ProviderWithNavigate from "authApp/Auth0ProviderWithNavigate"; // RootState'i içe aktarma
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import Layout from "./Layout";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <Header />
      <App/>
      <Footer />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
