import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';

import {
    loginReducer,
    registerReducer,
    getDataUserReducer,
} from './Reducers/auth';
import { dataStudentReducer, progressStudentReducer } from './Reducers/student';
import { dataFacilitatorReducer } from './Reducers/facilitator';
import { dataCourseReducer } from './Reducers/course';

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
    loginReducer,
    registerReducer,
    getDataUserReducer,
    dataStudentReducer,
    dataFacilitatorReducer,
    progressStudentReducer,
    dataCourseReducer,
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
