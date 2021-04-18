import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

function Activity(props) {
    const history = useHistory();
    const { getDataUserReducer } = props;

    // eslint-disable-next-line
    useEffect(() => {
        history.replace(
            getDataUserReducer.currentUser.role === 'student'
                ? '/student/activity'
                : '/facilitator/activity'
        );
    });
    return <></>;
}

const mapStateToProps = (state) => {
    const { getDataUserReducer } = state;
    return {
        getDataUserReducer,
    };
};

const ConnectedActivity = connect(mapStateToProps)(Activity);

export default ConnectedActivity;
