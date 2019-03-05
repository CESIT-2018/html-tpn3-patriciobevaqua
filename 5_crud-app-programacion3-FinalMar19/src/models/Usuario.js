const mongoose = require('mongoose');   // acá ponemos nombre a  colección que va a tener la base de datos y  modelo que va a tener cada documento
const {Schema} = mongoose;

const usuarioSchema = new Schema({
  nombreUser: String,
  apellidoUser: String,
  emailUser: String,
  clave: Number,
  createdAt: Date,
  updatedAt: Date
  
});

const User=mongoose.model('usuarios', usuarioSchema);
module.exports=User;

//mongoose.model('usuarios', usuarioSchema);