import React from 'react'
import Sidebar from '../component/Sidebar'
import NewsHeadline from '../component/NewsHeadline'
import WeekCalendar from '../component/WeekCalendar'
import MessagePanel from '../component/MessagePanel'
import AllSchedule from '../pages/AllSchedule'
import ForYou from '../pages/ForYou'
import '../assets/css/Dashboard.css'
import NewsBanner from '../assets/images/news-banner.png'

function DashboardTemp(props) {
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* <!-- Sidebar --> */}
                    <Sidebar active-menu={props.num-menu}/>

                    {/* <!-- Content --> */}
                    <div className="content-dashboard" className="col-7">

                        {/* <!-- News --> */}
                        <NewsHeadline
                            banner-pict = {NewsBanner}
                            headline = 'New update for front end development className sylabus!'
                        />
                        
                        {/* <!-- Schedule --> */}
                        <section className="schedule-dashboard" className="container">
                            <WeekCalendar/>
                            {/* <!-- Schedule Menu --> */}
                            <div className="schedule-menu" className="text-center">
                                <Link to="all-schedule.html" className="active-menu-schedule">All Schedule</Link>
                                <Link to="for-you.html">For you</Link>
                            </div>

                            {/* <!-- timeline --> */}
                            {/* ALL SCHEDULE CONTENT */}

                        </section>


                        {/* <!-- End of Schedule --> */}

                    </div>
                    {/* <!-- End of Content --> */}


                    {/* <!-- Message Panel --> */}
                    <MessagePanel/>
                    {/* <!-- End of Message Panel --> */}


                    {/* <!-- Msg float --> */}
                    <div className="hidden">
                        <button className="msg-float" type="button"> Messages <i className="far fa-comment-dots"></i></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardTemp
