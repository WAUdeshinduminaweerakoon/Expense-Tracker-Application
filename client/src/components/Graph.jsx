import React from 'react';
import './graph.css';
import {Doughnut} from 'react-chartjs-2'
import {Chart,ArcElement}from 'chart.js';

Chart.register(ArcElement);
const config={
  data:{
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius:30,
      spacing:10
    }]

  },
  options :{
    cutout: 115
  }

}


const Graph = () => {
  return (
    <div className='graph-container'>
      <div className="item">
          <div className="chart">
            <Doughnut{...config}></Doughnut>
            <h3 className='total-h'>Total</h3>
            <span>${0}</span>
          </div>
          <div className="lables-div">
            {/*Lables*/}
          </div>
        </div>      
    </div>
  )
}

export default Graph