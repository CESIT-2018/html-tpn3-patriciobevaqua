const mongoose = require('mongoose');
const {Schema} = mongoose;//obtiene esquema

const servicioEsquema = new Schema({
  nombre: String,
  descripcion: String,
  precioPorHora:Number,
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('servicios', servicioEsquema);
/*
TABLA SERVICIOS: 
  nombre: String
  descripcion: String
  precioPorHora:Double
*/