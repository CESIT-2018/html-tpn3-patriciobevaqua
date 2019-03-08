import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Welcomes from './welcomePages/Welcomes';
import ListTodo from './todosPages/ListTodo';
import ShowTodo from './todosPages/ShowTodo';
import NewTodo from './todosPages/NewTodo';
import EditTodo from './todosPages/EditTodo';

import NewContacto from './contactosPages/NewContacto';

import ToggleButton from './ToggleButton';

import NewLogin from './usuariosPages/logueo/NewLogin';    //by pab
import NewUsuario from './usuariosPages/registro/NewUsuario';  //by pab

import Register from './sesionPages/Register';
import Login from './sesionPages/Login';

import ReactWidgetsForm from './ReactWidgetsForm/ReactWidgetsForm';
import Navbar from './Navbar';

import ListProducto from './productosPages/ListProducto';
import ShowProducto from './productosPages/ShowProducto';
import NewProducto from './productosPages/NewProducto';
import EditProducto from './productosPages/EditProducto';
import ListServicio from './serviciosPages/ListServicio';
import ShowServicio from './serviciosPages/ShowServicio';
import NewServicio from './serviciosPages/NewServicio';
import EditServicio from './serviciosPages/EditServicio';

class MainContainer extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        
                        <Route exact path="/logueo" component={NewLogin}/>
                        <Route exact path="/registro" component={NewUsuario}/>
                        
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/welcomes" component={Welcomes} />
                 

                        <Route exact path="/" component={Navbar}/>
                        <Route exact path="/toggle" component={ToggleButton}/>
                        <Route exact path="/todos" component={ListTodo}/>
                        <Route exact path="/todos/new" component={NewTodo}/>
                        <Route exact path="/todos/:id/show" component={ShowTodo}/>
                        <Route exact path="/todos/:id/edit" component={EditTodo}/>

                        <Route exact path="/contacto" component={NewContacto}/>

                        <Route exact path="/ReactWidgetsForm" component={ReactWidgetsForm}/>


                      <Route exact path="/productos" component={ListProducto}/>
                        <Route exact path="/productos/new" component={NewProducto}/>
                        <Route exact path="/productos/:id/show" component={ShowProducto}/>
                        <Route exact path="/productos/:id/edit" component={EditProducto}/>
                      
                      
                      <Route exact path="/servicios" component={ListServicio}/>
                        <Route exact path="/servicios/new" component={NewServicio}/>
                        <Route exact path="/servicios/:id/show" component={ShowServicio}/>
                        <Route exact path="/servicios/:id/edit" component={EditServicio}/>

                      
                      



                    </main>
                </div>
            </div>
        );
    }
}

export default MainContainer;