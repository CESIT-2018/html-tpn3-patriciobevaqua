/*
Ejercicio 5:
Crear las siguientes funciones:
- Función que retornar un arrya todos los números pares que hay entre 1 y X
- Función quer retornar un array con todos los números impares entre 1 y X
- Función que retorna un array con todos los números primos entre 1 y X
- Función que retorna un array con todos los números no primos entre 1 y X
- Una función llamada integradora que recibe un número entero X y una función,  (par, impar, primo, no primo) y muestra el contenido del resultado de la función que le pasamos. 
*/

//let c = 100; // numeroHasta
let numerosPrimos = [];
let numerosNoPrimos = [];
let numerosPares = [];
let numerosImpares = [];

//Función números pares
function par(numero) {
  if (numero % 2 === 0) {
    return true;
  }

  return false;
}

//Función números primos
function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  if (numero === 1) {
    console.log(
      "Me has pasado el numero 1, recuerda que NO es un numero primo"
    );
  }
  return numero !== 1;
}

//--------------------------------------

/* 1: par
   2: impar
   3: primos
   4: no primos
*/
//llamo funcion integradora
integradora(1, par(20));    //si cambio el 20 acá, también cambiarlo en la variable d
integradora(2, par(20));
integradora(3, primo(20));
integradora(4, primo(20));

//-----------------------------------------
//--------Función integradora----------------------------------------------------------------------------------------
function integradora(c, funcion) {
  let j = 2; //numeroDesde  aplica a numeros primos y no primos
  let k = 1; //numeroDesde  aplica a numeros primos y no primos
  let d = 20; // les dice hasta donde llegar

  switch (c) {
    case 1: // pares
      //c = 100; // numeroHasta
      //j = 2; //numeroDesde -> aplica a numeros pares e impares
      // recorro los numeros para ver si son pares o impares
      for (; k <= d; k++) {
        if (par(k)) {
          numerosPares.push(k);
        }
      }

      console.log("Numeros Pares: " + numerosPares);
      break;
    case 2: // impares
      //j = 2; //numeroDesde -> aplica a numeros pares e impares
      // recorro los numeros para ver si son pares o impares
      for (; k <= d; k++) {
        if (!par(k)) {
          numerosImpares.push(k);
        }
      }

      console.log("Numeros Impares: " + numerosImpares);
      break;
    case 3: // primos
      // recorro los numeros para ver si son primos o no primos
      for (; j <= d; j++) {
        if (primo(j)) {
          numerosPrimos.push(j);
        }
      }

      console.log("Numeros Primos: " + numerosPrimos);
      break;
    case 4: //no primos
      // recorro los numeros para ver si son primos o no primos
      for (; j <= d; j++) {
        if (!primo(j)) {
          numerosNoPrimos.push(j);
        }
      }

      console.log("Numeros No Primos: " + numerosNoPrimos);
      break;
  }
}

//-----------------------------------------
