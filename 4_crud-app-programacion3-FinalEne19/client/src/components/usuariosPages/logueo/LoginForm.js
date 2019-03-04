import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';


const validate = (values) => {
    const errors = {}
    /*if (!values.nombreUser) {
      errors.nombreUser = 'Nombre es requerido'
    } else if (values.nombreUser &&values.nombreUser.length < 5) {
      errors.nombreUser = 'Debe contener al menos 5 caracteres'
    }*/
    if (!values.emailLogin) {
       errors.emailLogin = 'Debe ingresar un e-mail'
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailLogin)) {
       errors.emailLogin = 'Debe ingresar un e-mail válido'
     }
     /*if (!values.apellidoUser) {
        errors.apellidoUser = 'Apellido es requerido'
      } else if (values.apellidoUser &&values.apellidoUser.length < 5) {
        errors.apellidoUser = 'Debe contener al menos 5 caracteres'
      }

      if (!values.claveValida) {
        errors.claveValida = 'ingrese nuevamente su clave'
      } else if (values.claveValida != values.clave) {
        errors.claveValida = 'No coinciden las claves ingresadas'
      }*/

    // if (!values.age) {
    //   errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //   errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //   errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors
  }

class LoginForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
        const { login } = nextProps;
        if (login._id !== this.props.login._id) { // Initialize form only once
            this.props.initialize(login)
            this.isUpdated = true;
        }
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (    //esto es configuración de cómo muestra los mensajes de validaciones
        
        <div className="form-group">
            <label forname={input.name}>{label}</label>
            <input {...input} type={type} className="form-control" id={input.name}  placeholder={input.label} />
            <div className="text-danger" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    
    )

    render() {

        const { handleSubmit, loading } = this.props;

        if(loading){
            return (<span>Cargando...</span>);
        }

        return (
            <form onSubmit={handleSubmit}>
            <Field name="emailLogin" type="email" component={this.renderField} label="Ingrese E-mail" />
            <Field name="claveLogin" type="text" component={this.renderField} label="Ingrese Clave" />
            <Link className="btn btn-light mr-2" to="/">Cancelar</Link>
            <button className="btn btn-primary mr-2" type="submit" >Enviar</button>
        </form>
        )
    }
}

export default reduxForm({form: 'login', validate})(LoginForm);



//handleSubmit es un prop que provee redx form y ejecuta un callback, al qe se le pasan los datos del 
//formulario ya valiados
