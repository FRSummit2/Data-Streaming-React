import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";

import { connect } from "react-redux";

import Plot from "react-plotly.js";
import { Fragment } from "react";

import { getLiveStreamingInitData } from "../../actions/liveStreaming";

const LiveStream = ({getLiveStreamingInitData, plots}) => {

    useEffect( async () => {
        await getLiveStreamingInitData()
    }, [getLiveStreamingInitData])
  // debugger

  return (
    <div className="container-fluid p-0">
      <div className="header p-3">
        <NavLink exact to="/">
          Back to Home
        </NavLink>
      </div>
      <hr />
      Live Streaming
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
    </div>
  );
};

const mapStateToProps = (state) => ({
    plots: state.liveStreaming
      ? state.liveStreaming.plots
      : null,
});

const mapDispatchToProps = (dispatch) => ({
    getLiveStreamingInitData: (param) => dispatch(getLiveStreamingInitData(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveStream);
