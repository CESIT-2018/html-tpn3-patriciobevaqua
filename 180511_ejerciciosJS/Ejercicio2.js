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
