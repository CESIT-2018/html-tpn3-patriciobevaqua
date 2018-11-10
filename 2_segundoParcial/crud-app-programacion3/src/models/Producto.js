const mongoose = require('mongoose');
const {Schema} = mongoose;  //squema es una clase que vamos a usar

const productoSchema = new Schema({
  nombre: String,
  descripcion: String,
  stock: Number,
  precio: Number,
  isDone: { type: Boolean, default: false },
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('productos', productoSchema);
