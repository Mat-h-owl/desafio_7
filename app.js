//Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080
import express from "express";
import { productos } from "../desafio_6/app.js";

let random = Math.floor(Math.random() * productos.length);
let contador1 = 0, contador2 = 0;

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor inicializado en puerto ${server.address().port}`);
})

//1)Ruta get "/items" que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos)}
app.get("/items", (req, res) => {
    
    res.send({ items: productos, cantidad: productos.length });
})

//2)Ruta get "/item-random" que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo "productos.txt". El formato de respuesta será: { item: {producto}}
app.get("/item-random", (req, res) => {
    let random = Math.floor(Math.random() * productos.length)
    res.send({ item: productos[random] });
    if(productos[random].id === 1){
        ++contador1;
    }
    if(productos[random].id === 2){
        ++contador2;
    }
})

//3)La ruta get "/visitas" devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 2. Contestar con el formato: {visitas: {items: cantidad, item: cantidad}}
app.get("/visitas", (req, res) => {
    res.send({ visitas: { items: contador1, item: contador2 } });
})