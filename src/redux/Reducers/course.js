const initialState = {
    result: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: {},
};

export const dataCourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_DATA_COURSE_PENDING':
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_DATA_COURSE_FULFILLED':
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                result: payload.data.result,
            };
        case 'GET_DATA_COURSE_REJECTED':
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
