import axios from 'axios';

export const getSchedule = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_DATA_STUDENT',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};

export const getMyClass = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_MY_CLASS',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};

export const getProgressStudent = (url) => {
    const token = localStorage.token;

    return {
        type: 'GET_PROGRESS_STUDENT',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};
