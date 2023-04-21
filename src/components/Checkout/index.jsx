import { Container, Grid, Input } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Checkout.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  FormControl,
  Divider,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
} from "@mui/material";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../../db/firebase-config.js";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [priceCart, setPriceCart] = useState(0);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [verifEmail, setVerifEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "nombre":
        setNombre(value);
        break;
      case "apellido":
        setApellido(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "verifEmail":
        setVerifEmail(value);
        break;
      case "telefono":
        setTelefono(value);
        break;
      case "provincia":
        setProvincia(value);
        break;
      case "codigoPostal":
        setCodigoPostal(value);
        break;
      case "direccion":
        setDireccion(value);
        break;
      case "metodoPago":
        setMetodoPago(value);
        break;
      default:
        break;
    }
  };

  const enviarPedido = async () => {
    if (metodoPago && nombre && apellido && email && telefono && cart) {
      if (email && email == verifEmail) {
        const docRef = await addDoc(collection(db, "orders"), {
          nombre: nombre + " " + apellido,
          email: email,
          telefono: telefono,
          provincia: provincia,
          codigoPostal: codigoPostal,
          direccion: direccion,
          metodoPago: metodoPago,
          cart: cart,
        });
        console.log("Solicitud realizacon con el ID: ", docRef.id);

        cart.forEach(async (element) => {
          // Obtener una referencia al documento del producto que se va a actualizar.
          const productRef = doc(db, "items", element.id);
          const productDoc = await getDoc(productRef);

          // Actualizar el valor del stock del producto.
          const stockActual = productDoc.data().stock;
          const newStock = stockActual - element.cantidad;

          const updateData = { stock: newStock };

          // Guardar los cambios en Firestore.
          await updateDoc(productRef, updateData);
        });

        setTimeout(() => {
          setCart([]);
          localStorage.removeItem("cart");
          navigate(`/exito/${docRef.id}`);
        }, 0);
      } else {
        alert("El correo electronico no coincide");
      }
    } else {
      alert("Debes completar todos los campos");
    }
  };

  const getPriceCart = () => {
    const totalPriceCart = cart.reduce((total, product) => {
      return total + product.price * product.cantidad;
    }, 0);
    setPriceCart(totalPriceCart);
  };

  useEffect(() => {
    getPriceCart();
  }, [cart]);

  return (
    <Container sx={{ mt: "50px" }}>
      <Grid container spacing={4}>
        <Grid item xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4, margin: "20px" }}>
            <Typography variant="h5" color="initial">
              Datos Personales
            </Typography>
            <Box sx={{ display: "flex", gap: 5 }}>
              <Input
                name="nombre"
                value={nombre}
                onChange={handleChange}
                placeholder="Nombre"
                variant="solid"
              />
              <Input
                name="apellido"
                value={apellido}
                onChange={handleChange}
                placeholder="Apellido"
                variant="contained"
              />
            </Box>
            <Input
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Direccion de Correo"
            />
            <Input
              name="verifEmail"
              value={verifEmail}
              onChange={handleChange}
              placeholder="Verificacion de Correo"
            />
            <Input
              name="telefono"
              value={telefono}
              onChange={handleChange}
              placeholder="Telefono"
              sx={{ mb: 2 }}
            />
            <Typography variant="h5" color="initial">
              Datos de Envio
            </Typography>
            <Input
              name="provincia"
              value={provincia}
              onChange={handleChange}
              placeholder="Provincia"
            />
            <Box sx={{ display: "flex", gap: 5 }}>
              <Input name="ciudad" placeholder="Ciudad" variant="solid" />
              <Input
                name="codigoPostal"
                value={codigoPostal}
                onChange={handleChange}
                placeholder="Codigo Postal"
                variant="contained"
              />
            </Box>
            <Input
              name="direccion"
              value={direccion}
              onChange={handleChange}
              placeholder="Direccion de Calle"
            />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={product.image} style={{ height: "40px" }}></img>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.title}
                    </TableCell>
                    <TableCell align="center">{product.cantidad}</TableCell>
                    <TableCell align="center">${product.price}</TableCell>
                    <TableCell align="center">${product.cantidad * product.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box className={styles.boxFinalizarCompra}>
            <Typography variant="h4" color="primary">
              Finalizar Compra
            </Typography>
            <Typography variant="h5" color="initial">
              Total: ${priceCart}
            </Typography>
            <FormControl>
              <Divider sx={{ margin: 1 }} />
              <FormLabel id="demo-controlled-radio-buttons-group">Metodo de Pago</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="transferencia"
                  control={<Radio />}
                  label="Transferencia Bancaria"
                  name="metodoPago"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="efectivo"
                  name="metodoPago"
                  onChange={handleChange}
                  control={<Radio />}
                  label="Efectivo (Rosario)"
                />
              </RadioGroup>
              <Divider />
              <Button variant="contained" color="primary" onClick={enviarPedido}>
                Terminar Pedido
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
