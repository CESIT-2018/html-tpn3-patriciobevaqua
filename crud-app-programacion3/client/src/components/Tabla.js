import React, {Component} from 'react';

const productosArr=[{nombre:"Publicaciones",descripcion:"Son publicaciones técnicas de editorial Errepar"},{nombre:"Seguros",descripcion:"Abarcamos ramas de seguros personales"},
{nombre:"Publicaciones02",descripcion:"parturient phasellus nullam pellentesque nisl"},{nombre:"Seguros02",descripcion:"Lorem ipsum dolor sit amet consectetur adipiscing"},
{nombre:"Publicaciones03",descripcion:"varius venenatis hac. Sapien magnis blandit luctus tortor"},{nombre:"Seguros03",descripcion:"elit tincidunt imperdiet, conubia neque habitasse"},
{nombre:"Publicaciones04",descripcion:"ut conubia curabitur, pellentesque vel convallis eros natoque"},{nombre:"Seguros04",descripcion:"velit magna eros torquent vitae pulvinar"}];


class Tabla extends Component {


/**
 * getFilas(){
  
const f;
    
for(const p in productosArr) {
  
    f+=<tr><td>{p.nombre}</td><td><b>{p.descripcion }</b></td></tr>;
    
    }
    return(f);

}
 */

getFilas(){
    
    for(let i=0; i<productosArr.length;i++) {
    return(
    <tr>
           <td>
            {productosArr[i].nombre}
           </td>
           <td>
               <b>
                   { productosArr[i].descripcion }
               </b>
           </td>

       </tr>
    );
    }
}

render() {          //método de js que tiene return y devueve html
    return (
 
<div>
       <h1>Nuestros Productos:</h1>
       <br/>

       <table class="table">
           <thead>
               <tr>
                   <th scope="col">Producto</th>
                   <th scope="col">Descripción</th>

               </tr>
           </thead>
           <tbody>

               {this.getFilas()}
               
                       <tr>
                           <td></td>
                           <td></td>

                       </tr>
           </tbody>
       </table>

   </div>

      
);   //siempre devuelve un elemento (no mas de uno)
}

}

export default Tabla    ;