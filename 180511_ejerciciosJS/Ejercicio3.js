/*
Ejercicio 3:
Crear una función que retorne el primer elemento de un array. Si a la función le pasamos un segundo parámetro n (entero) nos retornará los n primeros elementos.
Datos de prueba : 
console.log(primer([7, 9, 0, -2])); 
console.log(primer([],3));
console.log(primer([7, 9, 0, -2],3));
console.log(primer([7, 9, 0, -2],6));
console.log(primer([7, 9, 0, -2],-3));
Salida : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
 */

/**
 *
 * @param {*} array
 * @param {*} param1
 * @param {*} n
 */

/*function primerElemento(array[],n){
if(!n && array && array.length>0){

return array[0];


}else if(n && array && array.length>0 && array.length<=n){

return array.splice(0,n);

}else{return null;}


}*/

primer = function(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0]; //primer elemento
  if (n < 0) return [];
  return array.slice(0, n);  //slice se cargan dos datos: el nro del primer elemento y el numero del ultimo elemento que se desea del array
};

console.log(primer([7, 9, 0, -2]));
console.log(primer([], 3));
console.log(primer([7, 9, 0, -2], 3));
console.log(primer([7, 9, 0, -2], 6));
console.log(primer([7, 9, 0, -2], -3));
