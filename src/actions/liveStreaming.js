import axios from "axios";
import { y_100K } from "./dummy_data";

axios.defaults.baseURL = "http://localhost:4002";

export const getLiveStreamingInitData = (endpoient) => async (dispatch) => {
  try {
    const { data } = await axios.get("stream_data_page_1");
    console.log(data);

    setTimeout(async () => {
      dispatch(getLiveStreamingUpdatedData("stream_data_page_2"));
    }, 3000);

    dispatch({
      type: "SET_LIVE_STREAMING_INIT_DATA",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "SET_LIVE_STREAMING_INIT_DATA",
      payload: [],
    });
    console.log(error);
  }
};

export const getLiveStreamingUpdatedData = (endpoient) => async (dispatch) => {

  try {
    const { data } = await axios.get(endpoient);
    console.log(data);

    if(data[0].next_param) {
        console.log('>>>>>>>>>>>>>>>>>>> ' + data[0].next_param)
        setTimeout( async () => {
            await dispatch(getLiveStreamingUpdatedData(data[0].next_param))
        }, 2000)
    } else {
        console.log('>>>>>>>>>>>>>>>>>>> ' + 'no more params found')
    }

    dispatch({
      type: "UPDATE_LIVE_STREAMING_DATA",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_LIVE_STREAMING_DATA",
      payload: [],
    });
    console.log(error);
  }
};
