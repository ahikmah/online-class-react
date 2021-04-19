import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { getDataUser } from '../redux/ActionCreators/auth';

function Dashboard(props) {
    const history = useHistory();

    const { getUser, getDataUserReducer } = props;
    const ref = useRef();
    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getUser();
            ref.current = true;
        } else {
            if (getDataUserReducer.isPending) {
                console.log('Loading...');
            } else if (getDataUserReducer.isFulfilled) {
                localStorage.setItem(
                    'full_name',
                    getDataUserReducer.currentUser.full_name
                );
                localStorage.setItem(
                    'avatar',
                    getDataUserReducer.currentUser.avatar
                );

                history.replace(
                    getDataUserReducer.currentUser.role === 'student'
                        ? '/student/dashboard/all-schedule'
                        : '/facilitator/dashboard'
                );
            } else if (getDataUserReducer.isRejected) {
                console.log('Failed');
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

const ConnectedDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;
// export default Dashboard;
