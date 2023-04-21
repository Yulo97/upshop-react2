const productos = [
    {
        category: "abrigos",
        description: "Color blanco y verde con logo.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/4af13617-bdb8-48f8-a863-88d5718bfd011-c274be8ecbd25b3ddd16779396769679-320-0.webp",
        price: 9800,
        title: "Buzo Boston",
        stock: 100

    },
    {
        category: "abrigos",
        description: "Chaqueta color amarilla plastificada importada.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/2086c30a-3a08-464a-b851-64d7c91ee646-5abcd9d7dd2f81cb4416779419057428-320-0.webp",
        price: 22900,
        title: "Chaqueta Millenium",
        stock: 100

    },
    {
        category: "remeras",
        description: "Color blanco. Excelente calidad.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/49dc6587-f48e-482a-b6d4-a5d4af7b419c1-1a588262520a4edd0716620512656981-320-0.jpeg",
        price: 3400,
        title: "Remera Lisa Basica",
        stock: 100

    },
    {
        category: "remeras",
        description: "Remera color azul con cuello.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/87ee70bc-f34b-446e-82d6-0a976a5ce9741-481190efb4bd16c5a716801839252353-320-0.webp",
        price: 4100,
        title: "Remera Pretty",
        stock: 100

    },
    {
        category: "pantalones",
        description: "Color Negro, re lindo",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/64cbec8b-ed7c-4106-a950-7437de6247761-08a647f446a96c05b916606773703372-320-0.jpeg",
        price: 13200,
        title: "Pantalon Siri",
        stock: 100
    },
    {
        category: "pantalones",
        description: "Hecho de material increible y elastico",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/292825181_605842984459372_7781101284043311531_n1-681d8d6c063b8e8e3616606713779650-320-0.jpg",
        price: 11500,
        title: "Pantalon Carpintero",
        stock: 100
    },
    {
        category: "monoprendas",
        description: "Vestido elastico color piel",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/60191fac-4b1f-4a84-a582-db2f1bdc0eb71-e936ad1772ef9bcff416779413408817-320-0.webp",
        price: 18900,
        title: "Vestido Navi",
        stock: 100
    },
    {
        category: "monoprendas",
        description: "Negro simir cuero sintetico con aberturas",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/6fa7426e-e832-4de5-b5d9-c1c3789951771-ec2f6da1e02489b4ed16779415354616-320-0.webp",
        price: 17500,
        title: "Vestido Giordano's",
        stock: 100
    },
    {
        category: "accesorios",
        description: "Perfecto para el sol, lavar con agua fria.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/2b858e2b-c908-4e6a-ab16-c9feafd0915e1-dfe8381e246adbec8916777670531794-320-0.webp",
        price: 3500,
        title: "Piluso Vito",
        stock: 100
    },
    {
        category: "accesorios",
        description: "Bandolera super facha para combinar con cualquier cosa.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/622a0652-f000-446e-840c-47100e5b77f61-1f8e884557e07d45bc16521108537958-320-0.jpeg",
        price: 4200,
        title: "Bandolera Nuria",
        stock: 100
    },
    {
        category: "musculosas",
        description: "Apretado al cuerpo en color piel.",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/6b98e508-1c41-4aa6-ab0e-ba7dabfae5201-626c7e491a3870527816533137051600-320-0.jpeg",
        price: 6300,
        title: "Musculosa Pretty Piel",
        stock: 100
    },
    {
        category: "musculosas",
        description: "Color azul con estampado de los Rolling Stone",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/324/541/products/afb2278a-ad80-4a53-a4e5-2b40fdbf9b7d1-dd6a60f226d45660fe16681744866020-320-0.jpeg",
        price: 6200,
        title: "Remera Pretty Rolling",
        stock: 100
    }
]

import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js"

const coleccion = collection(db, "items")

productos.forEach(async (producto) => {
    await addDoc(coleccion, producto);
});
