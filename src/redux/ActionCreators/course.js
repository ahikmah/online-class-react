import axios from 'axios';

export const getCourseData = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_DATA_COURSE',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};
