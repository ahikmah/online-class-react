const initialState = {
    result: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: {},
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                result: payload.data.result,
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const registerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'REGISTER_PENDING':
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                result: payload.data.result,
            };
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isRejected: true,
                isPending: false,
                result: payload,
            };
        default:
            return state;
    }
};

// export default loginReducer;
