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

class TodoForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
        const { todo } = nextProps;
        if (todo._id !== this.props.todo._id) { // Initialize form only once
            this.props.initialize(todo)
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
                <Field name="name" type="text" component={this.renderField} label="Nombre" />
                <Field name="description" type="text" component={this.renderField} label="Descripción" />
                <Link className="btn btn-light mr-2" to="/todos">Cancelar</Link>
                <button className="btn btn-primary mr-2" type="submit" >{this.isUpdated ? "Editar" : "Crear"}</button>
            </form>
        )
    }
}

export default reduxForm({form: 'todo', validate})(TodoForm);



//handleSubmit es un prop que provee redx form y ejecuta un callback, al qe se le pasan los datos del 
//formulario ya valiados
