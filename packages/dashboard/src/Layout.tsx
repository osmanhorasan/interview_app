import Grid from "@mui/material/Grid2"; // MUI Grid bileşeni
import React from "react";
import { Outlet } from "react-router-dom"; // Outlet bileşeni
import SideMenu from "./components/SideMenu"; // Yan menü bileşeni

// Layout bileşeni için props tanımı
const Layout = () => {
  return (
    <Grid container spacing={2} className="h-full bg-gray-100">
      <Grid size={2} className="overflow-hidden h-full">
        <SideMenu />
      </Grid>
      <Grid size={10} className="!overflow-auto h-full p-3">
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
