import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";

export const CartWidget = () => {
  return (
    <Button variant="outlined" startIcon={<ShoppingCartOutlinedIcon />}>
      5
    </Button>
  );
};
