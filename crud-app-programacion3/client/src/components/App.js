import React, { Component } from "react";
//import axios from 'axios';  // permite hacer request a api rest

import Titulo from "./Titulo";
import Subtitulo from "./Subtitulo";
import Tabla from "./Tabla";
import Boton from "./Boton";
class App extends Component {
  state = {
    miSubtitulo: "Este es mi subtitulo ubicado en el state de app.",
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
    this.setState({ miSubtitulo: "nuevo subtitulo en app.    " + new Date() });
    this.setState({ tieneSubtitulo: !this.state.tieneSubtitulo });
    //this.llamarAPI();  olvidarlo axios
  };

  renderSubtitulo() {
    if (this.state.tieneSubtitulo) {
      return <Subtitulo nombre={this.state.miSubtitulo} />;
    }
    return <div>NO! ->accion que se ejecuta desde renderSubtitulo</div>;
  }
  render() {
    //método que tiene return y devueve html
    return (
      <div>
        <h1>First Application - Nuevo Título</h1>
        <Titulo nombreT="2, probando propiedades en Titulo" />
        {this.renderSubtitulo()}
        <Tabla />
        <Boton nombre="Aceptar" nombre2="boton azul" hacerClick={this.miMetodo} />
        <br/>
        <Boton nombre="Este es el boton 2" nombre2="boton azul 2" hacerClick={this.miMetodo}/>
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }
}

export default App;

//<Subtitulo cadena="1, probando propiedades en Subtitulo" nombre={this.state.miSubtitulo} />
//<Subtitulo cadena={this.renderSubtitulo()}/>
