const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactoSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  telefono: Number,
  consulta: String,
  createdAt: Date,
  updatedAt: Date
  
});

mongoose.model('contactos', contactoSchema);
