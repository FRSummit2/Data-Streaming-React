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
