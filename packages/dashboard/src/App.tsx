import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./index.scss";
import Layout from "./Layout";
import menuListData from "./data/menuList";
import CharacterDetails from "./components/Characters/CharacterDetails";

// Dinamik olarak bileşen import etme fonksiyonu
const loadComponent = (componentName: string) => {
  return React.lazy(() =>
    import(`./pages/${componentName}`).catch((err) => {
      console.error("Bileşen yüklenemedi:", err);
      return { default: () => <div>Bileşen bulunamadı</div> }; // Hata durumunda
    })
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {menuListData.map((menuItem, index) => {
          // Dinamik olarak her route için bileşeni yükle
          const Component = loadComponent(menuItem.component);
          return (
            <Route
              key={index}
              path={menuItem.url}
              element={
                <Suspense fallback={<div>Yükleniyor...</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
        <Route path="character" element={<Outlet />}>
          <Route path=":characterId" element={<CharacterDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
