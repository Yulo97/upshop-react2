import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, Divider, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItem } from "../CartItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export const CartWidget = ({ cart, setCart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteItemCart = (id) => {
    const newCart = cart
      .map((product) => {
        if (product.id === id) {
          if (product.cantidad < 2) {
            return null; // Devuelve null para dsp eliminar el producto del carrito
          } else {
            return {
              ...product,
              cantidad: product.cantidad - 1,
            };
          }
        } else {
          return product; // Devuelve el producto sin modificarlo
        }
      })
      .filter((product) => product !== null); // Elimina los productos que devolvieron null

    setCart(newCart);
  };

  const [cantidadProductos, setCantidadProductos] = useState(0);

  useEffect(() => {
    const totalProductos = cart.reduce((total, product) => {
      return total + product.cantidad;
    }, 0);

    setCantidadProductos(totalProductos);
  }, [cart]);

  return (
    <>
      <Button variant="outlined" startIcon={<ShoppingCartOutlinedIcon />} onClick={handleOpen}>
        {cantidadProductos}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
            CARRITO DE COMPRAS
          </Typography>
          <Divider />
          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2}>
              {cart.map((product) => (
                <CartItem key={product.id} product={product} deleteItemCart={deleteItemCart} />
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 4 }}>
            <Button
              onClick={() => setCart([])}
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Vaciar Carrito
            </Button>
            <Button size="large" variant="contained" startIcon={<ShoppingBagIcon />}>
              Finalizar Compra
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
