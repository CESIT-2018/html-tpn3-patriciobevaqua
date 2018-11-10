import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newProducto,saveProducto} from '../../actions/ActionsProductos';
import ProductForm from './ProductForm';

class NewProducto extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {
        this
            .props
            .newProducto();
    }

    submit = (producto) => {
        return this.props
            .saveProducto(producto)
            .then(response => this.setState({redirect: true}))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>New PRODUCTO</h2>

                {this.state.redirect
                    ? <Redirect to="/productos"/>
                    : <ProductForm producto={this.props.producto} onSubmit={this.submit}/>
                }

            </div>
        )
    };
}

function mapStateToProps(state) {
    return {producto: state.productos.producto, errors: state.productos.errors}
}

export default connect(mapStateToProps, {newProducto,saveProducto})(NewProducto);