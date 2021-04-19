const initialState = {
    result: {},
    info: {},
    myClass: {},
    myClassPage: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: {},
};

export const dataUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGOUT_USER':
            return {
                ...state,
                result: {},
            };
        case 'GET_DATA_STUDENT_PENDING':
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_DATA_STUDENT_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                result: payload.data.result,
                info: payload.data.info,
            };
        case 'GET_DATA_STUDENT_REJECTED':
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: payload,
            };
        case 'GET_MY_CLASS_PENDING':
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_MY_CLASS_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                myClass: payload.data.result,
                myClassPage: payload.data.info,
            };
        case 'GET_MY_CLASS_REJECTED':
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

export const progressStudentReducer = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case 'LOGOUT_USER':
            return {
                ...state,
                result: {},
            };
        case 'GET_PROGRESS_STUDENT_PENDING':
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PROGRESS_STUDENT_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                result: payload.data.result,
                // info: payload.data.info,
            };
        case 'GET_PROGRESS_STUDENT_REJECTED':
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
