import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Grid from "@mui/material/Grid2";
import { Avatar, Box, Button, Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { deepOrange } from "@mui/material/colors";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
const AuthButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {!isAuthenticated ? (
          <Grid size={"auto"}>
            <LoginButton />
          </Grid>
        ) : (
          <Grid size={"auto"}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar alt="Remy Sharp" src={`${user?.picture}`} />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/account">{user?.name}</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/dashboard">{"Dashboard"}</Link>
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
