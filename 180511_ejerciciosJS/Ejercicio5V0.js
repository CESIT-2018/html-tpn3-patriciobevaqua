/*
Ejercicio 5:
Crear las siguientes funciones:
- Función que retornar un arrya todos los números pares que hay entre 1 y X
- Función quer retornar un array con todos los números impares entre 1 y X
- Función que retorna un array con todos los números primos entre 1 y X
- Función que retorna un array con todos los números no primos entre 1 y X
- Una función llamada integradora que recibe un número entero X y una función,  (par, impar, primo, no primo) y muestra el contenido del resultado de la función que le pasamos. 
*/

//Función que retorna un array con todos los números primos entre 1 y X
let c = 100; // numeroHasta
let j = 2; //numeroDesde  aplica a numeros primos y no primos
let numerosPrimos = [];
let numerosNoPrimos = [];
let numerosPares = [];
let numerosImpares = [];

// recorro los numeros para ver si son primos o no primos
for (; j <= c; j++) {
  if (primo(j)) {
    numerosPrimos.push(j);
  } else {
    numerosNoPrimos.push(j);
  }

  /*if (par(j)) {
    numerosPares.push(j);
  }else{numerosImpares.push(j);}*/
}

console.log("Numeros Primos: " + numerosPrimos);
console.log("Numeros No Primos: " + numerosNoPrimos);

//c = 100; // numeroHasta
j = 2; //numeroDesde -> aplica a numeros pares e impares
// recorro los numeros para ver si son pares o impares
for (; j <= c; j++) {
  if (par(j)) {
    numerosPares.push(j);
  } else {
    numerosImpares.push(j);
  }
}

console.log("Numeros Pares: " + numerosPares);
console.log("Numeros Impares: " + numerosImpares);

/*for (; j <= c; j++) {
  if (!(primo(j))) {
    numerosNoPrimos.push(j);
  }
}
console.log(numerosNoPrimos);
*/
//-----------------------------------------

//Función números pares
function par(numero) {
  //console.log("Has pasado el numero: " + numero);
  //console.log("Inicio bucle desde 2 hasta " + (numero - 1));

  //for (let i = 2; i < numero; i++) {
  //console.log("Modulo entre " + numero + " y " + i + " = " + numero % i);

  if (numero % 2 === 0) {
    /*console.log(i + " es un multiplo de " + numero);
      console.log(
        numero + " no es un numero par porque " + i + " es un multiplo"
      );
      console.log("-------------------------------------");*/
    return true;
  }
  //}

  /*if (numero === 1) {
    console.log(
      "Me has pasado el numero 1, recuerda que NO es un numero par"
    );
  } else {
    console.log(
      "Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero par."
    );
  }

  console.log("-------------------------------------");*/
  return false;
  //return numero !== 1;
}

//Función números primos
function primo(numero) {
  //console.log("Has pasado el numero: " + numero);
  //console.log("Inicio bucle desde 2 hasta " + (numero - 1));

  for (let i = 2; i < numero; i++) {
    //console.log("Modulo entre " + numero + " y " + i + " = " + numero % i);

    if (numero % i === 0) {
      /*console.log(i + " es un multiplo de " + numero);
      console.log(
        numero + " no es un numero primo porque " + i + " es un multiplo"
      );
      console.log("-------------------------------------");*/
      return false;
    }
  }

  if (numero === 1) {
    console.log(
      "Me has pasado el numero 1, recuerda que NO es un numero primo"
    );
  } /*else {
    console.log(
      "Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo."
    );
  }

  console.log("-------------------------------------");*/

  return numero !== 1;
}
