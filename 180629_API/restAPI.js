const PORT = 3000;
const express = require("express"); //importa la librería express
const app = express(); //crea una instancia de express que se asigna a la variable app

//app.set("view engine", "ejs");
// inicio acá vamos a poner el código para los post
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const agregarProducto = prod => {
  if (typeof prod == "object" && prod.nombre) {
    prod.id = listaProductos.length + 1;
    listaProductos.push(prod);
    return prod;
  }
  return null;
};

// fin código para los post

// inicio acá vamos a poner el código para los get
const listaProductos = [
  {
    id: 1,
    nombre: "Producto1"
  },
  {
    id: 2,
    nombre: "Producto2"
  },
  {
    id: 3,
    nombre: "Producto3"
  }
];

const getProducto = id => {
  return listaProductos.find(p => p.id == id);
  /* for(let i in listaProductos){
    if (listaProductos[i].id==id){
        return listaProductos[i];
    }
  }
  return null;
  */
};

// fin lugar código

app.get("/productos", (req, res) => {
  //res.send("Obteniendo productos");
  //res.send({ mensaje: "Hola" }); //TODO:estamos enviando un json, en el postman hay que explicitar que es cadena lo que enviamos
  console.info("probando un get"); // será borrado cuando implementemos MIDDLEWARES
  res.send(listaProductos);

  /*const productosArr=[{nombre:"Prod1",cantidad:150},{nombre:"Prod2",cantidad:200},{nombre:"Prod3",cantidad:250},{nombre:"Prod4",cantidad:350}];

    res.render(`productos`,{productos:productosArr});    */
});

app.get("/productos/:id", (req, res) => {
  //este va a consultar por id
  //res.send({ mensaje: "get - consultar por producto" });
  console.info("probando el get por producto"); // será borrado cuando implementemos MIDDLEWARES
  const producto = getProducto(req.params.id);
  if (producto) {
    res.status(200).send(producto);
  } else {
    res
      .status(404)
      .send({ mensaje: `no encuentro producto por id= ${req.params.id}` });
  }
});

app.post("/productos", (req, res) => {
  //res.send({ mensaje: "Post - Enviar/crear" });
  const producto = agregarProducto(req.body);
  if (producto) {
    res.status(201).send(producto);
  } else {
    res.status(400).send({ mensaje: `El producto no puede ser creado` });
  }
});

app.put("/productos/:id", (req, res) => {
  res.send({ mensaje: "put - Actualizar por producto" });
});

app.delete("/productos/:id", (req, res) => {
  res.send({ mensaje: "Delete - borrar por producto" });
});

/*
app.get("/", (req, res) => {
  //let html = "<h1>Hola</h1>";
  res.render(`index`,{nombre:"Juan",materias:["Algoritmo","Diseño"]});     //  reemplazamos res.send(html);
});

app.use (express.static("pubic")); //nos da acceso a la carpeta publica
*/

app.listen(PORT, () => console.info(`Iniciando en puerto ${PORT}`)); //entra en un bucle y se queda escuchando
