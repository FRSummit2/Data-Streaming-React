import axios from "axios";
import {y_50K} from './dummy_data'

axios.defaults.baseURL = "http://localhost:4002";


export const test_action_creator = (endpoient) => async (dispatch) => {
  console.clear();

  try {
    const { data } = await axios.get(`/${endpoient}`);

    console.log(data);
    dispatch({
      type: "TEST_REDUX_DATA",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TEST_REDUX_DATA",
      payload: [],
    });
    console.log(error);
  }
};

export const return_arr = () => (dispatch) => {
  let data = [1001, 2003, 5005, 8008, 9005, 9050];

  return data;
};

export const getPlotData = () => async (dispatch) => {
  try {
    // debugger
    console.clear()
    // const { data } = await axios.get("test_1");
    const { data } = await axios.get("dt_test_50K");
    console.log(data)


    // setTimeout(() => {
    //   console.clear()
    //   console.log(data)
    //   data.forEach(element => {
    //     console.log(element)
    //     let data_x = []
    //     let data_y = []
    //     element.x.forEach((e, index) => {
    //       if(index > 6000 && index < 7001) {
    //         data_x.push(element.x[index])
    //         data_y.push(element.y[index])
    //       }
    //     })
    //     console.log(data_x)
    //     console.log(data_y)
    //   });
    // }, 3000)

    dispatch({
      type: "SET_PLOT_INITIAL_DATA",
      payload: data,
    });

    // let isMoreDataAvailable = true;

    // let x_cnt = 5597
    let x_cnt = 50001

    for (let i = 0; i < 50; i++) {
      // setTimeout(async () => {
      //   try {
         
      //   } catch (error) {}
      // }, 3000);
      // const { data } = await axios.get("more_data");
      // let param = i < 7 ? i : 6
      let { data } = await axios.get("dt_test_" + 2);
      // console.log(data)

      let dt = [
        {
          x: [],
          y: y_50K
        },
        {
          x: [],
          y: []
        },
        {
          x: [],
          y: []
        }
      ]

      if(i > 1) {
        for(let m=0; m< 50000; m++) {
          // console.log(dt)
          // console.log(dt[0].x)
          dt[0].x.push(x_cnt)
          x_cnt++
        }
        console.log(dt)
        // console.log(x_cnt)
        data = dt
      }

      dispatch({
        type: "ADD_MORE_PLOT_DATA",
        payload: data,
      });
    }

    // let x = 0;
    // while (x < 20) {
    //   setTimeout(async () => {
    //     try {
    //       const { data } = await axios.get("more_data");

    //       dispatch({
    //         type: "ADD_MORE_PLOT_DATA",
    //         payload: data,
    //       });
    //     } catch (error) {}
    //   }, 3000);
    //   x++
    // }
  } catch (error) {
    dispatch({
      type: "SET_PLOT_INITIAL_DATA",
      payload: null,
    });
    console.log(error);
  }

  //   return data;
};

export const update_local_test_2 = (data) => async (dispatch) => {
  dispatch({
    type: "UPDATE_STREAM_DATA",
    payload: data,
  });
};
