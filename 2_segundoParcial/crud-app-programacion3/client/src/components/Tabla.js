import React, { Component } from "react";
/*import ReactDOM from 'react-dom'; */

const productosArr = [
  {
    nombre: "Publicaciones",
    descripcion: "Son publicaciones técnicas de editorial Errepar"
  },
  { nombre: "Seguros", descripcion: "Abarcamos ramas de seguros personales" },
  {
    nombre: "Publicaciones02",
    descripcion: "parturient phasellus nullam pellentesque nisl"
  },
  {
    nombre: "Seguros02",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing"
  },
  {
    nombre: "Publicaciones03",
    descripcion: "varius venenatis hac. Sapien magnis blandit luctus tortor"
  },
  {
    nombre: "Seguros03",
    descripcion: "elit tincidunt imperdiet, conubia neque habitasse"
  },
  {
    nombre: "Publicaciones04",
    descripcion: "ut conubia curabitur, pellentesque vel convallis eros natoque"
  },
  {
    nombre: "Seguros04",
    descripcion: "velit magna eros torquent vitae pulvinar"
  }
];

class Tabla extends Component {
  getFilas() {
    const f = productosArr.map(p => {
      return (
        <tr>
          <td>{p.nombre}</td>
          <td>
            <b>{p.descripcion}</b>
          </td>
        </tr>
      );
    });
    return f;
  }

  /*
  getFilas1() {
    let f;
    for (let i = 0; i < productosArr.length; i++) {
      f += (
        <tr>
          <td>{productosArr[i].nombre}</td>
          <td>
            <b>{productosArr[i].descripcion}</b>
          </td>
        </tr>
      );
    }
    return f;
  }

  getFilas2() {
    let f = "";

    for (let p in productosArr) {
      f += (
        <tr>
          <td>{console.log(productosArr[p].nombre)}</td>
          <td>
            <b>{console.log(productosArr[p].descripcion)}</b>
          </td>
        </tr>
      );
    }
    document.write(f);
    return f;
  }

  getFilas3() {
    for (let i = 0; i < productosArr.length; i++) {
      return (
        <tr>
          <td>{productosArr[i].nombre}</td>
          <td>
            <b>{productosArr[i].descripcion}</b>
          </td>
        </tr>
      );
    }
  }

  getFilas4() {
    for (let i in productosArr) {
      console.log(productosArr[i].href);
    }
  }

  getFilas5() {
    JSON.stringify(productosArr);
  }
*/
  getHtmlFilas() {
    return (
      <div>
        <h1>Nuestros Productos:</h1>
        <br />

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {this.getFilas()}

            <tr>
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    //método de js que tiene return y devueve html
    return this.getHtmlFilas(); //siempre devuelve un elemento (no mas de uno)
  }
}

export default Tabla;
