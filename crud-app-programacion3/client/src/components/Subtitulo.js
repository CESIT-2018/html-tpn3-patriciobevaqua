import React, { Component } from "react";

class Subtitulo extends Component {
  getMensaje() {
    return "Este es mi nuevo subtitulo. Actualizado!";
  }

  getHtml() {
    return <h3> {this.getMensaje()} </h3>;
  }

  /* render() {          //método de js que tiene return y devueve html
        return (
            <div>
                <h3>Este es el Subtítulo</h3>
            
            </div>
        );   //siempre devuelve un elemento (no mas de uno)
    }*/
  render() {
    //método de js que tiene return y devueve html
    return (
      <div>
          {this.props.nombre}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }
}

export default Subtitulo;

//{this.getHtml()}
//<h1>{this.props.cadena} </h1> 