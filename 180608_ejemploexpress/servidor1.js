const express = require("express"); //importa la librería express
const app = express(); //crea una instancia de express que se asigna a la variable app
const getHomeCallback = (req, res) => {
  //variable (funcion callback) que tiene como  parametros funciones request y response
  console.info("Hola mundo desde Express");
  res.send("Hola!!");
};

app.get("/", getHomeCallback); //es un callback que se hace con una instancia de express llamada app   y le estamos diciendo que ejecute el callback

app.get("/productos", (req, res) => {
    let html="<h1>Productos</h1>";
    res.send(html);
});

app.use(express.static("public"));   //le estamos diciendo que esta carpeta la tome como recursos estáticos

app.listen(3000, () => console.info("Iniciando en puerto 3000"));
