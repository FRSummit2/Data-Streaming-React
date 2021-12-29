import axios from "axios";
// import { y_100K } from "./dummy_data";

// axios.defaults.baseURL = "http://localhost:4002";

import { data_1 } from "./dummy_data_scrollableLineChart";

export const loadChartData = (endpoient) => async (dispatch) => {
  // debugger
  //   alert('Here')
  console.log(data_1);
  let data = [
    {
      x: [],
      y: data_1,
      name: "Train",
      textposition: "top center",
      textfont: {
        family: "sans-serif",
      },
      type: "scatter",
      mode: "lines",
      line: {
        color: "rgba(0, 0, 0, 1)",
      },
      marker: {
        size: 12,
      },
    },
  ];
  for (let i = 1; i <= data_1.length; i++) {
    data[0].x.push(i);
  }

  console.log(data);

  try {
    dispatch({
      type: "SCROLLABLE_LINE_CHART_DATA",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "SCROLLABLE_LINE_CHART_DATA",
      payload: null,
    });
  }
};

export const loadChartInitialData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://0.0.0.0:8000/api/query?page=" + 1 + "&x=index&y=unit_price"
    );
    console.log(data);

    let plot_data = [
      {
        x: data.x,
        y: data.y,
        name: "Train",
        textposition: "top center",
        textfont: {
          family: "sans-serif",
        },
        type: "scatter",
        mode: "lines",
        line: {
          color: "rgba(0, 0, 0, 1)",
        },
        marker: {
          size: 12,
        },
      },
    ];

    console.log(plot_data);

    // =================================================
    // RecycledList serial array create
    let total_data = 800000;
    // let total_data_arr = [];
    // for (let i = 0; i < total_data; i++) {
    //   total_data_arr.push({serial: i});
    // }
    console.log(total_data);
    // =================================================

    dispatch({
      type: "SCROLL_TABLE_INITIAL_DATA",
      payload: plot_data,
    });
    dispatch({
      type: "SCROLLABLE_LINE_CHART_TOTAL_DATA_ARRAY",
      payload: total_data,
    });
  } catch (error) {
    dispatch({
      type: "SCROLL_TABLE_INITIAL_DATA",
      payload: [],
    });
    dispatch({
      type: "SCROLLABLE_LINE_CHART_TOTAL_DATA_ARRAY",
      payload: [],
    });
    console.log(error);
  }
};

let color = "orange";
export const loadChartDataByScroll = (endpoient) => async (dispatch) => {
  console.log('endpoient : ' + endpoient)
  if (endpoient === 0) endpoient = 1;
  try {
    const { data } = await axios.get(
      "http://0.0.0.0:8000/api/query?page=" +
        endpoient +
        "&x=index&y=unit_price"
    );
    console.log(data);

    let plot_data = [
      {
        x: data.x,
        y: data.y,
        name: "Train",
        textposition: "top center",
        textfont: {
          family: "sans-serif",
        },
        type: "scatter",
        mode: "lines",
        line: {
          color: color,
        },
        marker: {
          size: 12,
        },
      },
    ];

    console.log(plot_data);

    dispatch({
      type: "SCROLL_TABLE_INITIAL_DATA",
      payload: plot_data,
    });
  } catch (error) {
    dispatch({
      type: "SCROLL_TABLE_INITIAL_DATA",
      payload: [],
    });
    console.log(error);
  }
};
