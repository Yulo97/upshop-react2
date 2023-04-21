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

1. slick-carousel: Se usa esta libreria para hacer el Carousel del Index.
2. react-toastify: Notificaciones tipo "toasty" para alertas al agregar y eliminar productos del Carro.
3. Material UI: Maquetacion del sitio.

### Falta realizar

- Descontar productos desde /cart ✔
- Cerrar el carrito al ir a /cart ✔
- Pagina de error 404 ✔
- Agregar Stock a productos en Firebase ✔
- Enviar pedidos a Firestore y descontar del stock productos solicitados ✔
- Poner carrito en el LocalStorage ✔
- Agregar Toasty para eliminacion de productos ✔
- Pagina de compra exitosa devolviendo el ID del pedido ✔
- No funciona el LOADING en ItemListContainer ✔
- Emprolijar todos los CATCH ✔
- Subir a Vercel o Netlify ✔
- Hacer un README al terminar el proyecto (con MarkedDown) ✔
