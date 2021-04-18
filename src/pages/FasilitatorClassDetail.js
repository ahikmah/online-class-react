import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FasilitatorDetailActivityTemp from '../templates/FasilitatorDetailActivityTemp';
import ClassDetailInformation from '../component/ClassDetailInformation';
import ClassDetailProgress from '../component/ClassDetailProgress';
import MemberList from '../component/MemberList';
import { connect } from 'react-redux';
import { getCourseData } from '../redux/ActionCreators/course';
function FasilitatorClassDetail(props) {
    let { id, course, user } = useParams();
    // console.log('ini class',id);
    let content, active, userid;
    const { getCourse, dataCourseReducer } = props;

    const [courseDetail, setCourseDetail] = useState();

    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getCourse('http://localhost:8000/data/courses/detail/' + course);
            ref.current = true;
        } else {
            if (dataCourseReducer.isPending) {
                console.log('Loading...');
            } else if (dataCourseReducer.isFulfilled) {
                setCourseDetail(dataCourseReducer.result[0]);
                // console.log('info', dataCourseReducer.info);
            } else if (dataCourseReducer.isRejected) {
                console.log('Failed');
            }
        }
    });

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
    } else if (id === 'member') {
        content = <MemberList idCourse={course} />;
        active = 3;
    } else if (Number(user) > 0) {
        userid = Number(user);
    }

    return (
        <div>
            <FasilitatorDetailActivityTemp
                menu={active}
                name={courseDetail ? courseDetail.course_name : null}
                level={courseDetail ? courseDetail.level : null}
                category={courseDetail ? courseDetail.category : null}
                price={courseDetail ? courseDetail.price : null}
                body={content}
                progress={
                    courseDetail ? courseDetail.progress_in_percent : null
                }
                idCourse={courseDetail ? course : null}
                user={userid}
            />
        </div>
    );
}

const mapStatetoProps = (state) => {
    const { dataCourseReducer } = state;
    return {
        dataCourseReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCourse: (url) => dispatch(getCourseData(url)),
    };
};

const ConnectedFasilitatorClassDetail = connect(
    mapStatetoProps,
    mapDispatchToProps
)(FasilitatorClassDetail);
export default ConnectedFasilitatorClassDetail;
// export default FasilitatorClassDetail;
