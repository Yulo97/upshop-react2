import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const CartItem = ({ product, deleteItemCart }) => {
  return (
    <>
      <Grid item xs={2}>
        <img
          src={product.image}
          alt=""
          style={{ height: "75px", maxWidth: "75px", margin: "auto" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Typography variant="h6" color="initial">
            {product.title}
          </Typography>
          <Typography variant="body1" color="initial">
            Precio: ${product.price}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <Typography variant="body1" color="initial">
            Cantidad:
          </Typography>
          <Typography variant="body1" color="initial">
            {product.cantidad}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Button
          size="large"
          variant="text"
          color="secondary"
          onClick={() => deleteItemCart(product.id)}
        >
          <DeleteIcon />
        </Button>
      </Grid>
    </>
  );
};
