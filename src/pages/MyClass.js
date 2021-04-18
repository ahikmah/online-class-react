import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { getDataUser } from '../redux/ActionCreators/auth';

function MyClass(props) {
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
                        ? '/student/my-class'
                        : '/facilitator/my-class'
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
const ConnectedMyClass = connect(mapStateToProps, mapDispatchToProps)(MyClass);

export default ConnectedMyClass;
