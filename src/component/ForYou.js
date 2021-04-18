import React, { useState, useEffect, useRef } from 'react';
import TimelineItem from './TimelineItem';
import FinanceIcon from '../assets/images/Finance Icon.png';

import { connect } from 'react-redux';
import { getDataStudent } from '../redux/ActionCreators/student';

function ForYou(props) {
    const [mySchedule, setMySchedule] = useState();
    let classItems8, classItems11, classItems13;

    const { dataStudentReducer, getMySchedule } = props;

    const ref = useRef();
    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMySchedule();
            ref.current = true;
        } else {
            if (dataStudentReducer.isPending) {
                console.log('Loading...');
            } else if (dataStudentReducer.isFulfilled) {
                setMySchedule(dataStudentReducer.result);
            } else if (dataStudentReducer.isRejected) {
                console.log('Failed');
            }
        }
    });
    // useEffect(() => {
    //     axios
    //         .get(
    //             'http://localhost:8000/data/student/all-schedule/6?day=' +
    //                 dayName
    //         )
    //         .then((res) => {
    //             setMySchedule(res.data.result);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [dayName]);

    if (mySchedule) {
        classItems8 = mySchedule
            .filter((mySchedule) => mySchedule.time === '08:00:00')
            .map((cl) => {
                return (
                    <TimelineItem
                        key={cl.id}
                        name={cl.course_name}
                        duration={cl.duration}
                        thumbnail={FinanceIcon}
                    />
                );
            });

        classItems11 = mySchedule
            .filter((mySchedule) => mySchedule.time === '11:00:00')
            .map((cl) => {
                return (
                    <TimelineItem
                        key={cl.id}
                        name={cl.course_name}
                        duration={cl.duration}
                        thumbnail={FinanceIcon}
                    />
                );
            });
        classItems13 = mySchedule
            .filter((mySchedule) => mySchedule.time === '13:00:00')
            .map((cl) => {
                return (
                    <TimelineItem
                        key={cl.id}
                        name={cl.course_name}
                        duration={cl.duration}
                        thumbnail={FinanceIcon}
                    />
                );
            });
    }
    return (
        <>
            {mySchedule ? (
                classItems8.length > 0 ? (
                    <>
                        <span className='timeline'>8:00</span>
                        <div className='item-group container d-flex flex-row justify-content-between '>
                            {classItems8}
                        </div>
                    </>
                ) : null
            ) : null}

            {mySchedule ? (
                classItems11.length > 0 ? (
                    <>
                        <span className='timeline'>11:00</span>
                        <div className='item-group container d-flex flex-row justify-content-between '>
                            {classItems11}
                        </div>
                    </>
                ) : null
            ) : null}

            {mySchedule ? (
                classItems13.length > 0 ? (
                    <>
                        <span className='timeline'>13:00</span>
                        <div className='item-group container d-flex flex-row justify-content-between '>
                            {classItems13}
                        </div>
                    </>
                ) : null
            ) : null}

            <span className='timeline'>Finish</span>
        </>
    );
}
const mapStatetoProps = (state) => {
    const { dataStudentReducer } = state;
    return {
        dataStudentReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const d = new Date();
    const dayName = days[d.getDay()];
    // console.log('hari ini', dayName);
    return {
        getMySchedule: () =>
            dispatch(
                getDataStudent(
                    'http://localhost:8000/data/student/all-schedule?day=' +
                        dayName
                )
            ),
    };
};

const ConnectedForYou = connect(mapStatetoProps, mapDispatchToProps)(ForYou);
export default ConnectedForYou;
