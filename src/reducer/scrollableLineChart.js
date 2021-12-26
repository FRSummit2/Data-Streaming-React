const scrollableLineChartReducerData = (state = null, action) => {
    // debugger
  switch (action.type) {
    case "SCROLLABLE_LINE_CHART_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default scrollableLineChartReducerData;
