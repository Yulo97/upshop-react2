import React, { useState } from "react";
import { Drawer, Button, AppBar, IconButton, Typography, Toolbar, TextField } from "@mui/material";
import { NavDrawer } from "./NavDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { CartWidget } from "../CartWidget";
import SearchIcon from "@mui/icons-material/Search";

export const Navbar = () => {
  const navLinks = [
    {
      title: "Calzas",
      path: "#",
    },
    {
      title: "Camperas",
      path: "#",
    },
    {
      title: "Remeras",
      path: "#",
    },
    {
      title: "Abrigos ",
      path: "#",
    },
    {
      title: "Accesorios",
      path: "#",
    },
    {
      title: "Monoprendas",
      path: "#",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <AppBar color="inherit" position="static">
        {/* MENU ESCRITORIO */}
        <Box sx={{ display: { xs: "none", sm: "block" }, mt: 1 }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end", minWidth: "230px" }}>
              <TextField
                variant="standard"
                id="buscadorNavbar"
                placeholder="Buscar"
                onChange={() => alert("buscando")}
              />
              <SearchIcon
                sx={{
                  mr: 1,
                  my: 0.5,
                }}
              />
            </Box>
            <img style={{ width: "250px" }} src="/logo.png" />
            <Box sx={{ minWidth: "230px", display: "flex", justifyContent: { sm: "center", md: "flex-end" } }}>
              <CartWidget />
            </Box>
          </Toolbar>
          <Toolbar sx={{ justifyContent: "space-around", position: "static" }}>
            {navLinks.map((item) => (
              <Button key={item.title} color="primary" component="a" href="#">
                {item.title}
              </Button>
            ))}
          </Toolbar>
        </Box>

        {/* MENU RESPONSIVE */}
        <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton aria-label="" size="large" color="primary" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" sx={{ flexGrow: 1 }}>
            UP SHOP
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>

      <Drawer sx={{ display: { xs: "flex", sm: "none" } }} open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavDrawer navLinks={navLinks} />
      </Drawer>
    </nav>
  );
};
