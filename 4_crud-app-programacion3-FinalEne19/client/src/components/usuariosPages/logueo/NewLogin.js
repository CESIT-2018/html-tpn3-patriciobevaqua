import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newUsuario,saveUsuario} from '../../../actions/ActionsUsuarios';
import LoginForm from './LoginForm';

class NewLogin extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {
        this
            .props
            .newLogin();
    }

    submit = (login) => {
        return this.props
            .saveUsuario(login)
            .then(response => this.setState({redirect: true}))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>Ingrese sus datos</h2>

                {this.state.redirect
                    ? <Redirect to="/"/>
                    : <LoginForm login={this.props.login} onSubmit={this.submit}/>
                }

            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        login: state.usuarioDS.usuario, 
        errors: state.usuarioDS.errors
    }
}

export default connect(mapStateToProps, {newUsuario,saveUsuario})(NewLogin);