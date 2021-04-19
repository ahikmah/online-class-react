import axios from 'axios';

export const getProgressMember = (url) => {
    const token = localStorage.token;

    return {
        type: 'GET_PROGRESS_MEMBER',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};
