/*
Ejercicio 2:
Dada una cantidad de dinero (entera) y un las monedas posibles, devolver la misma cantidad de dinero en monedas.
Ejemplo : dameMonedas(46, [25, 10, 5, 2, 1])
Donde 46 es la cantidad de plata. y 25, 10, 5, 2, 1 son las monedas que existen. 
Salida : 25, 10, 10, 1

*/


function cantMonedas(valor) {
  let resto = valor;
  const monedas = [];
  while (resto > 0) {
    if (resto > 25) {
      monedas.push(25);
      resto -= 25;
    } else if (resto > 10) {
      monedas.push(10);
      resto -= 10;
    } else if (resto > 10) {
      monedas.push(10);
      resto -= 10;
    } else if (resto > 5) {
      monedas.push(5);
      resto -= 5;
    } else if (resto > 2) {
      monedas.push(2);
      resto -= 2;
    } else if (resto >= 1) {  //si no le pongo el = entra en un bucle infinito
      monedas.push(1);
      resto -= 1;
    }
  }
  return monedas;
}
console.info(cantMonedas(65));
