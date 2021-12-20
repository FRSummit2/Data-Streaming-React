import csvTransectionReducer from "./csvTransection";
import testReduxDataReducer from "./testReduxData";
import plots from './dataStreaming'

import {combineReducers} from 'redux'

const allReducer = combineReducers({
    csvTransection: csvTransectionReducer,
    testReduxData: testReduxDataReducer,
    plots,
});

export default allReducer;