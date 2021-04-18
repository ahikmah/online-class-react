import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';

import {
    loginReducer,
    registerReducer,
    getDataUserReducer,
} from './Reducers/auth';
import { dataStudentReducer } from './Reducers/student';
import { dataCourseReducer } from './Reducers/course';

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
    loginReducer,
    registerReducer,
    getDataUserReducer,
    dataStudentReducer,
    dataCourseReducer,
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
