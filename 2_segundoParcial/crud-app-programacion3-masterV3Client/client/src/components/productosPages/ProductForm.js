import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

const validate = (values) => {
    const errors = {name:{}};

    if(!values.name) {
        errors.name = {
          message: 'You need to provide Name'
        }
      }

    return errors;
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
        <div>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    )

    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="name" type="text" component={this.renderField} label="Name" />
                    <Field name="description" type="text" component={this.renderField} label="Description" />
                    <button type="submit" >{this.isUpdated ? "Update" : "Create"}</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'producto'}, validate)(ProductForm);