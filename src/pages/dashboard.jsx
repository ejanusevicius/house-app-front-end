// React libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// React-Redux
import { connect } from 'react-redux';
import actions from '../store/actions/actions';

// React bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Styling
import './dashboard.css';



//Components
import IconButton from '../components/dashboard/iconButton';
import Card from '../components/dashboard/card';
import DistributionChart from '../components/dashboard/distributionChart';
import LineChart from '../components/dashboard/lineChart';
import ScatterChart from '../components/dashboard/scatterChart';

// C

const Dashboard = props => {

    const getDashboardInfo = () => {
        if(props.houseTotal && props.houses) {

            // First row of cards
            const filteredPercentage = (Math.round((props.houses.length / props.houseTotal) * 100) / 100) * 100;
            const houseTotal = props.houseTotal;
            const filteredHouses = props.houses.length;
            
            const priceArray = props.houses.map( house => house['SalePrice']).filter(el => el !== null);

            // Second row of cards
            const minimumPrice = `£${(Math.round(Math.min( ...priceArray ) / 1000) * 1000) / 1000}k`;
            const maximumPrice = `£${((Math.max( ...priceArray ) / 1000) * 1000) / 1000}k`;

            const averagePrice = `£${(Math.round(Math.round( priceArray.reduce((a, b) => parseInt(a) + parseInt(b), 0) / priceArray.length ) / 10000) * 10000) / 1000}k`;

            return {
                filteredPercentage,
                houseTotal,
                filteredHouses,
                minimumPrice,
                maximumPrice,
                averagePrice
            }
        }

    }

    const cardData = getDashboardInfo();

    return(

        

        <Container style={{paddingTop: "4rem", paddingBottom: "3rem", height: "100%"}}>

            {props.houses.length > 0 ? (

            <React.Fragment>

            <div style={{width: "100%", display: "flex", justifyContent: "space-between", margin: "1rem 0px"}}>

                <h1 className="dashboard__title">Dashboard</h1>

                <div style={{display: "none", justifyContent: "center", alignItems: "center", marginBottom: "0.7rem"}}>
                            <IconButton type="reload" />
                            <IconButton type="filter" />
    
                </div>

            </div>

            <Row>
                <Col lg={6}>


                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem"}}>
                        <Card title="Total (houses)" number={cardData.houseTotal} icon="house" />
                        <Card title="Results" number={cardData.filteredHouses} icon="house"/>
                        <Card title="Percentage" number={`${Math.round(cardData.filteredPercentage * 100)/ 100}%`} icon="house"/>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Card title="Price (min)" number={cardData.minimumPrice} icon="money"/>
                        <Card title="Price (avg)" number={cardData.averagePrice} icon="money"/>
                        <Card title="Price (max)" number={cardData.maximumPrice} icon="money"/>
                    </div>

                    <div className="dashboard__buttonBox">
                        <NavLink className="dashboard__link" to="/filter">
                            <IconButton type="filter" text="Filter"/>
                        </NavLink>

                    </div>

                </Col>
                <Col lg={6} style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>

                    <DistributionChart data={props.houses} />

                </Col>
            </Row>

            

                <LineChart data={props.houses} />

                <ScatterChart data={props.houses} />

            </React.Fragment>
            ) : (
            <div style={{height: "95vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#7e819c", fontFamily: "inherit"}}>
                <h1 style={{fontSize: "1.5rem", textAlign: "center", marginBottom: "1"}}>No data is available, change your filter options!</h1>
                <NavLink className="dashboard__link" to="/filter">
                            <IconButton type="filter" text="Filter"/>
                </NavLink>
            </div>
            
            ) }
                    
        </Container>

    );
}


const mapStateToProps = state => {
    return {
        houses: state.houses,
        houseTotal: state.houseTotal
    }
}


const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({type: actions.TOGGLE_MODAL})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
