const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactoSchema = new Schema({
  nombre: String,
  apellio: String,
  email: String,
  telefono: Number,
  createdAt: Date,
  updatedAt: Date
  
});

mongoose.model('contactos', productoSchema);
