import React, { useEffect, useRef } from 'react';
import '../assets/css/ModalMember.css';

import ProfilePicture from '../assets/images/profile-picture.png';

import { Link } from 'react-router-dom';
import CloseButton from '../assets/images/close-button.png';
import ProgressPreview from '../component/ClassDetailProgressPrev';

import { connect } from 'react-redux';
import { getCourseMember } from '../redux/ActionCreators/course';

function ProgressPopup(props) {
    const { courseMemberReducer, getMember } = props;

    let index, ava, name;
    const ref = useRef();
    useEffect(() => {
        if (!ref.current) {
            getMember(
                'http://localhost:8000/data/instructor/course-member/' +
                    props.idCourse
            );

            ref.current = true;
        }
    });

    if (courseMemberReducer.isFulfilled && props.i) {
        index = courseMemberReducer.result.findIndex((el) => el.id === props.i);
        ava = courseMemberReducer.result.map((item) => {
            return item.avatar;
        });
        name = courseMemberReducer.result.map((item) => {
            return item.full_name;
        });
    }

    return (
        <div className='row d-flex justify-content-center'>
            <div className='card card-progress'>
                <Link to={'/facilitator/class-detail/member/' + props.idCourse}>
                    {' '}
                    <img
                        className='cls-button card-progress'
                        src={CloseButton}
                        alt='close button'
                    />
                </Link>
                <header className='d-flex align-items-center'>
                    <img
                        src={
                            courseMemberReducer.isFulfilled && props.i
                                ? ava[index]
                                    ? 'http://localhost:8000' + ava[index]
                                    : ProfilePicture
                                : null
                        }
                        alt='avatar'
                    ></img>
                    <h5>
                        {courseMemberReducer.isFulfilled && props.i
                            ? name[index]
                            : null}
                    </h5>
                </header>
                <hr />
                <div className='progress-prev-wrapper'>
                    <ProgressPreview
                        idCourse={props.idCourse}
                        idUser={props.i}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStatetoProps = (state) => {
    const { courseMemberReducer } = state;
    return {
        courseMemberReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMember: (url) => dispatch(getCourseMember(url)),
    };
};

const ConnectedProgressPopup = connect(
    mapStatetoProps,
    mapDispatchToProps
)(ProgressPopup);
export default ConnectedProgressPopup;
// export default ProgressPopup;
