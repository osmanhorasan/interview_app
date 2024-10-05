import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import AdbIcon from "@mui/icons-material/Adb";

function Filter() {
  return (
    <Box className="!bg-white h-full">
      <Grid container spacing={2} className="!p-2">
        <Grid size={2}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        </Grid>
        <Grid size={10}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            InterviewApp
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filter;
