import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";
import { State } from "authApp/RootState"; // RootState'i içe aktarma

import Slider from "./components/Slider";
import DashboardPage from "./pages/DashboardPage";

import Layout from "./Layout";
import AccountPage from "accountApp/AccountPage";

const App = () => {
  const auth = useSelector((state: State) => state.auth); // Auth bilgilerini Redux store'dan alıyoruz

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Slider />} />
        {/* "dashboard" yolunun sonuna "/*" ekliyoruz */}
        <Route path="dashboard/*" element={<DashboardPage />} />
        <Route path="account" element={<AccountPage/>}/>
      </Route>
      <Route path="*" element={<>Nopage</>} />
    </Routes>
  );
};

export default App;
