import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);


const LoadStreamData = (props) => {
    const [plotData, setPlotData] = useState({
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
    });

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

    useEffect(() => {
        console.log(props)
        console.log(plotData)
        for(let i=0; i< 10000; i++) {
            plotData.x.push((i+5))
        }
        for(let i=10000; i>0; i--) {
            plotData.y.push((i))
        }
        console.log(plotData)
    },[props, plotData])

    return (
        <div className="container-fluid p-0">
            <div className="header p-3">
                <NavLink exact to="/">Back to Home</NavLink>
            </div>

            <div className="plotly-js-2">
                <Plot
                    data={[plotData]}
                    layout={{ title: 'Basic Line Plot' }}
                />
            </div>
        </div >
    );
}

export default LoadStreamData;