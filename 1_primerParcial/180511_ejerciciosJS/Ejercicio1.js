/*
Ejercicio 1:
Crear una función que acepta una oración de tipo string como parámetro y busca  la palabra que tiene mayor longitud.
Ejemplo entrada: 'El desarrollo Web es entretenido' 
Salida: 'entretenido' 
*/

    function buscarPalabra(oracion) {
      const palabras=oracion.split(" ");   //split mete las palabras en un array
      let palabraMasLarga="";
      /*for(let i in palabras){ // i es el índice
        console.info(i);
      }*/
      for(let i in palabras){
       const paux= palabras[i];
        if (palabraMasLarga.length<paux.length){
          palabraMasLarga=paux;

        }


      }

      return palabraMasLarga;
    } 

    console.info("La palabra mas larga es: "+ buscarPalabra("el desarrollo web es entretenido"));  
    console.info("La palabra más larga es: "+ buscarPalabra("la programacion web es entretenida"));  
