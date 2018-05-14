/*
Ejercicio 5:
Crear las siguientes funciones:
- Una función llamada integradora que recibe un número entero X y una función,  (par, impar, primo, no primo) y muestra el contenido del resultado de la función que le pasamos. 
- Función que retornar un arrya todos los números pares que hay entre 1 y X
- Función quer retornar un array con todos los números impares entre 1 y X
- Función que retorna un array con todos los números primos entre 1 y X
- Función que retorna un array con todos los números no primos entre 1 y X

*/

//let c = 100; // numeroHasta
let numerosPrimos = [];
let numerosNoPrimos = [];
let numerosPares = [];
let numerosImpares = [];

//Función números pares
function par(tope, array1, array2) {
  // recorro los numeros para ver si son pares o impares
  let k = 1; //numeroDesde  aplica a numeros pares y no pares
  for (; k <= tope; k++) {
    if (k % 2 === 0) {
      array1.push(k);
    } else {
      array2.push(k);
    }
  }
}

//Función números primos
function primo(tope, array1, array2) {
  // recorro los numeros para ver si son primos o no primos
  let j = 2; //numeroDesde  aplica a numeros primos y no primos
  
  for (; j <= tope; j++) {
    noImpar=false;  //booleano
    numero = j;
    if (numero === 1) {
      console.log(
        "Me has pasado el numero 1, recuerda que NO es un numero primo"
      );
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          noImpar = true;
          break;
        }
      }
      if (noImpar===true) {array2.push(numero);}else{
      array1.push(numero);}
    }
  }
}

//--------------------------------------

par(100, numerosPares, numerosImpares);
primo(100, numerosPrimos, numerosNoPrimos);
console.log("Numeros Primos: " + numerosPrimos);
console.log("Numeros No Primos: " + numerosNoPrimos);
console.log("Numeros Pares: " + numerosPares);
console.log("Numeros Impares: " + numerosImpares);

//-----------------------------------------
