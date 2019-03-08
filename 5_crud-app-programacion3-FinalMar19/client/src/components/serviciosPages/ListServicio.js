import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchServicios, deleteServicio } from '../../actions';
import { Link } from 'react-router-dom';
import LeftMenu from '../LeftMenu';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit);

class ListServicio extends Component {

    componentDidMount() {
        this.props.fetchServicios();
    }

    renderServicios() {
       
        return this.props.listServicios.map(servicio => {
            return (
            <tr key={servicio._id}>
                <td>{servicio.nombre}</td>
                <td>{servicio.descripcion}</td>
                <td>{servicio.precioPorHora}</td>
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
                <a className="mr-2 badge badge-danger" href="#more" onClick={() => { if (window.confirm('¿Está seguro que desea eliminar este ítem?')) this.props.deleteServicio(servicio._id) }}>Eliminar</a>
                    </td>
            </tr>
            )
        });
    }
    
    render() {
        return (
            <div>
                               <LeftMenu/>

                <h2>Listando Servicios</h2>

            <p className="">

                <Nav pills>
                <NavItem>
                    <NavLink href="/servicios/new" className="btn btn-primary  mr-2">Nuevo</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/welcomes" className="btn btn-primary  mr-2">Volver</NavLink>
                </NavItem>
                </Nav>
            </p>

                  
                
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio x Hr</th>
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {                                        
        listServicios: state.servicioDS.listServicios           //acá busca en Data Store serviciosDS (es el ReducerServicios) la lista listServicios. 
    };                                              // y los relaciona en el index de los reducers
}

export default connect(mapStateToProps, {fetchServicios, deleteServicio})(ListServicio);   //conectamos nuestro componente a redux. 
                                                                                //Bindeamos el componente al reducer, que sería el data store y a dos acciones de los actions


//<p className="">

//<Link to="/servicios/new" className="btn btn-primary">Nuevo</Link>
                
//<Link to="/" className="btn btn-primary">Volver</Link>
//</p>
