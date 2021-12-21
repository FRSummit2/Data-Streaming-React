import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import {
  test_action_creator,
  return_arr,
  getPlotData,
} from "../../actions/iDare_dataStreaming";

// import Plotly from "plotly.js-basic-dist";
// import createPlotlyComponent from "react-plotly.js/factory";
// const Plot = createPlotlyComponent(Plotly);

// const service = new Service()

import Plot from "react-plotly.js";
import { Fragment } from "react";

const DataStreaming = ({
  test_action_creator,
  testReduxData,
  return_arr,
  getPlotData,
  plots,
}) => {
  // const [plotData, setPlotData] = useState({
  //   x: [1, 2, 3, 4],
  //   y: [10, 15, 13, 17],
  //   type: "scatter",
  // });

  // const [plotDatas, setPlotDatas] = useState(
  //   // {
  //   //     x: [1, 2, 3, 4],
  //   //     y: [10, 15, 13, 17],
  //   //     type: "scatter",
  //   // },
  //   {
  //     x: [5, 6, 7, 8],
  //     y: [100, 150, 130, 170],
  //     type: "scatter",
  //   }
  // );

  const [plotData2, setPlotData2] = useState({
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: "scatter",
  });

  // const [plotData3, setPlotData3] = useState([]);

  const [redData_y, setRedDataY] = useState([]);
  const [redData_x, setRedDataX] = useState([]);

  useEffect(() => {
    // let data_x = [];
    // let data_y = [];
    // for (let i = 0; i < 10000; i++) {
    //   data_x.push(i + 5);
    // }
    // for (let i = 10000; i > 0; i--) {
    //   data_y.push(i % 2 == 0 ? 50 : 100);
    // }
    // setPlotData({
    //   x: data_x,
    //   y: data_y,
    //   type: "scatter",
    // });
    // console.log(plotData);
    test_action_creator("small_csv_50000");
  }, [test_action_creator]);

  useEffect(() => {
    let y_axis = redData_y;
    let x_axis = redData_x;

    for (let x = 1; x <= 100; x++) {
      //   console.log(redData);
      /*let et_arr = redData;
      let dt = return_arr();
      let x_axis = redData_x
      dt.forEach((element, index) => {
        //   console.log(element * (i + 1))
        et_arr.push(element * (i + 1) * (index + 1));
        // et_arr.push(dt[index]);
        x_axis.push(index)
      });
      setRedData(et_arr);
      setRedDataX(x_axis)

      console.log(et_arr)*/

      //   console.log(redData);
      //   console.log(redData_x);

      for (let i = 1; i <= 1000; i++) {
        if (x === 5 && i === 5) y_axis.push(5000);
        else if (x === 9 && i === 50) y_axis.push(0);
        else y_axis.push(i % 2 === 0 ? 3000 : 1000);
        x_axis.push(x + i);
        // console.log(x + '    ' + i)
      }

      setRedDataY(y_axis);
      setRedDataX(x_axis);
    }
    console.log(y_axis);
    console.log(x_axis);

    setPlotData2({
      x: redData_x,
      y: redData_y,
      type: "scatter",
    });

    console.log(plotData2);
  }, []);

  useEffect(async () => {
    await getPlotData();
  }, [getPlotData]);

  return (
    <div className="container-fluid p-0">
      <div className="header p-3">
        <NavLink exact to="/">
          Back to Home
        </NavLink>
      </div>

      <div className="plotly-js-2">
        {/* <Plot
          data={[plotData, plotDatas]}
          layout={{ title: "Basic Line Plot 1" }}
        />
        <Plot data={[plotData2]} layout={{ title: "Basic Line Plot 2" }} /> */}

        <Fragment>
          {plots && plots.length && JSON.stringify(plots[0].x.length)}<br/>
          {plots && plots.length && JSON.stringify(plots[0].y.length)}
        </Fragment>

        {plots && plots.length && (
          <Fragment>
            {/* <Plot
              data={[
                plots[0],
                plots[1],
                plots[2],
              ]}
            /> */}
            <Plot data={[plots[0]]} />
            <Plot data={[plots[1]]} />
            <Plot data={[plots[2]]} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  testReduxData: state.testReduxData,
  plots: state.plots.plots,
});

// const mapDispatchToProps = (dispatch) => ({
//   test_action_creator: () => dispatch(test_action_creator()),
// });

export default connect(mapStateToProps, {
  test_action_creator,
  return_arr,
  getPlotData,
})(DataStreaming);
