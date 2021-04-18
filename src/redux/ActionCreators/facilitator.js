import axios from 'axios';
export const getDataFacilitator = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_DATA_FACILITATOR',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};
