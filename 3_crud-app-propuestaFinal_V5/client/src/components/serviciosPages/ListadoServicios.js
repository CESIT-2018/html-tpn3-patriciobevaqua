import React, { Component } from 'react';//importa las acciones , las conecta y las mapea con el state
import { connect } from 'react-redux';
import { fetchServicios, deleteServicio } from '../../actions';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit);


class ListadoServicios extends Component {

    componentDidMount() {
        this.props.fetchServicios();
    }

    renderServicios() {
        return this.props.listaServicios.map(servicio => {
            return (
                <tr key={servicio._id}>

                    <td>{servicio.nombre}</td>
                    <td>{servicio.descripcion}</td>
                    <td>
                        <FontAwesomeIcon
                            icon="eye"
                        />
                        <Link to={`/servicios/${servicio._id}/show`} className="mr-2 badge badge-success">Ver</Link>&nbsp;
                        <FontAwesomeIcon
                            icon="edit"
                        />
                        <Link to={`/servicios/${servicio._id}/edit`} className="mr-2 badge badge-secondary">Editar</Link>&nbsp;
                <FontAwesomeIcon
                            icon="trash-alt"
                        />
                        <a className="mr-2 badge badge-danger" href="#more" onClick={() => { if (window.confirm('¿Estás seguro de eliminar el item: ' + servicio.nombre + ' ?')) this.props.deleteServicio(servicio._id) }}>Eliminar</a>

                    </td>

                </tr>
            )
        });
    }


    renderTabla() {
        return (
            <div>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderServicios()
                        }
                    </tbody>
                </table>

            </div>
        )
    };

    render() {
        return (
            <div>

                <h2>Listando Servicios</h2>

                <p>
                    <Link to="/servicios/new" className="btn btn-primary">Nuevo</Link>
                </p>

                <div className="table-responsive">
                    {this.renderTabla()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {//conecta a los estados
    return {
        listaServicios: state.servicios.lista
    };
}

export default connect(mapStateToProps, { fetchServicios, deleteServicio })(ListadoServicios);