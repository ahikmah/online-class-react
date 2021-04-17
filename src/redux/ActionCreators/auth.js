import axios from 'axios';

export const userData = (data) => {
    return {
        type: 'USER_DATA',
        payload: data,
    };
};

export const login = (url, dataUser) => {
    return {
        type: 'LOGIN',
        payload: axios.post(url, dataUser),
    };
};

export const register = (url, data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(url, data),
    };
};
