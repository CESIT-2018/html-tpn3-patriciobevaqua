import React, {Component} from 'react';
import EncuestaForm from '../EncuestaForm';  //
import Media from './Media';
import Example from './Media';               //
import foto4x4 from './foto4x4.jpg';
import '../dashboard.css';
import logo from '../logo.svg';



class Welcomes extends Component {
    render() {
        return (
            <div>

                <div className="App">
                            <div className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                </div>
                               
                <h2 className="Centrar">Final Programación III Diciembre 2018</h2>

                <div className="App">
                     <div className="App-header">
                            <img src={foto4x4} className="App-logo"/>                      
                     </div>
                </div>



                {Example ()}
          

                <EncuestaForm/>
                
            </div>
        )
    };
}

export default Welcomes;