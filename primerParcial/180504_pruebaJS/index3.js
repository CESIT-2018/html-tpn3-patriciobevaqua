// clase persona  nombre, peso, edad  funciones: hablar, presentarse
// clase perro                        funciones: hablar, presentarse
// clase animal                       funciones: presentarse
class Persona {
  
    constructor(n) {
    console.info("yo soy persona");
    this.nombre = n;
  }

  saludar() {
    console.info("Hola soy! " + this.nombre);
  }
}

const p1 = new Persona("Juan");
p1.saludar();
console.info(p1);

console.info(JSON.stringify(p1));  //JSON es la representación de un objeto stringify imprime la estructura del objeto

const p2 = new Persona();
console.info(JSON.stringify(p2));
