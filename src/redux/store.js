import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';

import {
    loginReducer,
    registerReducer,
    getDataUserReducer,
} from './Reducers/auth';
import { dataUserReducer, progressStudentReducer } from './Reducers/user';
import { progressMemberReducer } from './Reducers/facilitator';
import { dataCourseReducer, courseMemberReducer } from './Reducers/course';

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
    loginReducer,
    registerReducer,
    getDataUserReducer,
    dataUserReducer,
    progressMemberReducer,
    progressStudentReducer,
    dataCourseReducer,
    courseMemberReducer,
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
