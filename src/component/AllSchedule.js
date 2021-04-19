import React, { useState, useEffect, useRef } from 'react';
import TimelineItem from '../component/TimelineItem';
import SoftwareIcon from '../assets/images/Finance Icon.png';

import { connect } from 'react-redux';
import { getSchedule } from '../redux/ActionCreators/user';

function AllSchedule(props) {
    const [mySchedule, setMySchedule] = useState();
    let classItems8, classItems11, classItems13;

    const { dataUserReducer, getAllSchedule } = props;

    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getAllSchedule();
            ref.current = true;
        } else {
            if (dataUserReducer.isPending) {
                console.log('Loading...');
            } else if (dataUserReducer.isFulfilled) {
                setMySchedule(dataUserReducer.result);
            } else if (dataUserReducer.isRejected) {
                console.log('Failed');
            }
        }
    });

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8000/data/student/all-schedule/6')
    //         .then((res) => {
    //             setMySchedule(res.data.result);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    if (mySchedule) {
        classItems8 = mySchedule
            .filter((mySchedule) => mySchedule.time === '08:00:00')
            .map((cl) => {
                return (
                    <TimelineItem
                        key={cl.id}
                        name={cl.course_name}
                        duration={cl.duration}
                        thumbnail={SoftwareIcon}
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
                        thumbnail={SoftwareIcon}
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
                        thumbnail={SoftwareIcon}
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
    const { dataUserReducer } = state;
    return {
        dataUserReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSchedule: () =>
            dispatch(
                getSchedule('http://localhost:8000/data/student/all-schedule')
            ),
    };
};

const ConnectedAllSchedule = connect(
    mapStatetoProps,
    mapDispatchToProps
)(AllSchedule);
export default ConnectedAllSchedule;
