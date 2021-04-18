import axios from 'axios';

export const getCourseData = (url) => {
    return {
        type: 'GET_DATA_COURSE',
        payload: axios.get(url),
    };
};
