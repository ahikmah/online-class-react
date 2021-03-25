import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Dashboard.css'
import Sidebar from '../component/Sidebar'
import NewsHeadline from '../component/NewsHeadline'
import newsBanner from '../assets/images/news-banner.png'
import plusIcon from '../assets/images/Plus Icon white.png'
import WeekCalendar from '../component/WeekCalendar'
import MessagePanel from '../component/MessagePanel'
import FasClassListCard from '../component/FasClassListCard'
import Navbar from '../component/Navbar'

function DashboardFasilitator() {
    return (
        <>
        <Navbar activeMenu={1}/>
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
                            <WeekCalendar role="fasilitator"/>
                            <br/><br/>
                            {/* Class List */}
                            <FasClassListCard time= "08.00 - 09.40" name= "Front-end fundamentals" member= "24"/>
                            <FasClassListCard time= "11.00 - 11.40" name= "HTML for Beginners" member= "32"/>
                            
                            <Link to=""> 
                                <div className="new-task-button d-flex justify-content-evenly align-items-center">
                                    <img src={plusIcon} alt="new task icon button"/>
                                    New Task
                                </div>
                            </Link>                        

                        </div>

                    </main>


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

export default DashboardFasilitator
