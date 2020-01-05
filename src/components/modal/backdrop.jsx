import React from 'react';

import { connect } from 'react-redux'; 
import actions from '../../store/actions/actions';

import './backdrop.css';



const backdrop = props => {
    return (
        <div className="backdrop" onClick={props.toggleModal}>
        </div>
    );
} 


const mapStateToProps = state => {
    return {
        modalOn: state.modalOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({type: actions.TOGGLE_MODAL})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(backdrop);