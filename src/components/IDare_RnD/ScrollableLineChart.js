import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";

import { connect } from "react-redux";

import RecycledList from "react-recycled-scrolling";
import ScrollableLineChartRecycleList from "./ScrollableLineChartRecycleList";

// import Plotly from "plotly.js-basic-dist";
// import createPlotlyComponent from "react-plotly.js/factory";
// const Plot = createPlotlyComponent(Plotly);

// const service = new Service()



import Plot from "react-plotly.js";
import { Fragment } from "react";

import {
  loadChartData,
  loadChartInitialData,
  loadChartDataByScroll,
} from "../../actions/scrollableLineChart";


const ScrollableLineChart = ({
  loadChartData,
  plots,
  recycled_list_data_arr,
  table_data,
  loadChartInitialData,
  loadChartDataByScroll,
}) => {
  // debugger
  useEffect(async () => {
    await loadChartData();
  }, [loadChartData]);

  useEffect(async () => {
    console.log(plots);
  }, [plots]);

  //===============================================================
  const scroll = useScrollHandler();

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

  //===============================================================
  // TABLE SCROLL EVENT

  // const [scrolledSpanWeidth, setScrolledSpanWeidth] = useState(0)

  // const scrollTable = useTableScrollHandler();
  useEffect(async () => {
    loadChartInitialData();
    // setScrolledSpanWeidth(40 * 60 * recycled_list_data_arr)
    // alert(recycled_list_data_arr.length)
  }, [loadChartInitialData]);

  const containerRef = React.useRef();

  React.useEffect(() => {
    const selector = document.getElementById("scroll-table");
    const elementWeidth = 40;
    let scrollVal = 0;
    const onScroll = () => {
      let scrollLeft = selector.scrollLeft;
      let scrolledValue = scrollLeft / elementWeidth;
      scrollVal = Math.ceil(scrolledValue);
    };

    const destroyListener = createScrollStopListener(
      containerRef.current,
      () => {
        console.log("onscrollstop");
        console.log(scrollVal);
        loadChartDataByScroll(scrollVal);
      }
    );
    // return () => destroyListener();

    selector.addEventListener("scroll", onScroll);
    return () => {
      destroyListener();
      selector.removeEventListener("scroll", onScroll);
    };
  }, []);

  //===============================================================

  return (
    <div className="container-fluid p-0 scrollable-line-chart">
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
      {/* =============================================================================== */}
      {/* <Fragment>
        Hello {table_data && table_data.length && JSON.stringify(table_data[0].x.length)}
      </Fragment> */}
      {table_data && table_data.length && (
        <Fragment>
          <Plot data={[table_data[0]]} />
        </Fragment>
      )}
      <div className="data-info">
        <span>0</span>
        <span>1M</span>
      </div>
      <div id="scroll-table" className="table table-hover" ref={containerRef}>
          <div className="inside-span" style={{width: (((recycled_list_data_arr ? recycled_list_data_arr : 0) * 40) + 600) + 'px'}}></div>
      </div>
      <Fragment>
        <br/>
        Total Data array: {recycled_list_data_arr && recycled_list_data_arr}<br/>
        {recycled_list_data_arr && ((recycled_list_data_arr * 40) + 600)}
      </Fragment>
      <hr />
      {/* =============================================================================== */}
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
  table_data: state.scrollableLineChartReducerData
    ? state.scrollableLineChartReducerData.table_data
    : null,
  recycled_list_data_arr: state.scrollableLineChartReducerData
    ? state.scrollableLineChartReducerData.data_arr
    : null,
});

const mapDispatchToProps = (dispatch) => ({
  loadChartData: () => dispatch(loadChartData()),
  loadChartInitialData: () => dispatch(loadChartInitialData()),
  loadChartDataByScroll: (arr) => dispatch(loadChartDataByScroll(arr)),
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
export const useTableScrollHandler = () => {
  const [scroll, setScroll] = useState(1);
  const [scrollVal, setScrollVal] = useState(1);

  useEffect(() => {
    const selector = document.getElementById("scroll-table");
    let scrollValArr = [];
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      let scrollLeft = selector.scrollLeft;
      let scrollWidth = selector.scrollWidth;
      console.log(scrollLeft);
      console.log(scrollWidth);
      let scrolledValue = scrollLeft / 60;
      console.log(
        "selected item no : " +
          scrolledValue +
          "    " +
          Math.ceil(scrolledValue)
      );
      setScrollVal(Math.ceil(scrolledValue));
      // console.log(window.scrollY)
      // console.log(scrollCheck)
      setScroll(scrollCheck);

      // document.getElementById("scroll-table").scrollTo(Math.ceil(scrolledValue), 0)
    };

    // var isScrolling;
    // selector.addEventListener('scroll', function ( event ) {
    //   window.clearTimeout( isScrolling );
    //   isScrolling = setTimeout(function() {
    //     console.log( 'Scrolling has stopped.'  + scrollVal);
    //     // selector.scrollLeft = scrollVal
    //   }, 66);
    // }, false);

    selector.addEventListener("scroll", onScroll);
    return () => {
      selector.removeEventListener("scroll", onScroll);
      // console.log('Hello >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.')
      // console.log('scrollCheck')
    };
  }, [scroll, scrollVal, setScroll, setScrollVal]);

  return { scroll: scroll, scrollVal: scrollVal };
};

// ========================================================================================
// Custom scroll tracker

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);
  const [scrollVal, setScrollVal] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      let scrollTop = document.getElementById("scrollbar").scrollTop;
      let scrollheight = document.getElementById("scrollbar").scrollHeight;
      console.log(scrollTop);
      console.log(scrollheight);
      let scrolledValue = scrollTop / 24;
      console.log("selected item no : " + scrolledValue);
      setScrollVal(scrolledValue);
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

  return { scroll: scroll, scrollVal: scrollVal };
};

const createScrollStopListener = (element, callback, timeout) => {
  let removed = false;
  let handle = null;
  const onScroll = () => {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(callback, timeout || 200); // default 200 ms
  };
  element.addEventListener("scroll", onScroll);
  return () => {
    if (removed) {
      return;
    }
    removed = true;
    if (handle) {
      clearTimeout(handle);
    }
    element.removeEventListener("scroll", onScroll);
  };
};
