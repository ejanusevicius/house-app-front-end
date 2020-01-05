// React libraries
import React, { useState } from 'react';
import { connect } from 'react-redux'
import actions from '../store/actions/actions';
import { NavLink } from 'react-router-dom';

// React bootstrap
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// Styling
import './filter.css';

//Selector data
import filterData from '../common/constants/filterData';


const Filter = props => {

    const [filterConfig, setFilterConfig] = useState({ ...props.filterConfig});

    //console.log(filterConfig);


    const generateFilterString = () => {
        const filterValues = Object.values(filterConfig).filter( filter => filter !== '').join('&');

        let filterString = '';

        filterString = `?${filterValues}`

        props.setFilterConfiguration(filterConfig);
        props.setFilterString(filterString);

    }

    //console.log(filterData);

    const changeHandler = (type, event) => {
        setFilterConfig({
            ...filterConfig,
            [type]: event.target.value
        })
    }

    const resetFilter = () => {
        setFilterConfig({
            'OverallCond': '',
            'GarageCars': '',
            'Heating': '',
            'HeatingQC': '',
            'BsmtCond': '',
            'YearBuilt': ''
        });
    }
    
    const getTable = () => {

        const getSelector = (entry) => {
            let selectors = null;
            if (entry.selectData.length > 0) {
                selectors = entry.selectData.map( option => {
                    return (<option key={`key-${entry.type}=${option.value}`} value={`${entry.type}=${option.value}`}>{option.title}</option>);
                })
            } else {
                selectors = props.uniqueYears.map( year => {
                    return (<option key={`key-${entry.type}=${year}`} value={`${entry.type}=${year}`}>{year}</option>)
                })
            }

            
            selectors.push((<option key="no-key" value="">No Filter</option>));

            

            return selectors;

        }

        const tableEntries = filterData.map( tableEntry => {
            return(
                <tr key={`key-${tableEntry.name}`}>
                <td>{tableEntry.name}</td>
                <td>{

                    <select 
                    className="filter__select"
                    onChange={(event) => changeHandler(tableEntry.type, event)}
                    value={filterConfig[tableEntry.type]}>
                        {
                            /*tableEntry.selectData.map( selector => {
                                if(selector != null) {
                                    return (<option value={selector.value}>{selector.title}</option>);
                                }
                            })*/
                            getSelector(tableEntry)
                        }
                    </select>

                }</td>
                </tr>
            );

        })

        return(
            <table className="filter__table">
                        <thead>
                            <tr>
                            <th>Attribute</th>
                            <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableEntries}
                        </tbody>
             </table>

        );
    }

    return(
        <Container style={{paddingTop: "4rem", paddingBottom: "3rem", height: "100vh"}}>
            
            <div style={{width: "100%", margin: "1rem 0px"}}>
                <h1 className="filter__title">Filter</h1>
            </div>

            <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                
                {getTable()}
                    
                
            </Row>

            <Row style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2.25rem"}}>
                <NavLink to="/dashboard">
                    <button className="filter__button">Go back</button>
                </NavLink>
                <button className="filter__button" onClick={() => generateFilterString()}>Update filter</button>
                <button className="filter__button" onClick={() => resetFilter()}>Reset filter</button>
    
            </Row>
            


        </Container>
    );
}

const mapStateToProps = state => {
    return {
        uniqueYears: state.uniqueYears,
        filterConfig: state.filterConfiguration
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilterString: (string) => dispatch({type: actions.SET_FILTER_STRING, payload: string}),
        setFilterConfiguration: (filter) => dispatch({type: actions.SET_FILTER_CONFIGURATION, payload: filter}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);