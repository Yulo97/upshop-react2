import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavDrawer = ({ navLinks }) => {
  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <NavLink
                to={"/category/" + item.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.title}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
