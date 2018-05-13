/*
Ejercicio 4:
Dado dos arrays con valores individuales, hacer una función que retorne un array con la suma de cada valor individual del mismo índice de cada array.
Ejemplo : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Salida : 
[4, 5, 8, 10, 12, 13] 

*/
arr1 = [1, 0, 2, 3, 4];
arr2 = [3, 5, 6, 7, 8, 13];
const resultado = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.length < arr2.length) {
      arr1.push(0);
    } else if (arr2.length < arr1.length) {
      arr2.push(0);
    }
    resultado[i] = arr1[i] + arr2[i];
  }
}
console.log(resultado);
console.info(resultado);
