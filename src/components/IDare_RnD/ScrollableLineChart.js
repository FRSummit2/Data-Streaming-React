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

import { loadChartData } from "../../actions/scrollableLineChart";
import { loadChartDataByScroll } from "../../actions/scrollableLineChart";

const ScrollableLineChart = ({ loadChartData, plots, loadChartDataByScroll }) => {
  // debugger
  useEffect(async () => {
    await loadChartData();
  }, [loadChartData]);

  useEffect(async () => {
    console.log(plots);
  }, [plots]);

  //===============================================================
  const scroll = useScrollHandler();
  useEffect( async () => {
    loadChartDataByScroll(scroll.scrollVal)
  }, [loadChartDataByScroll, scroll.scrollVal])

  const mystyle_div = {
    position: "relative",
    width: "300px",
    height: "200px",
    overflow: "scroll",
  };

  const mystyle_span = {
    whiteSpace: "nowrap",
    // borderBottom: '1px solid #000000'
  };
  //===============================================================

  return (
    <div className="container-fluid p-0">
      <div className="header p-3">
        <NavLink exact to="/">
          Back to Home
        </NavLink>
      </div>
      <hr />
      ScrollableLineChart
      <hr />
      <Fragment>
        {plots && plots.length && JSON.stringify(plots[0].x.length)}
      </Fragment>
      <hr />
      {plots && plots.length && (
        <Fragment>
          <Plot data={[plots[0]]} />
        </Fragment>
      )}
      <div style={mystyle_div} id="scrollbar">
        {Array(1000)
          .fill(null)
          .map((_, index) => (
            <p
              className="m-0"
              style={{ color: scroll.scroll ? "red" : "green" }}
              key={index}
            >
              <span style={mystyle_span}>
                {index} Hello there, this is for testing
              </span>
            </p>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  plots: state.scrollableLineChartReducerData
    ? state.scrollableLineChartReducerData.data
    : null,
});

const mapDispatchToProps = (dispatch) => ({
  loadChartData: () => dispatch(loadChartData()),
  loadChartDataByScroll: (arr) => dispatch(loadChartDataByScroll(arr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollableLineChart);

// export default connect(
//   mapStateToProps,
//   {loadChartData, loadChartDataByScroll}
// )(ScrollableLineChart);


// ========================================================================================
// Custom scroll tracker

export const useScrollHandler = () => {
    const [scroll, setScroll] = useState(1);
    const [scrollVal, setScrollVal] = useState(1);
  
    useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY > 10;
        let scrollTop = document.getElementById("scrollbar").scrollTop
        let scrollheight = document.getElementById("scrollbar").scrollHeight
        console.log(scrollTop);
        console.log(scrollheight);
        let scrolledValue = scrollTop / 24
        console.log('selected item no : ' + scrolledValue);
        setScrollVal(scrolledValue)
        // console.log(window.scrollY)
        // console.log(scrollCheck)
        setScroll(scrollCheck);
      };
  
      const selector = document.getElementById("scrollbar");
      selector.addEventListener("scroll", onScroll);
      return () => {
        selector.removeEventListener("scroll", onScroll);
        // console.log('scrollCheck')
      };
    }, [scroll, setScroll]);
  
    return {scroll: scroll, scrollVal: scrollVal};
  };