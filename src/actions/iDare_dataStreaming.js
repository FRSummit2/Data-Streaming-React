import axios from "axios";
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
    const { data } = await axios.get("test_1");


    setTimeout(() => {
      console.clear()
      console.log(data)
      data.forEach(element => {
        console.log(element)
        let data_x = []
        let data_y = []
        element.x.forEach((e, index) => {
          if(index > 6000 && index < 7001) {
            data_x.push(element.x[index])
            data_y.push(element.y[index])
          }
        })
        console.log(data_x)
        console.log(data_y)
      });
    }, 3000)

    dispatch({
      type: "SET_PLOT_INITIAL_DATA",
      payload: data,
    });

    let isMoreDataAvailable = true;

    for (let i = 0; i < 20; i++) {
      // setTimeout(async () => {
      //   try {
         
      //   } catch (error) {}
      // }, 3000);
      const { data } = await axios.get("more_data");

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
