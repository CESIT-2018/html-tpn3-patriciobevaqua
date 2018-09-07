import React, { Component } from "react";
import axios from 'axios';  // permite hacer request a api rest

import Titulo from "./Titulo";
import Subtitulo from "./Subtitulo";
import Tabla from "./Tabla";
import Boton from "./Boton";
class App extends Component {
  state = {
      miSubtitulo:"Este es mi subtitulo",
      tieneSubtitulo: true
  };

  /* miMetodo = () => {
    alert("esto es una función hash con callback en componente App");
  };*/

  /* olvidarlo axios
  llamarAPI = async ()=>{
  const res= await axios.get("http://localhost:5000/api/productos");
  console.info('Respuesta',res);
  }
*/

  miMetodo = () => {
    this.setState({miSubtitulo: "nuevo"+ new Date()});
    this.setState({tieneSubtitulo: !this.state.tieneSubtitulo});
    //this.llamarAPI();  olvidarlo axios
};

renderSubtitulo(){
  if (this.state.tieneSubtitulo){
            return (<Subtitulo nombre={this.state.miSubtitulo}/>);

  }
  return(<div>NO!</div>);
}
  render() {
    //método que tiene return y devueve html
    return (
      <div>
        <h1>First Application - Nuevo Título</h1>
        <Titulo cadenaT="2, probando propiedades en Titulo" />
        {this.renderSubtitulo()}
        <Tabla />
        <Boton nombre="Este es el boton 1" hacerClick={this.miMetodo} />
        <Boton nombre="Este es el boton 2" />
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }
}

export default App;

//<Subtitulo cadena="1, probando propiedades en Subtitulo" nombre={this.state.miSubtitulo} />