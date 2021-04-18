import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { getCourseData } from '../redux/ActionCreators/course';

function ClassDetailInformation(props) {
    const { getCourse, dataCourseReducer } = props;
    const [courseDetail, setCourseDetail] = useState();
    let objectives, requirements;
    const ref = useRef();
    // console.log(props.idCourse);

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getCourse(
                'http://localhost:8000/data/courses/detail/' + props.idCourse
            );
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

    if (courseDetail) {
        // const objective = courseDetail.objectives.split('#');
        objectives = courseDetail.objectives
            .split('#')
            .filter((i) => i !== '')
            .map((i) => {
                return <li key={i}> {i}</li>;
            });
        requirements = courseDetail.requirements
            .split('#')
            .filter((i) => i !== '')
            .map((i) => <li key={i}>{i}</li>);
    }
    // console.log(courseDetail);
    return (
        <div>
            <div className='desc-title'>Description</div>
            <div className='desc-body'>
                {courseDetail ? courseDetail.description : null}
            </div>
            <div className='desc-title '>What will I learn?</div>
            <div className='desc-body'>{objectives}</div>
            <div className='desc-title '>Requirements</div>
            <div className='desc-body'>{requirements}</div>
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

const ConnectedClassDetailInformation = connect(
    mapStatetoProps,
    mapDispatchToProps
)(ClassDetailInformation);
export default ConnectedClassDetailInformation;
// export default ClassDetailInformation;
