import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newTodo,saveTodo} from '../../actions/ActionsTodos';
import TodoForm from './TodoForm';

class NewTodo extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {
        this
            .props
            .newTodo();
    }

    submit = (todo) => {
        return this.props
            .saveTodo(todo)
            .then(response => this.setState({redirect: true}))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>Nuevo TODO</h2>

                {this.state.redirect
                    ? <Redirect to="/todos"/>
                    : <TodoForm todo={this.props.todo} onSubmit={this.submit}/>
                }

            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        todo: state.todoDS.todo, 
        errors: state.todoDS.errors
    }
}

export default connect(mapStateToProps, {newTodo,saveTodo})(NewTodo);