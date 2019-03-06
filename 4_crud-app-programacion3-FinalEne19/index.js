const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");

require('./src/models/Todo');
require('./src/models/Producto');
require('./src/models/Servicio');
require('./src/models/Contacto');
require('./src/models/Usuario');


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);
require('./src/routes/servicioRoutes')(app);
require('./src/routes/contactoRoutes')(app);
require('./src/routes/usuarioRoutes')(app);

app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));