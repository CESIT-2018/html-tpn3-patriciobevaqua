
    function buscarPalabra(oracion) {
      const palabras=oracion.split(" ");   //split mete las palabras en un array
      let palabraMasLarga="";
      /*for(let i in palabras){ // i es el índice
        console.info(i);
      }*/
      for(let i in palabras){
       const pa= palabras[i];
        if (palabraMasLarga.length<pa.length){
          palabraMasLarga=pa;

        }


      }

      return palabraMasLarga;
    } 

console.info(buscarPalabra("la programacion web es entretenida"));  
