import csvTransectionReducer from "./csvTransection";
import testReduxDataReducer from "./testReduxData";
import storeStreamData from './dataStreaming'

import {combineReducers} from 'redux'

const allReducer = combineReducers({
    csvTransection: csvTransectionReducer,
    testReduxData: testReduxDataReducer,
    storeStreamData: storeStreamData,
});

export default allReducer;