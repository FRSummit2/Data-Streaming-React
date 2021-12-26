// import axios from "axios";
// import { y_100K } from "./dummy_data";

// axios.defaults.baseURL = "http://localhost:4002";

export const recycle_list_data_test_1 = (endpoient) => async (dispatch) => {
    // debugger
  let imageList = [];
  for (let i = 1; i <= 3000000; i++) {
    imageList.push({
      no: i,
      alt: `thumbnail of ${i}.jpg`,
      // url: `https://picsum.photos/id/${i}/100/100.jpg`
      url: `https://picsum.photos/id/${1}/100/100.jpg`,
    });
  }

  console.log(imageList);

  try {
    dispatch({
      type: "RECYCLE_LIST_DATA",
      payload: imageList,
    });
  } catch (error) {
    dispatch({
      type: "RECYCLE_LIST_DATA",
      payload: null,
    });
  }
};
