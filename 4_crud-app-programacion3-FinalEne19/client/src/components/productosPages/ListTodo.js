import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchTodos, deleteTodo } from '../../actions';
import { Link } from 'react-router-dom';
import LeftMenu from '../LeftMenu';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey, faHome,faListAlt,faEye, faTrashAlt,faEdit);

class ListTodo extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
       
        return this.props.listTodos.map(todo => {
            return (
            <tr key={todo._id}>
                <td>{todo.isDone ? "hecho" : "no"}</td>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.name+' - '+todo.description}</td>
                <td>
                        <FontAwesomeIcon
                            icon="eye"
                        />
                        <Link to={`/todos/${todo._id}/show`} className="mr-2 badge badge-success">Ver</Link>&nbsp;
                       
                        <FontAwesomeIcon
                            icon="edit"
                        />

                <Link to={`/todos/${todo._id}/edit`} className="mr-2 badge badge-secondary">Editar</Link>&nbsp;
               
               
                <FontAwesomeIcon
                            icon="trash-alt"
                        />
                <a className="mr-2 badge badge-danger" href="#more" onClick={() => { if (window.confirm('¿Está seguro que desea eliminar este ítem?')) this.props.deleteTodo(todo._id) }}>Eliminar</a>
                    </td>
            </tr>
            )
        });
    }
    
    render() {
        return (
            <div>
                               <LeftMenu/>

                <h2>Listando Todos</h2>

            <p className="">

                <Nav pills>
                <NavItem>
                    <NavLink href="/todos/new" className="btn btn-primary  mr-2">Nuevo</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/" className="btn btn-primary  mr-2">Volver</NavLink>
                </NavItem>
                </Nav>
            </p>

                  
                
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Hecho</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Concatena Nombre y Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderTodos()
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
        listTodos: state.todoDS.listTodos           //acá busca en Data Store todosDS (es el ReducerTodos) la lista listTodos. 
    };                                              // y los relaciona en el index de los reducers
}

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(ListTodo);   //conectamos nuestro componente a redux. 
                                                                                //Bindeamos el componente al reducer, que sería el data store y a dos acciones de los actions


//<p className="">

//<Link to="/todos/new" className="btn btn-primary">Nuevo</Link>
                
//<Link to="/" className="btn btn-primary">Volver</Link>
//</p>
