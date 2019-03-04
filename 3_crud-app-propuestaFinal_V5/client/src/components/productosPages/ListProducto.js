import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {fetchProductos} from '../../actions';
import { fetchProductos, deleteProducto } from '../../actions';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit);


class ListProducto extends Component {

    componentDidMount() {
        this.props.fetchProductos();
    }

    renderProductos() {   //arreglar detalles  ->OK, arreglados 9-11-18
        return this.props.listProductos.map(producto => {
            return (
                <tr key={producto._id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.precio * producto.stock}</td>
                    <td>
                        <FontAwesomeIcon
                            icon="eye"
                        />
                        <Link to={`/productos/${producto._id}/show`} className="mr-2 badge badge-success">Ver</Link>&nbsp;
                       
                        <FontAwesomeIcon
                            icon="edit"
                        />

                <Link to={`/productos/${producto._id}/edit`} className="mr-2 badge badge-secondary">Editar</Link>&nbsp;
               
               
                <FontAwesomeIcon
                            icon="trash-alt"
                        />
                <a className="mr-2 badge badge-danger" href="#more" onClick={() => { if (window.confirm('¿Está seguro que desea eliminar este ítem?')) this.props.deleteProducto(producto._id) }}>Eliminar</a>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>

                <h2>Listando Productos</h2>

                <p>
                    <Link to="/productos/new" className="btn btn-primary">Nuevo</Link>
                </p>

                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderProductos()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listProductos: state.productoDS.listProductos
    };
}

export default connect(mapStateToProps, { fetchProductos, deleteProducto })(ListProducto);


//<Link to={`/productos/${producto._id}/delete`} className="">Eliminar</Link>