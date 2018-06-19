const express = require("express"); //importa la librería express
const app = express(); //crea una instancia de express que se asigna a la variable app


app.get("/usuarios", (req, res) => {
  let html = "<h1>Buen día</h1>";
  if (req.query && req.query.nombre) {
    html += `Usted es ${req.query.nombre}`; // ` se utiliza para escapar código y poner variables -> $ {req.query.nombre}
  }
  res.send(html);
});


app.listen(3000, () => console.info("Iniciando en puerto 3000"));  //entra en un bucle y se queda escuchando
