import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { connect } from 'react-redux';

import ReactApexChart from "react-apexcharts";

import './lineChart.css';


import actions from '../../store/actions/actions';

const LineChart = props => {

  const getLineChartData = () => {
    // get years
    if(props.data.length > 0) {

      const yearDataArray = [];

      const yearArray = props.data.map(house => house.YearBuilt);

      const uniqueYearArray = [...new Set(yearArray)].sort((a, b) => a - b).filter(el => el !== null);

      uniqueYearArray.forEach( year => yearDataArray.push([]));

      props.data.forEach( house => {
        uniqueYearArray.forEach( (year, index) => {
          if( house.YearBuilt === year) {
            yearDataArray[index].push(house.SalePrice);
          }
        })
      });

      const maxArray = yearDataArray.map( array => (Math.max( ...array ) / 1000) );
      const minArray = yearDataArray.map( array => (Math.min( ...array ) / 1000) );
    
      return [maxArray, minArray, uniqueYearArray];
      
    }
  }

  const [maxArray, minArray, uniqueYears] = getLineChartData();
  
    const data = {
          
        series: [
          {
            name: "High - 2013",
            data: maxArray
          },
          {
            name: "Low - 2013",
            data: minArray
          }
        ],
        options: {
          chart: {
            height: 500,
            type: 'line',
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#ff4b4b', '#53ff4b', '#0090ff'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: uniqueYears,
            labels: {
              show: false
            },
            title: {
              text: 'Year'
            }
          },
          yaxis: {
            title: {
              text: 'House Prices ( x £1000 )'
            },
            min: 0,
            max: 800
          }
        }
      };





    return(
 
      <Row style={{marginTop: "2rem"}}>
        <Col>
          <div className="lineChart__container">
          <div className="lineChart__wrapper">
              <p className="lineChart__title">
                {
                  maxArray.length > 1 ? 'Yearly price data' : 'No data available for this chart'
                }
                </p>
              {
                maxArray.length > 1 ? <ReactApexChart options={data.options} series={data.series} type="line" height={350} /> : null
              }
          </div>    
          </div>
          </Col>
      </Row>
    );
}


const mapDispatchToProps = dispatch => {
  return {
    setUniqueYears: (years) => dispatch({type: actions.SET_UNIQUE_YEARS, payload: years})
  }
}

export default connect(null, mapDispatchToProps)(LineChart);