import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";

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
            <ListItemButton component="a" href={item.path}>
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
