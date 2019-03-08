import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';


const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Nombre es requerido'
    } else if (values.name &&values.name.length < 5) {
      errors.name = 'Debe contener al menos 5 caracteres'
    }
    // if (!values.email) {
    //   errors.email = 'Debe ingresar un e-mail'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Debe ingresar un e-mail válido'
    // }
    // if (!values.age) {
    //   errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //   errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //   errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors
  }

class ServicioForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
        const { servicio } = nextProps;
        if (servicio._id !== this.props.servicio._id) { // Initialize form only once
            this.props.initialize(servicio)
            this.isUpdated = true;
        }
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        
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
                <Field name="nombre" type="text" component={this.renderField} label="Nombre" />
                <Field name="descripcion" type="text" component={this.renderField} label="Descripción" />
                <Field name="precioPorHora" type="text" component={this.renderField} label="Precio por Hora" />
                <Link className="btn btn-light mr-2" to="/servicios">Cancelar</Link>
                <button className="btn btn-primary mr-2" type="submit" >{this.isUpdated ? "Editar" : "Crear"}</button>
            </form>
        )
    }
}

export default reduxForm({form: 'servicio', validate})(ServicioForm);



//handleSubmit es un prop que provee redx form y ejecuta un callback, al qe se le pasan los datos del 
//formulario ya valiados
