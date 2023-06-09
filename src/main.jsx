import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fb07dc",
    },
    secondary: {
      main: "#a8a8a8",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </CartProvider>
);
