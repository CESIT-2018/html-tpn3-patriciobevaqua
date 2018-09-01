import React, {Component} from 'react';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
class App extends Component {
    render() {          //método que tiene return y devueve html
        return (
            <div>
                <h1>First Application - Nuevo Título</h1>
                <Titulo/>
                <Subtitulo/>
            </div>
        );   //siempre devuelve un elemento (no mas de uno)
    }
}

export default App;