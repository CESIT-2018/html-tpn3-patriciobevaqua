//import { WSATYPE_NOT_FOUND } from "constants";

const express = require("express"); //importa la librería express
const app = express(); //crea una instancia de express que se asigna a la variable app

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //let html = "<h1>Hola</h1>";
  res.render(`index`,{nombre:"Juan",materias:["Algoritmo","Diseño"]});     //  reemplazamos res.send(html);
});

app.use (express.static("pubic")); //nos da acceso a la carpeta publica

app.listen(5000, () => console.info("Iniciando en puerto 5000"));  //entra en un bucle y se queda escuchando
