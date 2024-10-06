import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import menuListData from "../data/menuList";
import IMenuList from "../interfaces/menuList.interface";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <Box className="!bg-white h-full grid grid-cols-1 grid-rows-[1fr_auto]">
      <Box>
        <Grid container spacing={2} className="!p-2">
          <img
            className="w-[95%] mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbzmHNiBfmH1T0QesS1pG8tHY34Q6uY9Ol82b3xwJaE8LZMfPND6pPOWQ7yVQiiB1VC8&usqp=CAU"
          />
        </Grid>
        <MenuList>
          {menuListData.map((menu: IMenuList) => (
            <Link to={menu.url} key={menu.component}>
              <MenuItem>
                <ListItemText>{menu.title}</ListItemText>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Box>
    </Box>
  );
}

export default SideMenu;
