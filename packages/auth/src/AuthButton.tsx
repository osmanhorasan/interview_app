import React from "react";
import Grid from "@mui/material/Grid2";
import { Avatar, Box, Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
const AuthButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const auth = useSelector((state: RootState) => state.auth); // Auth bilgilerini Redux store'dan alıyoruz
  const { user, isAuthenticated, token } = auth;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {!isAuthenticated ? (
          <Grid size={"auto"}>
            <LoginButton />
          </Grid>
        ) : (
          <Grid size={"auto"}>
            <Avatar
              id="basic-button"
              onClick={(event) => handleClick(event)}
              src={`${user?.picture}`}
              className="cursor-pointer"
            />

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose} href="/account">
                {user?.name}
              </MenuItem>
              <MenuItem onClick={handleClose} href="/dashboard">
                {"Dashboard"}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <LogoutButton />
              </MenuItem>
            </Menu>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AuthButton;
