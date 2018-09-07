import React, { Component } from "react";

class Boton extends Component {
  render() {
    //método que tiene return y devueve html
    return (
      <div>
        <button type="button" className="btn btn-warning">
          Warning
        </button>{" "}
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }
}

export default Boton;
