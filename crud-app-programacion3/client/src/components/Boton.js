import React, { Component } from "react";

class Boton extends Component {
  /*  manejarEvento = () => {
    alert("esto es una función hash con callback en boton");
  } */

  manejarEvento1 = () => {
    this.props.hacerClick();
  };

  render() {
    //método que tiene return y devueve html
    return (
      <div>
        <button
          type="button"
          className="btn btn-warning"
          /*onClick={this.manejarEvento1} */
          onClick={this.manejarEvento1}
        >
          {this.props.nombre}
        </button>{" "}
        
        <button type="button" class="btn btn-primary">
        {this.props.nombre2}

        </button>
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }
}

export default Boton;
