import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: data,
    };
};
export const logoutUser = (data) => {
    return {
        type: 'LOGOUT_USER',
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

export const getDataUser = (url) => {
    const token = localStorage.token;
    return {
        type: 'GET_DATA_USER',
        payload: axios.get(url, {
            headers: { 'x-access-token': `Bearer ${token}` },
        }),
    };
};
