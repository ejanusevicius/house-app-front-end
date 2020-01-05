import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';


import Navigation from '../components/navigation/navigation';
import Dashboard from '../pages/dashboard';
import Filter from '../pages/filter';

import actions from '../store/actions/actions';

import Backdrop from '../components/modal/backdrop';
import FilterModal from '../components/modal/filterModal';

const Layout = props => {


   
    return (
        <React.Fragment>
            <Navigation />

            <Redirect from='/' to="/dashboard" />


            {props.modalOn && <FilterModal />}
            {props.modalOn && <Backdrop />}



            <Switch>
                <Route path="/dashboard" render={() => <Dashboard />} />
                <Route path="/filter" render={() => <Filter />} />
            </Switch>
            
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        modalOn: state.modalOn,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setHouseState: (houses) => dispatch({type: actions.UPDATE_HOUSES, payload: houses}),
        toggleLoadingState: () => dispatch({type: actions.TOGGLE_LOADING})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);