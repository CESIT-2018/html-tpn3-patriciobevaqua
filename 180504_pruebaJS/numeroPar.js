/*
- Función que retornar un arrya todos los números pares que hay entre 1 y X
- Función quer retornar un array con todos los números impares entre 1 y X
*/

let c = 100; // numeroHasta
let j = 2;  //numeroDesde
let numerosPares = [];
let numerosImpares = [];


// recorro los numeros para ver si son pares o impares
for (; j <= c; j++) {
  if (par(j)) {
    numerosPares.push(j);
  }else{numerosImpares.push(j);}
}

console.log("Numeros Pares: "+numerosPares);
console.log("Numeros Impares: "+numerosImpares);

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

