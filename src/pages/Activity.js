import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { getDataUser } from '../redux/ActionCreators/auth';

function Activity(props) {
    const history = useHistory();
    const { getUser, getDataUserReducer } = props;
    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getUser();
            ref.current = true;
        } else {
            if (getDataUserReducer.isFulfilled) {
                history.replace(
                    getDataUserReducer.currentUser.role === 'student'
                        ? '/student/activity'
                        : '/facilitator/activity'
                );
            }
        }
    });
    return <></>;
}

const mapStateToProps = (state) => {
    const { getDataUserReducer } = state;
    return {
        getDataUserReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () =>
            dispatch(getDataUser('http://localhost:8000/data/users/')),
    };
};
const ConnectedActivity = connect(
    mapStateToProps,
    mapDispatchToProps
)(Activity);

export default ConnectedActivity;
