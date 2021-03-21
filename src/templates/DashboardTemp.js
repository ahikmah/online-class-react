import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Dashboard.css'
import Sidebar from '../component/Sidebar'
import NewsHeadline from '../component/NewsHeadline'
import newsBanner from '../assets/images/news-banner.png'
import WeekCalendar from '../component/WeekCalendar';

import MessagePanel from '../component/MessagePanel'


function Dashboard(props) {
    let activeMenu = props.menu
    let activeClass = 'active-menu-schedule'

    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row">
                    {/* <!-- Sidebar --> */}
                    <Sidebar
                    activeMenu={1}
                    />

                    {/* <!-- Content --> */}
                    <main className="col-7 content-dashboard">

                        {/* <!-- News Section --> */}
                        <NewsHeadline bannerImage= {newsBanner} headlineTitle= "New update for front end development class sylabus!"/>

                        {/* <!-- Schedule Section --> */}
                        <div className="container schedule">
                            <WeekCalendar/>

                            {/* <!-- Schedule Menu --> */}
                            <div id="schedule-menu" className="text-center">
                                <Link to="/dashboard/all-schedule" className={activeMenu===0?activeClass:null}>All Schedule</Link>
                                <Link to="/dashboard/for-you" className={activeMenu===1?activeClass:null}>For you</Link>
                            </div>

                            {/* <!-- timeline --> */}
                            {props.timeline}
                            

                        </div>

                    </main>
                    {/* <!-- End of Content --> */}


                    {/* <!-- Message Panel --> */}
                    <MessagePanel/>


                    {/* <!-- Msg float --> */}
                    <div className="hidden">
                        <button className="msg-float" type="button"> Messages <i className="far fa-comment-dots"></i></button>
                    </div>

                </div>
                </div>




        </>
    )
}

export default Dashboard
