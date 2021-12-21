const initialState = {
  plots: null,
};

const plots = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLOT_INITIAL_DATA":
      return {
        ...state,
        plots: action.payload,
      };

    case "ADD_MORE_PLOT_DATA":
        // debugger
        // console.clear()
        console.log("DATA_UPDATE_SUCCESS")
        console.log(state.plots)
        // console.log(state.plots[0])
        // console.log(state.plots[0].x.length)
        // console.log(state.plots[0].y.length)
        console.log(state.plots[2].y)
        console.log(action.payload[2].y)
      return {
        ...state,
        plots: [
          {
            ...state.plots[0],
            x: [...state.plots[0].x, ...action.payload[0].x],
            y: [...state.plots[0].y, ...action.payload[0].y],
          },
          {
            ...state.plots[1],
            x: [...state.plots[1].x, ...action.payload[1].x],
            y: [...state.plots[1].y, ...action.payload[1].y],
          },
          {
            ...state.plots[2],
            x: [...state.plots[2].x, ...action.payload[2].x],
            y: [...state.plots[2].y, ...action.payload[2].y],
          },
        ],
      };
    default:
      return state;
  }
};

export default plots;
