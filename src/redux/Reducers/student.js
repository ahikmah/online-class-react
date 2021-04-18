const initialState = {
    result: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: {},
};

export const dataStudentReducer = (state = initialState, { type, payload }) => {
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
            };
        case 'GET_DATA_STUDENT_REJECTED':
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
