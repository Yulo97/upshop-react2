## Ecommerce // UP-Shop

Para correr el proyecto ejecutar el comando desde la consola (ubicandose en la carpeta raiz del proyecto): npm run dev

### FIRESTORE

Existen 2 tablas en FireStore

1. ITEMS

- Total informacion de los Productos: Nombre, URL de Imagen, Categoria, Descripcion, Precio
- Cuando se realiza un Pedido se descuenta automaticamente la cantidad de cada producto solicitado.
- Sirve para llevar un control de los productos e imprimirlos en el sitio.

2. ORDERS

- Se guardan los pedidos realizado por los clientes
- Se guarda toda la informacion detallada de cada cliente, tanto personal como la direccion de envio (opcional) y facturacion.
- Se guarda el CART entero del pedido para la preparacion del pedido.

### LIBRERIAS ADICIONALES

1. slick-carousel: Se usa esta libreria para hacer el Carousel del Home.
2. react-toastify: Notificaciones tipo "toasty" para alertas al agregar, eliminar productos del Carro y alertas de validacion.
3. Material UI: Maquetacion del sitio.
