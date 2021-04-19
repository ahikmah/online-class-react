import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import StudentDetailActivityTemp from '../templates/StudentDetailActivityTemp';
import ClassDetailInformation from '../component/ClassDetailInformation';
import ClassDetailProgress from '../component/ClassDetailProgress';
import { connect } from 'react-redux';
import { getSchedule } from '../redux/ActionCreators/user';
import { getCourseData } from '../redux/ActionCreators/course';

function StudentClassDetail(props) {
    let { id, course } = useParams();
    let content, active, score;

    const { getCourse, dataCourseReducer, getMyClass, dataUserReducer } = props;

    const [courseDetail, setCourseDetail] = useState('');
    const [courseUser, setCourseUser] = useState('');
    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMyClass();
            getCourse('http://localhost:8000/data/courses/detail/' + course);
            ref.current = true;
        } else {
            if (dataCourseReducer.isPending) {
                console.log('Loading...');
            } else if (dataCourseReducer.isFulfilled) {
                setCourseDetail(dataCourseReducer.result[0]);
                setCourseUser(dataUserReducer.result);
                // console.log('info', dataCourseReducer.info);
            } else if (dataCourseReducer.isRejected) {
                console.log('Failed');
            }
        }
    });

    // console.log(courseDetail);
    // console.log(courseUser);

    if (id === 'information') {
        content = <ClassDetailInformation idCourse={course} />;
        active = 0;
    } else if (id === 'progress') {
        content = <ClassDetailProgress idCourse={course} />;
        active = 1;
    } else if (id === 'discussion') {
        content = (
            <h1 className='d-flex justify-content-center text-danger'>
                404 : Not Found!
            </h1>
        );
        active = 2;
    }
    if (courseUser.length > 0) {
        const index = courseUser.findIndex((el) => el.id === Number(course));

        // console.log('score', index);
        if (index !== -1) score = courseUser[index].score;
        // console.log(score);
    } else {
        score = null;
    }
    return (
        <div>
            <StudentDetailActivityTemp
                menu={active}
                name={courseDetail ? courseDetail.course_name : null}
                level={courseDetail ? courseDetail.level : null}
                category={courseDetail ? courseDetail.category : null}
                price={courseDetail ? courseDetail.price : null}
                body={content}
                score={score}
                progress={
                    courseDetail ? courseDetail.progress_in_percent : null
                }
                idCourse={course}
            />
        </div>
    );
}

const mapStatetoProps = (state) => {
    const { dataCourseReducer, dataUserReducer } = state;
    return {
        dataCourseReducer,
        dataUserReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: () =>
            dispatch(
                getSchedule('http://localhost:8000/data/student/my-class')
            ),
        getCourse: (url) => dispatch(getCourseData(url)),
    };
};

const ConnectedStudentClassDetail = connect(
    mapStatetoProps,
    mapDispatchToProps
)(StudentClassDetail);
export default ConnectedStudentClassDetail;

// export default StudentClassDetail;
