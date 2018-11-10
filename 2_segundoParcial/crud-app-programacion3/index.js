const express = require("express");     
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");    //va a importar en la carpeta source el conf-> va a ir a buscar el archivo index porque no especifique y ese indexx importa el dev. luego dev importan un json que va a tener puerto y url a la BD

require('./src/models/Todo');
require('./src/models/Producto');

mongoose.Promise = global.Promise;   //configuraciones para que resuelva las promesas mongoose
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });  //conectate a esa url y luego es para resolver las promesas

const app = express();
app.use(bodyParser.json());

require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);

app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));  //escucha en los key y en los puertos