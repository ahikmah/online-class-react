import React, { useState, useEffect } from 'react';
import TimelineItem from '../component/TimelineItem';
import SoftwareIcon from '../assets/images/Finance Icon.png';
import axios from 'axios';

function AllSchedule() {
    const [mySchedule, setMySchedule] = useState();
    let classItems8, classItems11, classItems13;

    useEffect(() => {
        axios
            .get('http://localhost:8000/data/student/all-schedule/6')
            .then((res) => {
                setMySchedule(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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

export default AllSchedule;
