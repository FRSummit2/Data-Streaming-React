import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";

import { connect } from "react-redux";

// import Plotly from "plotly.js-basic-dist";
// import createPlotlyComponent from "react-plotly.js/factory";
// const Plot = createPlotlyComponent(Plotly);

// const service = new Service()

import Plot from "react-plotly.js";
import { Fragment } from "react";

const DataStreaming = ({}) => {

    const [trace_1, setTrace1] = useState(
        {
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
            type: 'bar',
            name: 'Primary Product',
            marker: {
              color: 'rgb(49,130,189)',
              opacity: 0.7,
            }
        }
    )

    const [trace_2, setTrace2] = useState(
        {
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
            type: 'bar',
            name: 'Secondary Product',
            marker: {
              color: 'rgb(204,204,204)',
              opacity: 0.5
            }
        }
    )

    const [layout, setLayout] = useState(
        {
            title: '2013 Sales Report',
            xaxis: {
              tickangle: -45
            },
            barmode: 'group'
        }
    )


  return (
    <div className="container-fluid p-0">
      <div className="header p-3">
        <NavLink exact to="/">
          Back to Home
        </NavLink>
      </div>

      <hr />

      <div>
        <Bar
          data={{
            labels: ["January", "February", "March", "April", "May", "Jul"],
            datasets: [
              {
                label: "Lost",
                fill: false,
                lineTension: 0,
                data: [45, 25, 40, 20, 45, 20],
                pointBorderColor: "#4bc0c0",
                borderColor: "#4bc0c0",
                borderWidth: 2,
                showLine: true,
              },
              {
                label: "Succes",
                fill: false,
                lineTension: 0,
                startAngle: 2,
                data: [20, 40, 20, 45, 25, 60],
                backgroundColor: "transparent",
                pointBorderColor: "#ff6384",
                borderColor: "#ff6384",
                borderWidth: 2,
                showLine: true,
              },
            ],
          }}
        />
      </div>

      <hr />

      <div>
          <Fragment>
            <Plot data={[trace_1, trace_2]} layout={layout} />
          </Fragment>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataStreaming);
