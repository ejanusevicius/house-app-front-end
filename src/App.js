import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';
import actions from './store/actions/actions';

import LoadingSpinner from './components/loading/loadingSpinner';


import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { API_BASEPATH, CORS_PROXY, HOUSE_ENDPOINT } from './common/constants/apiConfig';

const App = props => {


  useEffect(() => {
    if(props.filterString.length > 0) {
      props.toggleLoadingState();
      filteredHouseApiCall();
    }
  }, [props.filterString]);

  useEffect(() => {
    houseApiCall();
  }, []);

  const houseApiCall = async () => {
    
    try {
        const houses = await (await axios.get(`${CORS_PROXY}${API_BASEPATH}${HOUSE_ENDPOINT}`)).data;

        const yearArray = houses.data.map(house => house.YearBuilt);  
        const uniqueYearArray = [...new Set(yearArray)].sort((a, b) => a - b);

        props.setHouseTotalState(houses.results);
        props.setUniqueYears(uniqueYearArray);
        props.setHouseState(houses.data);
        props.toggleLoadingState();
        
    } catch(err) {
        console.log(err);
    }
  }

  const filteredHouseApiCall = async () => {

    try {
      const houses = await (await axios.get(`${CORS_PROXY}${API_BASEPATH}${HOUSE_ENDPOINT}${props.filterString}`)).data;


      props.setHouseState(houses.data);
      props.toggleLoadingState();

      
    } catch(err) {
      console.log(err);
    }
  }


  let content = (<LoadingSpinner style={{height: "100vh"}} />);

  if (props.loading === false) {
    content = (
      <Layout />
    );
  }





  return (
    <BrowserRouter>
      <div className="App">
        {content}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
      filterString: state.filterString,
      loading: state.loading,
      fullState: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
      setHouseState: (houses) => dispatch({type: actions.UPDATE_HOUSES, payload: houses}),
      setHouseTotalState: (total) => dispatch({type: actions.SET_HOUSE_TOTAL, payload: total}),
      toggleLoadingState: () => dispatch({type: actions.TOGGLE_LOADING}),
      setUniqueYears: (years) => dispatch({type: actions.SET_UNIQUE_YEARS, payload: years})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
