import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";

import Auth0ProviderWithNavigate from "authApp/Auth0ProviderWithNavigate";
import { State } from "authApp/RootState"; // RootState'i içe aktarma
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

const App = () => {
  const auth = useSelector((state: State) => state.auth); // Auth bilgilerini Redux store'dan alıyoruz
  // const { user, isAuthenticated, token } = auth;

  return (
    <Routes>
      <Route path="/" element={<Slider />}>
        <Route index element={<>Home</>} />
        <Route path="*" element={<>Nopage</>} />
      </Route>
    </Routes>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <Header />
      <App />
      <Footer />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
