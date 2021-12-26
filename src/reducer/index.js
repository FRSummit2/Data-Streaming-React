import csvTransectionReducer from "./csvTransection";
import testReduxDataReducer from "./testReduxData";
import plots from './dataStreaming'
import recycledListData from "./recycleListData";
import scrollableLineChartReducerData from "./scrollableLineChart";

import {combineReducers} from 'redux'

const allReducer = combineReducers({
    csvTransection: csvTransectionReducer,
    testReduxData: testReduxDataReducer,
    plots,
    recycledListData,
    scrollableLineChartReducerData,
});

export default allReducer;