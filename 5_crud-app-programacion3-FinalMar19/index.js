const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");
const passport=require('passport');




require('./src/models/Todo');       //mongoose toma el esquema del todo
require('./src/models/Producto');
require('./src/models/Servicio');
require('./src/models/Contacto');
require('./src/models/Usuario');
require('./src/models/User');

const users = require('./src/routes/user'); 

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./src/passport')(passport);



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('hello');
});



require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);
require('./src/routes/servicioRoutes')(app);
require('./src/routes/usuarioRoutes')(app);





app.listen(keys.PORT, () => console.info(`The server Listen in ${keys.PORT}`));