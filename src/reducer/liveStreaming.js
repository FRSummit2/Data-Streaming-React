const initialState = {
    plots: null,
  };

const plots = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case "SET_LIVE_STREAMING_INIT_DATA":
      // console.log(state)
      // console.log(action)
      return {
        ...state,
        plots: action.payload,
      };
    case "ADD_LIVE_STREAMING_DATA":
    //   debugger
      return {
        ...state,
        plots: [
          {
            ...state.plots[0],
            x: [...state.plots[0].x, ...action.payload[0].x],
            y: [...state.plots[0].y, ...action.payload[0].y],
          },
        ],
      };
      case "UPDATE_LIVE_STREAMING_DATA":
      //   debugger
        return {
          ...state,
          plots: [
            {
              ...state.plots[0],
              x: [...action.payload[0].x],
              y: [...action.payload[0].y],
            },
          ],
        };
        case "UPDATE_LIVE_STREAMING_DATA_2":
        //   debugger
          return {
            ...state,
            plots: action.payload,
          };
    default:
      return state;
  }
};

export default plots;
