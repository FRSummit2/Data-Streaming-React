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

export const local_test_2 = () => async (dispatch) => {

  try {
    const { data } = await axios.get("test_1");
    console.log(data);

    let dt = []
    let dt_m = []
    data.forEach((element, index) => {
        console.log(element)
        if(index == 0)  dt.push(element)
        dt_m.push(element)
    });
    console.log(dt)
    console.log(dt_m)

    dispatch({
      type: "STREAM_DATA",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "STREAM_DATA",
      payload: [],
    });
    console.log(error);
  }

  //   return data;
};
