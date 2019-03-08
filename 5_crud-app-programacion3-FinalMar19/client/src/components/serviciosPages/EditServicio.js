import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import ServicioForm from './ServicioForm';
import {fetchServicioById, updateServicio} from '../../actions/ActionsServicios';

class EditServicio extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {
        
        const {id} = this.props.match.params;
        
        if (id) {
            this.props.fetchServicioById(id);
        }
    }

    submit = (servicio) => {
        return this.props.updateServicio(servicio)
            .then(response => this.setState({ redirect:true }))
            .catch(err => {
            throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>Edit Servicio</h2>
                <div>
                    {this.state.redirect
                        ? <Redirect to="/servicios" />
                        : <ServicioForm
                            servicio={this.props.servicio}
                            loading={this.props.loading}
                            onSubmit={this.submit}/>
                    }
                </div>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        servicio: state.servicioDS.servicio,  
        loading: state.servicioDS.loading,
        errors: state.servicioDS.errors
    };
}

export default connect(mapStateToProps, { fetchServicioById, updateServicio })(EditServicio);