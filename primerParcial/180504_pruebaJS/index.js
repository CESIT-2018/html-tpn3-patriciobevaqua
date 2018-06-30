console.info("HOla mUndo");
let nombre = "Hugo";
const PI = 3.14;
console.info("Hola " + PI);
console.info("Hola ", PI);
//PI=32;  NO PUEDO MODIFICARLA PORQUE DA ERROR
//JAVA SCRIPT NO COMPILA, ES DECIR, ES INTERPRETADO => LOS ERRORES LOS VEMOS EN TIEMPO DE EJECUCIÓN
console.info(typeof nombre);
console.info(typeof PI);

let i = "1";
let j = 1;
console.log(i + j); //11 concatena los datos de las dos variables
console.log(parseInt(i) + j); //2 en entero
let esHombre = true;
if (esHombre) {
  console.info("Hombre!!");
} else {
  console.info("Mujer!!");
}
let a;
console.info(a); // va a indicar que no tiene dato y por lo tanto no está definida  no se puede a=undefined ESTA MAL!! Se debe poner a=null
console.info(a == null); //true
console.info(a === null); //false el triple igual (===) valida que sea igual y del mismo tipo.

// las sentencias if no sólo se resuelven con una condición que resuelva verdadero o falso, sino que también puede afectar el null y pasar a la sentencia else

if (nombre) {
  //va a ser falso si la variable es undefined, cero o null; cualquier otro caso da verdadero
  console.info("Hombre!!");
} else {
  console.info("Mujer!!");
}
//Ejemplo de función:
function saludar(nombre) {
  console.info("Hola " + nombre);
}

saludar("Juan");
saludar("Carolina");

// para saludar a varios podemos hacerlo desde un array
const lista = ["Juan", "Carolina", "Pedro", "Victor", "Rafael", "Mariana"];

for (let i = 0; i < lista.length; i++) {
  saludar(lista[i]);
}

for (let i in lista) {
  saludar(lista[i]);
}
//otra forma de iterar comun en java script es la función ARROW
lista.map(val => {
  saludar(val);
}); //SI va en una sola linea se pueden obviar las {} y sin el ; previo a la llave final
