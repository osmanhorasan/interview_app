import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import "./index.scss";
import Layout from "./Layout";
import { CharactersProvider } from "./contexts/characters";
import { CharactersFilterProvider } from "./contexts/CharactersFilterContext";
import menuListData from "./data/menuList";
import CharacterDetails from "./components/Characters/CharacterDetails";
const loadComponent = (componentName: string) => {
  return React.lazy(() =>
    import(`./pages/${componentName}`).catch((err) => {
      console.error("Bileşen yüklenemedi:", err);
      return { default: () => <div>Bileşen bulunamadı</div> }; // Hata durumunda
    })
  );
};

const DashboardContainer = () => {
  return (
    <BrowserRouter>
      <CharactersFilterProvider>
        <CharactersProvider>
          <Routes>
            <Route path="dashboard/" element={<Layout />}>
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
        </CharactersProvider>
      </CharactersFilterProvider>
    </BrowserRouter>
  );
};

export default DashboardContainer;
