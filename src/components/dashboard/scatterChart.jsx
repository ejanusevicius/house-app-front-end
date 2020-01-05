import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { connect } from 'react-redux';

import ReactApexChart from "react-apexcharts";

import './scatterChart.css';


import filterData from '../../common/constants/filterData';

import LoadingSpinner from '../loading/loadingSpinner';

const ScatterChart = props => {

  const [activeAttribute, setActiveAttribute] = useState('OverallCond');
  const [activeAttributeName, setActiveAttributeName] = useState ('Overall Condition');
  const [loadingState, setLoadingState] = useState(false);

  const getChart = (input, name) => {
    if(input !== activeAttribute) {
      setLoadingState(true);
      setActiveAttribute(input);
      setActiveAttributeName(name);
      setTimeout(() => setLoadingState(false), 500);
    }
  }


  const getScatterData = () => {
    if(props.data.length > 0) {
      //get attributes
      const attributes = filterData.map( data => {
        return {attribute: data.type, options: data.selectData}
      });

      const attribute = attributes.find(attribute => attribute.attribute === activeAttribute);

      const attrValues = attribute.options.map( option => {
        return option.value;
      });

      const attrTitles = attribute.options.map( option => {
        return option.title;
      })

      const attrNumbers = attrValues.map( (value, index) => {
        return index + 1;
      });
    
      const houseArr = [];

      props.data.forEach( house => {
        attrValues.forEach( (value, index) => {
          if(house[activeAttribute] === value) {
            houseArr.push([attrNumbers[index], house.SalePrice]);
          }
        })
      });

      const data = {
          
        series: [{
          name: "House price",
          data: houseArr
          }],
        options: {
          chart: {
            height: 350,
            type: 'scatter',
            zoom: {
              enabled: true,
              type: 'xy'
            }
          },
          xaxis: {
            labels: {
              show: false,
              formatter: function(val) {
                let title = null;
                attrNumbers.forEach( (value, index) => {
                  if(val == value) {
                    title = attrTitles[index];
                  }
                });
                if(title !== null) {
                  return title;
                } else {
                  return '';
                }
              }
            }
          },
          yaxis: {
          }
        }
        };
        return data;
      }
    }

    const chartConfig = getScatterData();

    return(
      <Row style={{marginTop: "2rem"}}>
        <Col>
          <div className="scatterChart__container">
          <div className="scatterChart__wrapper">
              <p className="scatterChart__title">
                Price spread based on {activeAttributeName}
              </p>
                {
                  !loadingState ?
                  (<ReactApexChart options={chartConfig.options} series={chartConfig.series} type="scatter" height={350} />) :
                  <LoadingSpinner style={{height: "300px"}} />
                  }

                <div className="scatterChart__buttonContainer">
                  <button className="scatterChart__button" onClick={() => getChart('GarageCars', 'Garage Size')}>Garage Size</button>
                  <button className="scatterChart__button" onClick={() => getChart('OverallCond', 'Overall Condition')}>Overall Condition</button>
                  <button className="scatterChart__button" onClick={() => getChart('Heating', 'Heating Type')}>Heating Type</button>
                  <button className="scatterChart__button" onClick={() => getChart('HeatingQC', 'Heating Quality')}>Heating Quality</button>
                  <button className="scatterChart__button" onClick={() => getChart('BsmtCond', 'Basement Condition')}>Basement Condition</button>
                </div>
          </div>    
          </div>


          </Col>
      </Row>
    );
}


export default connect(null, null)(ScatterChart);