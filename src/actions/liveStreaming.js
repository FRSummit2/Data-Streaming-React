import axios from "axios";
import { y_100K } from "./dummy_data";

axios.defaults.baseURL = "http://localhost:4002";

export const getLiveStreamingInitData = (endpoient) => async (dispatch) => {
  try {
    const { data } = await axios.get("stream_data_page_1");
    // const { data } = await axios.get('http://0.0.0.0:8000/api/query?page=' + 1 +'&x=index&y=unit_price');
    console.log(data);

    setTimeout(async () => {
      dispatch(getLiveStreamingUpdatedData('http://0.0.0.0:8000/api/query?page=' + 1 +'&x=index&y=unit_price'));
    }, 1000);

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

let count = 2
export const getLiveStreamingUpdatedData = (endpoient) => async (dispatch) => {

  try {
    /*const { data } = await axios.get(endpoient);
    console.log(data);

    if(data[0].next_param) {
        console.log('>>>>>>>>>>>>>>>>>>> ' + data[0].next_param)
        setTimeout( async () => {
            await dispatch(getLiveStreamingUpdatedData(data[0].next_param))
        }, 1000)
    } else {
        console.log('>>>>>>>>>>>>>>>>>>> ' + 'no more params found')
    }*/

    endpoient = 'http://0.0.0.0:8000/api/query?page=' + count +'&x=index&y=unit_price'
    let { data } = await axios.get(endpoient);
    console.log(data);

    if(count < 10) {
        setTimeout( async () => {
            count++
            await dispatch(getLiveStreamingUpdatedData('http://0.0.0.0:8000/api/query?page=' + count +'&x=index&y=unit_price'))
        }, 1000)
    }

    data = [data]
    dispatch({
    //   type: "UPDATE_LIVE_STREAMING_DATA",
      type: "UPDATE_LIVE_STREAMING_DATA_2",
      payload: data,
    });
  } catch (error) {
    dispatch({
    //   type: "UPDATE_LIVE_STREAMING_DATA",
      type: "UPDATE_LIVE_STREAMING_DATA_2",
      payload: [],
    });
    console.log(error);
  }
};
