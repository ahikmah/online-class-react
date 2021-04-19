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

export const getCourseCategory = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_COURSE_CATEGORY',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};

export const getCourseMember = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_COURSE_MEMBER',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};
