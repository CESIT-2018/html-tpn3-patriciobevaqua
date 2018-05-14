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

console.log(integradora(100));

function integradora(c, callback, callback) {
  let numerosPrimos = [];
  let numerosNoPrimos = [];
  let numerosPares = [];
  let numerosImpares = [];
  let j = 2; //numeroDesde  aplica a numeros primos y no primos
  let k = 1; //numeroDesde  aplica a numeros primos y no primos

  // recorro los numeros para ver si son primos o no primos
  for (; j <= c; j++) {
    if (primo(j)) {
      numerosPrimos.push(j);
    } else {
      numerosNoPrimos.push(j);
    }

    
  }

  console.log("Numeros Primos: " + numerosPrimos);
  console.log("Numeros No Primos: " + numerosNoPrimos);

  //c = 100; // numeroHasta
  //j = 2; //numeroDesde -> aplica a numeros pares e impares
  // recorro los numeros para ver si son pares o impares
  for (; k <= c; k++) {
    if (par(k)) {
      numerosPares.push(k);
    } else {
      numerosImpares.push(k);
    }
  }

  console.log("Numeros Pares: " + numerosPares);
  console.log("Numeros Impares: " + numerosImpares);
}
//-----------------------------------------
