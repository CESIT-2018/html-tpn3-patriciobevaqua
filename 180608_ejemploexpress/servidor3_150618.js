const PORT=5000;
const express = require("express"); //importa la librería express
const app = express(); //crea una instancia de express que se asigna a la variable app


app.get("/", (req, res) => {
  let html = "<h1>Hola</h1>";
  res.send(html);
});


app.listen(PORT, () => console.info(`Iniciando en puerto ${PORT}`));  //entra en un bucle y se queda escuchando
