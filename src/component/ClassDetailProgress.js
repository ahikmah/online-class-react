import React, { useEffect, useState, useRef } from 'react';
import ClassProgressItem from './ClassProgressItem';
import '../assets/css/ClassProgress.css';

import { connect } from 'react-redux';
import { getProgressStudent } from '../redux/ActionCreators/student';

function ClassDetailProgress(props) {
    const [studentProgress, setStudentProgress] = useState();
    const { progressStudentReducer, getProgress } = props;
    let classProgressItems;
    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getProgress(
                'http://localhost:8000/data/student/my-progress/' +
                    props.idCourse
            );
            ref.current = true;
        } else {
            if (progressStudentReducer.isPending) {
                console.log('Loading...');
            } else if (progressStudentReducer.isFulfilled) {
                setStudentProgress(progressStudentReducer.result);
                // console.log('info', dataCourseReducer.info);
            } else if (progressStudentReducer.isRejected) {
                console.log('Failed');
            }
        }
    });

    if (studentProgress) {
        classProgressItems = studentProgress.map((cl, i) => {
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];
            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
            const d = new Date(cl.course_schedule);
            const week = 7 * 24 * 60 * 60 * 1000 * i;
            d.setTime(d.getTime() + week);
            const dayName = days[d.getDay()];
            const monthName = months[d.getMonth()];
            const formatted = `${dayName}, ${d.getDate()} ${monthName} ${d.getFullYear()}`;

            return (
                <ClassProgressItem
                    key={cl.chapter_name}
                    name={cl.chapter_name}
                    schedule={formatted}
                    start={cl.start_time.slice(0, 5)}
                    end={cl.end_time.slice(0, 5)}
                    score={cl.score}
                />
            );
        });
        console.log(studentProgress);
    }

    // const classProgressItems = ClassProgressList.map((cl) => {
    //     return (
    //         <ClassProgressItem
    //             key={cl.id}
    //             name={cl.name}
    //             note={cl.note.split(' | ').join('\n')}
    //             score={cl.score}
    //         />
    //     );
    // });
    return <div>{classProgressItems}</div>;
}

const mapStatetoProps = (state) => {
    const { progressStudentReducer } = state;
    return {
        progressStudentReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProgress: (url) => dispatch(getProgressStudent(url)),
    };
};

const ConnectedClassDetailProgress = connect(
    mapStatetoProps,
    mapDispatchToProps
)(ClassDetailProgress);
export default ConnectedClassDetailProgress;
