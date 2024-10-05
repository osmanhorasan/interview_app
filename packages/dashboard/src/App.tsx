import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Grid from "@mui/material/Grid2";
import Filter from "./components/Filter";
import Characters from "./components/Characters/Characters";

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Filter />
      </Grid>
      <Grid size={10}>
        <Characters />
      </Grid>
    </Grid>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
