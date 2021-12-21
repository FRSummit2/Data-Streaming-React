import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

// import Plotly from "plotly.js-basic-dist";
// import createPlotlyComponent from "react-plotly.js/factory";
// const Plot = createPlotlyComponent(Plotly);

// const service = new Service()

import Plot from "react-plotly.js";
import { Fragment } from "react";

const DataStreaming = ({}) => {
  return (
    <div className="container-fluid p-0">
      <div className="header p-3">
        <NavLink exact to="/">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataStreaming);
