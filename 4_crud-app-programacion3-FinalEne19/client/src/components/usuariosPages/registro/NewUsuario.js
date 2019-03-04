import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newUsuario,saveUsuario} from '../../../actions/ActionsUsuarios';
import UsuarioForm from './UsuarioForm';

class NewUsuario extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {
        this
            .props
            .newUsuario();
    }

    submit = (usuario) => {
        return this.props
            .saveUsuario(usuario)
            .then(response => this.setState({redirect: true}))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>Ingrese sus datos para crear un Usuario</h2>

                {this.state.redirect
                    ? <Redirect to="/"/>
                    : <UsuarioForm usuario={this.props.usuario} onSubmit={this.submit}/>
                }

            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        usuario: state.usuarioDS.usuario, 
        errors: state.usuarioDS.errors
    }
}

export default connect(mapStateToProps, {newUsuario,saveUsuario})(NewUsuario);