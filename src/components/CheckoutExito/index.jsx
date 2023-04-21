import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export const CheckoutExito = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    mt: 5,
  };

  const { id } = useParams();

  return (
    <Container>
      <Box sx={style}>
        <Typography variant="h1" color="primary">
          Felicidades!
        </Typography>
        <Typography variant="h3" color="initial">
          Tu pedido fue realizado bajo el ID:
        </Typography>
        <Typography variant="h3" color="initial">
          <strong>{id}</strong>
        </Typography>
      </Box>
    </Container>
  );
};
