const scrollableLineChartReducerData = (state = null, action) => {
  // debugger
  switch (action.type) {
    case "SCROLLABLE_LINE_CHART_TOTAL_DATA_ARRAY":
      return {
        ...state,
        data_arr: action.payload,
      };
    case "SCROLLABLE_LINE_CHART_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SCROLL_TABLE_INITIAL_DATA":
      // debugger
      console.log(action.payload);
      return {
        ...state,
        table_data: action.payload,
      };
    default:
      return state;
  }
};

export default scrollableLineChartReducerData;
