import React, {Component} from 'react';

import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Tabla from './Tabla';
import Boton from './Boton';
class App extends Component {
    render() {          //método que tiene return y devueve html
        return (
            <div>
                
                <h1>First Application - Nuevo Título</h1>
                <Titulo/>
                <Subtitulo/>
                <Tabla/>
                <Boton/>
            </div>
        );   //siempre devuelve un elemento (no mas de uno)
    }
}

export default App;