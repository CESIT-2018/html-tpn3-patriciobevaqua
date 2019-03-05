import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newContacto,saveContacto} from '../../actions/ActionsContactos';
import ContactoForm from './ContactoForm';

class NewContacto extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {
        this
            .props
            .newContacto();
    }

    submit = (contacto) => {
        return this.props
            .saveContacto(contacto)
            .then(response => this.setState({redirect: true}))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>Formulario de Contacto</h2>

                {this.state.redirect
                    ? <Redirect to="/"/>
                    : <ContactoForm contacto={this.props.contacto} onSubmit={this.submit}/>
                }

            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        contacto: state.contactoDS.contacto, 
        errors: state.contactoDS.errors
    }
}

export default connect(mapStateToProps, {newContacto,saveContacto})(NewContacto);