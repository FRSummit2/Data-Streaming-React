const recycledListData = (state = null, action) => {
    // debugger
  switch (action.type) {
    case "RECYCLE_LIST_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default recycledListData;
