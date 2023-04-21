import { Container, Typography } from "@mui/material";
import React from "react";

export const Error = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 4,
    gap: 2,
    flexDirection: "column",
  };

  return (
    <Container sx={style}>
      <Typography variant="h2" color="primary">
        404 - Not Found
      </Typography>
      <Typography variant="h6">
        Lo sentimos, la página que estás buscando no se encuentra disponible en nuestro sitio web.
        Puede que el enlace que has seguido esté roto o que hayas introducido mal la dirección URL.
      </Typography>
    </Container>
  );
};
