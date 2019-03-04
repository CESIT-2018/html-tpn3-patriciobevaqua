import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';


const validate = (values) => {
    const errors = {}
    
    if (!values.nombre) {     //no coincide con nombre -> ok arreglado 09-11-18
        errors.nombre = 'Se requiere el ingreso de nombre'
    } else if (values.nombre && values.nombre.length < 5) {
        errors.nombre = 'Debe contener al menos 5 caracteres'
    }

  // if (!values.email) {
    //   errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
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

class ContactoForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
        const { contacto } = nextProps;
        if (contacto._id !== this.props.contacto._id) { // Initialize form only once
            this.props.initialize(contacto)
            this.isUpdated = true;
        }
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (

        <div className="form-group">
            <label forname={input.name}>{label}</label>
            <input {...input} type={type} className="form-control" id={input.name} placeholder={input.label} />
            <div className="text-danger" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>

    )

    render() {

        const { handleSubmit, loading } = this.props;

        if (loading) {
            return (<span>Cargando...</span>);
        }


        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="nombre" type="text" component={this.renderField} label="Nombre" />
                    <Field name="apellido" type="text" component={this.renderField} label="Apellido" />
                    <Field name="email" type="email" component={this.renderField} label="e-mail" />
                    <Field name="telefono" type="text" component={this.renderField} label="Telefono" />
                    
                    <Link className="btn btn-light mr-2" to="/productos">Cancelar</Link>
                    <button className="btn btn-primary  mr-2" type="submit" >{this.isUpdated ? "Update" : "Crear"}</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'contacto' , validate})(ContactoForm);
