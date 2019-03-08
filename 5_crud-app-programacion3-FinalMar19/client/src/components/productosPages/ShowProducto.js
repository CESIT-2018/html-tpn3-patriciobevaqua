import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductoById} from '../../actions/ActionsProductos';
import { Link } from 'react-router-dom';

class ShowProducto extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.id = id;
        if (id) {
            this.props.fetchProductoById(id);
        }
    }

    render() {
        return (
             <div>

                <h2>Ver producto</h2>

                <br/>

                <div className="row">
                    <div className="col-sm-2"><p className="font-weight-bold text-right">Nombre:</p></div>
                    <div className="col-sm-10">{this.props.producto.nombre}</div>
                </div>

                <div className="row">
                    <div className="col-sm-2"><p className="font-weight-bold text-right">Descripcion:</p></div>
                    <div className="col-sm-10">{this.props.producto.descripcion}</div>
                </div>

                <div className="row">
                    <div className="col-sm-2"><p className="font-weight-bold text-right">Stock:</p></div>
                    <div className="col-sm-10">{this.props.producto.stock}</div>
                </div>

                <div className="row">
                    <div className="col-sm-2"><p className="font-weight-bold text-right">Precio:</p></div>
                    <div className="col-sm-10">{`$ ${this.props.producto.precio}`}</div>
                </div>

                <div className="row">
                    <Link className="btn btn-light mr-2" to="/productos">Vovler</Link>
                    <Link to={`/productos/${this.id}/edit`} className="btn btn-primary mr-2">Editar</Link>&nbsp;
                </div>


            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        producto: state.productoDS.producto
    }
}

export default connect(mapStateToProps, { fetchProductoById })(ShowProducto);