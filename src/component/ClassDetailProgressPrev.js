import React, { useEffect, useRef } from 'react';
import ClassProgressItem from './ClassProgressItemPrev';
import ClassProgressList from '../assets/data/classprogress';
import '../assets/css/ClassProgress.css';

import { connect } from 'react-redux';
import { getProgressMember } from '../redux/ActionCreators/facilitator';

function ClassDetailProgress(props) {
    const { progressMemberReducer, getProgress } = props;

    useEffect(() => {
        getProgress(
            'http://localhost:8000/data/instructor/member-progress/' +
                props.idCourse +
                '/' +
                props.idUser
        );
        // eslint-disable-next-line
    }, [props.idUser, props.idCourse]);
    let dataProgress;
    if (progressMemberReducer.isFulfilled) {
        dataProgress = progressMemberReducer.result.map((cl, i) => {
            return (
                <ClassProgressItem
                    key={cl.i}
                    name={cl.chapter_name}
                    score={cl.score}
                />
            );
        });
    }
    return <div className='prg-scrl'>{dataProgress}</div>;
}

const mapStatetoProps = (state) => {
    const { progressMemberReducer } = state;
    return {
        progressMemberReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProgress: (url) => dispatch(getProgressMember(url)),
    };
};

const ConnectedClassDetailProgress = connect(
    mapStatetoProps,
    mapDispatchToProps
)(ClassDetailProgress);
export default ConnectedClassDetailProgress;
// export default ClassDetailProgress;
