import React, { useState } from 'react';

import ReactApexChart from "react-apexcharts";

import './distributionChart.css';

const DistributionChart = props => {



  const [chartState, setChartState] = useState(true);

  const chartStateHandler = () => {
    setChartState(!chartState);
  }


  const getPriceDistribution = () => {
    
    if(props.data.length > 0) {

      const priceDistributionArr =  [
        [], [], [], [], [], [], [], [], 
        [], [], [], [], [], [], [], []];

      props.data.forEach( house => {
        switch(true) {
          case house.SalePrice > 0 && house.SalePrice <= 50000: {
            priceDistributionArr[0].push(house);
            break;
          }
          case house.SalePrice > 50000 && house.SalePrice <= 100000: {
            priceDistributionArr[1].push(house);
            break;
          }
          case house.SalePrice > 100000 && house.SalePrice <= 150000: {
            priceDistributionArr[2].push(house);
            break;
          }
          case house.SalePrice > 150000 && house.SalePrice <= 200000: {
            priceDistributionArr[3].push(house);
            break;
          }
          case house.SalePrice > 200000 && house.SalePrice <= 250000: {
            priceDistributionArr[4].push(house);
            break;
          }
          case house.SalePrice > 250000 && house.SalePrice <= 300000: {
            priceDistributionArr[5].push(house);
            break;
          }
          case house.SalePrice > 300000 && house.SalePrice <= 350000: {
            priceDistributionArr[6].push(house);
            break;
          }
          case house.SalePrice > 350000 && house.SalePrice <= 400000: {
            priceDistributionArr[7].push(house);
            break;
          }
          case house.SalePrice > 400000 && house.SalePrice <= 450000: {
            priceDistributionArr[8].push(house);
            break;
          }
          case house.SalePrice > 450000 && house.SalePrice <= 500000: {
            priceDistributionArr[9].push(house);
            break;
          }
          case house.SalePrice > 500000 && house.SalePrice <= 550000: {
            priceDistributionArr[10].push(house);
            break;
          }
          case house.SalePrice > 550000 && house.SalePrice <= 600000: {
            priceDistributionArr[11].push(house);
            break;
          }
          case house.SalePrice > 600000 && house.SalePrice <= 650000: {
            priceDistributionArr[12].push(house);
            break;
          }
          case house.SalePrice > 650000 && house.SalePrice <= 700000: {
            priceDistributionArr[13].push(house);
            break;
          }
          case house.SalePrice > 700000 && house.SalePrice <= 750000: {
            priceDistributionArr[14].push(house);
            break;
          }
          case house.SalePrice > 750000 && house.SalePrice <= 800000: {
            priceDistributionArr[15].push(house);
            break;
          }

        };
      })

      const priceDistribution = priceDistributionArr.map( houseArray => houseArray.length );



      return priceDistribution;
    }
  }

  const getYearDistribution = () => {

    if (props.data.length > 0) {
      const yearDistributionArr = [];

      const yearArray = props.data.map(house => house.YearBuilt);
      //console.log(yearArray);

      const uniqueYearArray = [...new Set(yearArray)].sort((a, b) => a - b);


      //console.log(uniqueYearArray);

      uniqueYearArray.forEach( year => yearDistributionArr.push([]));

      //console.log(yearDistributionArr);

      props.data.forEach( house => {
        uniqueYearArray.forEach( (year, index) => {
          if( house.YearBuilt === year) {
            yearDistributionArr[index].push(house);
          }
        })
      })

      //console.log(yearDistributionArr);

      const yearDistribution = yearDistributionArr.map(yearArr => yearArr.length);

      //console.log(yearDistribution);

      const yearLabels = [];

      uniqueYearArray.forEach( (year, index) => {
        if (index === 1) {
          yearLabels.push(year);
        } else if (index === (Math.round(uniqueYearArray.length / 2))) {
          yearLabels.push(year);
        } else if (index === (uniqueYearArray.length - 2)) {
          yearLabels.push(year);
        } else {
          yearLabels.push('');
        }
      });
      
      //console.log(yearLabels);

      return [yearDistribution, yearLabels];

    }

    


    

  }

  const [yearData, yearLabels] = getYearDistribution();

    const priceConfig = {

  
        series: [{
          name: 'Price distribution',
          data: getPriceDistribution()
        }],
        options: {
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: val => {
              if (val > 0 && val < 30) {
                return val;
              }
            },
            offsetY: -30,
            style: {
              fontSize: '11px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: [
              "0-50", "50-100", "100-150", "150-200", "200-250", "250-300", "300-350", "350-400",
              "400-450", "450-500", "500-550", "550-600", "600-650", "650-700", "700-750", "750-800"],
            position: 'bottom',
            labels: {
              offsetY: 45,
              rotate: 90,
          
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: true
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#0090ff',
                  colorTo: '#0090ff',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
              offsetY: -35,
          
            }
          },
          fill: {
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            },
            colors: ['#0090ff']
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                if (val === 1) {
                  return `${val} house`;
                } else {
                  return `${val} houses`;
                }
              }
            }
          
          }       
        },
      };

      const yearConfig = {
          
        series: [{
          name: 'Year distribution',
          data: yearData
        }],
        options: {
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: false
          },
          
          xaxis: {
            categories: yearLabels,
            position: 'bottom',
            labels: {
              offsetY: 30,
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: true
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#0090ff',
                  colorTo: '#0090ff',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
              offsetY: -35,
          
            }
          },
          fill: {
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            },
            colors: ['#0090ff']
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                if (val === 1) {
                  return `${val} house`;
                } else {
                  return `${val} houses`;
                }
              }
            }
          
          }       
        },
      };
    
    return (
      <div className="distributionChart__container">
        <div className="distributionChart__wrapper">
          <button
            className="distributionChart__toggle" 
            onClick={chartStateHandler}>Toggle</button>
          {
            chartState === true ?
            (<p className="distributionChart__title">
              Price Distribution <span style={{fontSize: "0.6rem"}}>( x £1000 )</span>
            </p>) :
            (<p className="distributionChart__title">
              Year Distribution
            </p>)
          }
        </div>
          <div style={{width: "90%", justifySelf: "flex-end"}}>
            {chartState ?
            <ReactApexChart options={priceConfig.options} series={priceConfig.series} type="bar" /> :
            <ReactApexChart options={yearConfig.options} series={yearConfig.series} type="bar" />
            }
          </div>
      </div>
        
    );
}

export default DistributionChart;