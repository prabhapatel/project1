
      
      import { useState } from 'react';
      import './App.css';
      import Chart from "react-apexcharts";
      
      function Navbar() {
        const [graph,setGraph] =useState({
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        })
        const[sgraph,setSgraph]= useState([
          
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ])
        return (<div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={graph}
                series={sgraph}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
          
          
        );
      }
      
      export default Navbar;

        

