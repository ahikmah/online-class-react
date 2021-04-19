import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Dashboard.css';
import Sidebar from './Sidebar';
import NewsHeadline from './NewsHeadline';
import newsBanner from '../assets/images/news-banner.png';
import plusIcon from '../assets/images/Plus Icon white.png';
import WeekCalendar from './WeekCalendar';
import MessagePanel from './MessagePanel';
import FasClassListCard from './FasClassListCard';
import Navbar from './Navbar';
import MessageButton from './MessageButton';
import { connect } from 'react-redux';
// import { getDataFacilitator } from '../redux/ActionCreators/facilitator';
import { getSchedule } from '../redux/ActionCreators/user';
function DashboardFasilitator(props) {
    const [mySchedule, setMySchedule] = useState();
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
    let classItems;
    // console.log(dayName);

    // const { dataUserReducer, getAllSchedule } = props;
    const { dataUserReducer, getAllSchedule } = props;

    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getAllSchedule(
                'http://localhost:8000/data/instructor/my-schedule?day=' +
                    dayName
            );
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
    //         .get(
    //             'http://localhost:8000/data/instructor/my-schedule/1?day=' +
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
        classItems = mySchedule.map((cl) => {
            return (
                <FasClassListCard
                    key={cl.course_id}
                    start={cl.start_time}
                    end={cl.end_time}
                    name={cl.course_name}
                    member={cl.num_of_member}
                />
            );
        });
    }
    return (
        <>
            <Navbar activeMenu={1} />
            <div className='container-fluid dashboard'>
                <div className='row'>
                    {/* <!-- Sidebar --> */}
                    <Sidebar activeMenu={1} />

                    {/* <!-- Content --> */}
                    <main className='col-7 content-dashboard'>
                        {/* <!-- News Section --> */}
                        <NewsHeadline
                            bannerImage={newsBanner}
                            headlineTitle='New update for front end development class sylabus!'
                        />

                        {/* <!-- Schedule Section --> */}
                        <div className='container schedule'>
                            <WeekCalendar role='facilitator' />
                            <br />
                            <br />
                            {/* Class List */}
                            {classItems}

                            <Link to=''>
                                <div className='new-task-button d-flex justify-content-evenly align-items-center'>
                                    <img
                                        src={plusIcon}
                                        alt='new task icon button'
                                    />
                                    New Task
                                </div>
                            </Link>
                        </div>
                    </main>

                    {/* <!-- Message Panel --> */}
                    <MessagePanel />

                    {/* <!-- Msg float --> */}
                    <MessageButton />
                </div>
            </div>
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
        getAllSchedule: (url) => dispatch(getSchedule(url)),
    };
};

const ConnectedDashboardFasilitator = connect(
    mapStatetoProps,
    mapDispatchToProps
)(DashboardFasilitator);
export default ConnectedDashboardFasilitator;

// export default DashboardFasilitator;
