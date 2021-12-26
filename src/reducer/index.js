import csvTransectionReducer from "./csvTransection";
import testReduxDataReducer from "./testReduxData";
import plots from './dataStreaming'
import recycledListData from "./recycleListData";

import {combineReducers} from 'redux'

const allReducer = combineReducers({
    csvTransection: csvTransectionReducer,
    testReduxData: testReduxDataReducer,
    plots,
    recycledListData,
});

export default allReducer;