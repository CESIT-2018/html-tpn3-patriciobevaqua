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

/*import ListTodo from './productosPages/ListTodo';
import ShowTodo from './productosPages/ShowTodo';
import NewTodo from './productosPages/NewTodo';
import EditTodo from './productosPages/EditTodo';
import ListTodo from './serviciosPages/ListTodo';
import ShowTodo from './serviciosPages/ShowTodo';
import NewTodo from './serviciosPages/NewTodo';
import EditTodo from './serviciosPages/EditTodo';*/

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
                 

                        <Route exact path="/" component={Welcomes}/>
                        <Route exact path="/toggle" component={ToggleButton}/>
                        <Route exact path="/todos" component={ListTodo}/>
                        <Route exact path="/todos/new" component={NewTodo}/>
                        <Route exact path="/todos/:id/show" component={ShowTodo}/>
                        <Route exact path="/todos/:id/edit" component={EditTodo}/>

                        <Route exact path="/contacto" component={NewContacto}/>

                        <Route exact path="/ReactWidgetsForm" component={ReactWidgetsForm}/>


                      <Route exact path="/productos" component={ListTodo}/>
                        <Route exact path="/productos/new" component={NewTodo}/>
                        <Route exact path="/productos/:id/show" component={ShowTodo}/>
                        <Route exact path="/productos/:id/edit" component={EditTodo}/>
                      
                      
                      <Route exact path="/servicios" component={ListTodo}/>
                        <Route exact path="/servicios/new" component={NewTodo}/>
                        <Route exact path="/servicios/:id/show" component={ShowTodo}/>
                        <Route exact path="/servicios/:id/edit" component={EditTodo}/>

                      
                      



                    </main>
                </div>
            </div>
        );
    }
}

export default MainContainer;