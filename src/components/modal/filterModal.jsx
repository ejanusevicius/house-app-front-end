import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './filterModal.css';


import { connect } from 'react-redux';
import actions from '../../store/actions/actions';

const selectDummy = (
    <select className="filterCard__select">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>);

const FilterModal = props => {


    
    return(
        <div className="filterModal__container">
            <Container>


                <h1 className="filterModal__title">Filter data</h1>

                
                <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                    <table className="filterModal__table">
                        <thead>
                            <tr>
                            <th>Attribute</th>
                            <th>Value</th>
                            <th>Previous value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Size of garage (car capacity)</td>
                            <td>{selectDummy}</td>
                            <td>null</td>
                            </tr>
                            <tr>
                            <td>Construction date</td>
                            <td>{selectDummy}</td>
                            <td>null</td>
                            </tr>
                            <tr>
                            <td>Basement area (square feet)</td>
                            <td>{selectDummy}</td>
                            <td>null</td>
                            </tr>
                            <tr>
                            <td>Size of garage (car capacity)</td>
                            <td>{selectDummy}</td>
                            <td>null</td>
                            </tr>
                            <tr>
                            <td>Size of garage (car capacity)</td>
                            <td>{selectDummy}</td>
                            <td>null</td>
                            </tr>
                            <tr>
                            <td>Size of garage (car capacity)</td>
                            <td>{selectDummy}</td>
                            <td>null</td>
                            </tr>
                        </tbody>
                    </table>

                </Row>

                <Row style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5rem"}}>
                    <button className="filterModal__button" onClick={props.toggleModal}>Go back</button>
                    <button className="filterModal__button">Submit Results</button>
                </Row>

            </Container>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({type: actions.TOGGLE_MODAL})
    }
}

export default connect(null, mapDispatchToProps)(FilterModal);