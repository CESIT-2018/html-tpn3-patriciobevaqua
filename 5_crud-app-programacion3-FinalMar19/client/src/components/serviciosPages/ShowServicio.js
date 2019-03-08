import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchServicioById} from '../../actions/ActionsServicios';
import { Link } from 'react-router-dom';

class ShowServicio extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.id = id;
        if (id) {
            this.props.fetchServicioById(id);
        }
    }

    render() {
        return (
            <div>

                <h2>Ver SERVICIO</h2>

                <br />

                <div className="row">
                    <div className="col-sm-2"><p className="font-weight-bold text-right">Nombre:</p></div>
                    <div className="col-sm-10">{this.props.servicio.nombre}</div>
                </div>

                <div className="row">
                    <div className="col-sm-2"><p className="font-weight-bold text-right">Descripción:</p></div>
                    <div className="col-sm-10">{this.props.servicio.descripcion}</div>
                </div>

                <div className="row">
                    <Link className="btn btn-light mr-2" to="/servicios">Volver</Link>
                    <Link to={`/servicios/${this.id}/edit`} className="btn btn-primary mr-2">Editar</Link>&nbsp;
                </div>

            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        servicio: state.servicioDS.servicio
    }
}

export default connect(mapStateToProps, { fetchServicioById })(ShowServicio);