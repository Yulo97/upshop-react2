import React, { useEffect, useState } from "react";
import { Drawer, Button, AppBar, IconButton, Typography, Toolbar, TextField } from "@mui/material";
import { NavDrawer } from "./NavDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { CartWidget } from "../CartWidget";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { cart, setCart, setFindProduct, findProduct } = useContext(CartContext);

  const navLinks = [
    {
      title: "Pantalones",
      path: "pantalones",
    },
    {
      title: "Monoprendas",
      path: "monoprendas",
    },
    {
      title: "Abrigos ",
      path: "abrigos",
    },
    {
      title: "Remeras",
      path: "remeras",
    },
    {
      title: "Accesorios",
      path: "accesorios",
    },
    {
      title: "Musculosas",
      path: "musculosas",
    },
  ];

  const handleChange = (e) => {
    setFindProduct(e.target.value);
  };

  const getCartLocalStorage = () => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  };
  useEffect(() => {
    getCartLocalStorage();
  }, []);

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
                onChange={handleChange}
                value={findProduct}
              />
              <SearchIcon
                sx={{
                  mr: 1,
                  my: 0.5,
                }}
              />
            </Box>
            <NavLink to={"/"}>
              <img style={{ width: "250px" }} src="/logo.png" />
            </NavLink>
            <Box
              sx={{
                minWidth: "230px",
                display: "flex",
                justifyContent: { sm: "center", md: "flex-end" },
              }}
            >
              <CartWidget cart={cart} setCart={setCart} />
            </Box>
          </Toolbar>
          <Toolbar sx={{ justifyContent: "space-around", position: "static" }}>
            {navLinks.map((item) => (
              <NavLink
                to={"/category/" + item.path}
                key={item.title}
                style={{ textDecoration: "none" }}
              >
                <Button color="primary">{item.title}</Button>
              </NavLink>
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
          <CartWidget cart={cart} setCart={setCart} />
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: "flex", sm: "none" } }}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavDrawer navLinks={navLinks} />
      </Drawer>
    </nav>
  );
};
