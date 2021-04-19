import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/ModalMember.css';

import ProfilePicture from '../assets/images/profile-picture.png';

import { Link } from 'react-router-dom';
import CloseButton from '../assets/images/close-button.png';
import ProgressPreview from '../component/ClassDetailProgressPrev';

import { connect } from 'react-redux';
import { getCourseMember } from '../redux/ActionCreators/course';

function ProgressPopup(props) {
    const { courseMemberReducer, getMember } = props;
    const [memberList, setMemberList] = useState();
    // // const ava = ClassMemberList.map((x) => x.ava);
    // // const name = ClassMemberList.map((x) => x.name);
    let ava, name;

    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMember(
                'http://localhost:8000/data/instructor/course-member/' +
                    props.idCourse
            );
            ref.current = true;
        } else {
            if (courseMemberReducer.isPending) {
                console.log('Loading...');
            } else if (courseMemberReducer.isFulfilled) {
                setMemberList(courseMemberReducer.result);

                // console.log('info', courseMemberReducer.info);
            } else if (courseMemberReducer.isRejected) {
                console.log('Failed');
            }
        }
    });
    let index;
    if (memberList && props.i) {
        index = memberList.findIndex((el) => el.id === props.i);
        ava = memberList.map((item) => {
            return item.avatar;
        });
        name = memberList.map((item) => {
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
                            memberList && props.i
                                ? ava[index]
                                    ? 'http://localhost:8000' + ava[index]
                                    : ProfilePicture
                                : null
                        }
                        alt='avatar'
                    ></img>
                    <h5>{memberList && props.i ? name[index] : null}</h5>
                </header>
                <hr />
                <div className='progress-prev-wrapper'>
                    <ProgressPreview />
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
