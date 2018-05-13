/*
Ejercicio 4:
Dado dos arrays con valores individuales, hacer una función que retorne un array con la suma de cada valor individual del mismo índice de cada array.
Ejemplo : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Salida : 
[4, 5, 8, 10, 12, 13] 

*/
function sumaArray(array1, array2) 
{
  const resultado = []; //declaro e inicializo array
  let control = 0;
  let i=0;

  if (array1.length === 0) 
   return "array1 está vacío";
  if (array2.length === 0) 
   return "array2 está vacío";   
  
   /* if (array1.length > array2.length) 
   return "Por favor, ingrese primero el arreglo más corto";   */

 while (control < array1.length && control < array2.length)  //se hace el control compuesto para poder entrar al while
  {
    resultado.push(array1[control] + array2[control]);
    control++;
  }

 if (control === array1.length) 
 {
    for (i = control; i < array2.length; i++)   {
      resultado.push(array2[i]);
    }
  } 
  else
  {
  for (i = control; i < array1.length; i++) 
    {
      resultado.push(array1[i]);
    }
  }
  return resultado;
}

console.log(sumaArray([1,0,2,3,4], [3,5,6,7,8,13]));