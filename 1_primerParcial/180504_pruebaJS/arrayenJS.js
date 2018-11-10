const array=[10,20,30,40,50];
console.info(array.slice(0,1)); // 10  -> devuelve el primer elemento del array
console.info(array); //   -> muestra por consola el contenido del array
console.info(array.pop()); // 50  -> devuelve el úlltimo elemento del array y lo extrae del array
console.info(array); //   -> muestra por consola el contenido del array
//console.info(array.map(2));  // 10 devuelve el valor contenido en el ídnice indicado 
array.push(50,60);   // carga 50 y 60 al array
console.info(array);
