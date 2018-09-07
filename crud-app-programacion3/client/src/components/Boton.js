import React, { Component } from "react";

class Boton extends Component {

  /*  manejarEvento = () => {
    alert("esto es una función hash con callback en boton");
  } */

  manejarEvento1 = () => {
    this.props.hacerClick();
  }


  render() {
    //método que tiene return y devueve html
    return (
      <div>
        <button
          type="button"
          className="btn btn-warning"
          /*onClick={this.manejarEvento} */
          onClick={this.manejarEvento1}
        >
          {this.props.nombre}
        </button>{" "}
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }

}

export default Boton;
