import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { test_action_creator } from "../../actions/iDare_dataStreaming";

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

// const service = new Service()

const DataStreaming = ({ test_action_creator, testReduxData }) => {
  const [plotData, setPlotData] = useState({
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: "scatter",
  });
  // const [serviceData, setSericeData] = useState([])

  // let trace1 = {
  //     x: [1, 2, 3, 4],
  //     y: [10, 15, 13, 17],
  //     type: 'scatter'
  // };

  // let trace2 = {
  //     x: [1, 2, 3, 4],
  //     y: [16, 5, 11, 9],
  //     type: 'scatter'
  // };

//   useEffect(() => {
//     (async () => await test_action_creator("small_csv_50000"))();
//   }, [test_action_creator]);

  useEffect(() => {
    let data_x = [];
    let data_y = [];
    for (let i = 0; i < 10000; i++) {
      data_x.push(i + 5);
    }
    for (let i = 10000; i > 0; i--) {
      data_y.push(i % 2 == 0 ? 50 : 100);
    }
    setPlotData({
      x: data_x,
      y: data_y,
      type: "scatter",
    });
    test_action_creator("small_csv_50000")
  }, [test_action_creator]);

  return (
    <div className="container-fluid p-0">
      <div className="header p-3">
        <NavLink exact to="/">
          Back to Home
        </NavLink>
      </div>

      <div className="plotly-js-2">
        <Plot data={[plotData]} layout={{ title: "Basic Line Plot" }} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    testReduxData: state.testReduxData,
});

// const mapDispatchToProps = (dispatch) => ({
//   test_action_creator: () => dispatch(test_action_creator()),
// });

export default connect(mapStateToProps, {
    test_action_creator
})(DataStreaming);
