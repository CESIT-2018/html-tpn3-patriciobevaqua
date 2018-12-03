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

    return errors
}

class ProductForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
        const { producto } = nextProps;
        if (producto._id !== this.props.producto._id) { // Initialize form only once
            this.props.initialize(producto)
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
                    <Field name="descripcion" type="text" component={this.renderField} label="Descripcion" />
                    <Field name="stock" type="text" component={this.renderField} label="Stock" />
                    <Field name="precio" type="text" component={this.renderField} label="Precio" />
                    <Field name="total" type="text" component={this.renderField} label="total" />
                    <Link className="btn btn-light mr-2" to="/productos">Cancelar</Link>
                    <button className="btn btn-primary  mr-2" type="submit" >{this.isUpdated ? "Update" : "Crear"}</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'producto' , validate})(ProductForm);
