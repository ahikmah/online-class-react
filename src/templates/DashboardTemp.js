import React from 'react'
import Sidebar from '../component/Sidebar'
import NewsHeadline from '../component/NewsHeadline'
import WeekCalendar from '../component/WeekCalendar'
import NewsBanner from '../assets/images/news-banner.png'

function DashboardTemp(props) {
    
    return (
        <div>
            <div className="container-fluid">

            <div className="row">
                {/* <!-- Sidebar --> */}
                <Sidebar active-menu={props.num-menu}/>

                {/* <!-- Content --> */}
                <div id="content" className="col-7">

                    {/* <!-- News --> */}
                    <NewsHeadline
                        banner-pict = {NewsBanner}
                        headline = 'New update for front end development className sylabus!'
                    />
                    

                    {/* <!-- Schedule --> */}
                    <div id="schedule" className="container">
                        <WeekCalendar/>
                        
                        {/* <!-- Schedule Menu --> */}
                        <div id="schedule-menu" className="text-center">
                            <a href="all-schedule.html" className="active-menu-schedule">All Schedule</a>
                            <a href="for-you.html">For you</a>
                        </div>

                        {/* <!-- timeline --> */}
                        {/* <!-- HALO --> */}
                        <span className="timeline">8:00</span>
                        <div className="item-group container d-flex flex-row justify-content-between ">
                            <div className="col-6 card className-item ">
                                <div className="row d-flex">
                                    <div className="col schedule-item">
                                        <a href="">Introduction to Banking Finace</a></div>
                                    <div className="col option-menu">
                                        <a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                                <div className="thumbnail-item"><img src="../assets/images/Finance Icon.png" alt=""/></div>
                                <div className="duration"><small>100 minutes</small></div>

                            </div>
                            <div className="col-6 card className-item ">
                                <div className="d-flex flex-row">
                                    <div className="col schedule-item">
                                        <a href=""> Trigonometry</a></div>
                                    <div className="col option-menu">
                                        <a href=""><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                                <div className="thumbnail-item"><img src="../assets/images/Finance Icon.png" alt=""/></div>
                                <div className="duration"><small>50 minutes</small></div>

                            </div>
                            <div className="col-6 card className-item ">
                                <div className="d-flex flex-row">
                                    <div className="col schedule-item">
                                        <a href=""> Trigonometry</a></div>
                                    <div className="col option-menu">
                                        <a href=""><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                                <div className="thumbnail-item"><img src="../assets/images/Finance Icon.png" alt=""/></div>
                                <div className="duration"><small>50 minutes</small></div>

                            </div>
                        </div>

                        <span className="timeline">11:00</span>
                        <div className="item-group container d-flex flex-row justify-content-between ">
                            <div className="col-6 card className-item ">
                                <div className="d-flex flex-row ">
                                    <div className="col schedule-item">
                                        <a href=""> History of Europe</a></div>
                                    <div className="col option-menu">
                                        <a href=""><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                                <div className="thumbnail-item"><img src="../assets/images/History Icon.png" alt=""></div>
                                <div className="duration"><small>100 minutes</small></div>

                            </div>
                        </div>
                        
                        <span className="timeline">13:00</span>
                        <div className="item-group container d-flex flex-row justify-content-between ">
                            <div className="col-6 card className-item ">
                                <div className="d-flex flex-row">
                                    <div className="col schedule-item">
                                        <a href=""> Fundamental of Front End Dev.</a></div>
                                    <div className="col option-menu">
                                        <a href=""><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                                <div className="thumbnail-item"><img src="../assets/images/Software Icon.png" alt=""/></div>
                                <div className="duration"><small>50 minutes</small></div>

                            </div>
                            <div className="col-6 card className-item ">
                                <div className=" d-flex flex-row">
                                    <div className="col schedule-item">
                                        <a href=""> Molecular Biology</a>

                                    </div>
                                    <div className="col option-menu">
                                        <a href=""> <i className="fas fa-ellipsis-h"></i></a>
                                    </div>
                                </div>
                                <div className="thumbnail-item"><img src="../assets/images/Software Icon.png" alt=""/></div>
                                <div className="duration"><small>50 minutes</small></div>

                            </div>

                        </div>

                        <span className="timeline">Finish</span>

                    </div>


                    {/* <!-- End of Schedule --> */}

                </div>
                {/* <!-- End of Content --> */}


                {/* <!-- Message Panel --> */}
                <div className="container col-2" id="msg-panel">
                    <!-- Head Section -->
                    <div id="msg-head" className="d-flex justify-content-between ">
                        <div className="sub-label ">Messages</div>
                        <div id="msg-icon ">
                            <a href=" "><img src="../assets/images/Plus Icon.png " alt="plus icon "/></a>
                        </div>
                    </div>

                    <!-- Search box -->
                    <div id="search-bar" className="row search-bar ">
                        <form action="# ">
                            <div className="col col-12 form-group ">
                                <label for="search "><i className="fas fa-search "></i></label>
                                <input type="text " className="form-control search " name="search " placeholder="Search ">
                            </div>
                        </form>
                    </div>

                    <!-- main chat -->
                    <div id="chat-list ">
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat1.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> Nissa Sabyan</a></div>
                                <div className="snippet-chat ">How about number 3?</div>
                            </div>
                            <div className="time-chat ">10.15pm</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat2.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> Rio Dewanto</a></div>
                                <div className="snippet-chat ">I'm hungry</div>
                            </div>
                            <div className="time-chat ">9.12pm</div>
                        </div>
                        <div className="group-list d-flex ">
                            <div className="ava-chat ">
                                <a href=" ">
                                    <a href=" "><img src="../assets/images/ava-chat3.png " alt="avatar chat "/></a>
                            </div>
                            <div className="main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> Discussion Group 21(5)</a></div>
                                <div className="snippet-chat ">Nissa : Let’s finish the task for tomorrow</div>
                            </div>
                            <div className="time-chat ">1.23pm</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <div className="ava-chat ">
                                    <a href=" "><img src="../assets/images/ava-chat4.png " alt="avatar chat "/></a>
                                </div>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" ">Isyana Sarasvati</a> </div>
                                <div className="snippet-chat ">Thanks!</div>
                            </div>
                            <div className="time-chat ">Yesterday</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <div className="ava-chat ">
                                    <a href=" "><img src="../assets/images/ava-chat5.png " alt="avatar chat "/></a>
                                </div>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> Tompi</a></div>
                                <div className="snippet-chat ">See you later!</div>
                            </div>
                            <div className="time-chat ">Yesterday</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat6.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> You, Tompi, Isyana Sarasvati, Peppy</a></div>
                                <div className="snippet-chat ">Haha. Yes, I heard it before that you and rossa.</div>
                            </div>
                            <div className="time-chat ">8/10</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat7.png " alt="avatar chat "></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" ">Peppy</a> </div>
                                <div className="snippet-chat ">Haha. Me too</div>
                            </div>
                            <div className="time-chat ">7/10</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat8.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" ">Sandra Dewi</a> </div>
                                <div className="snippet-chat ">How about number 3?</div>
                            </div>
                            <div className="time-chat ">1/10</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat9.png " alt="avatar chat "></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" ">Reza Rahadian</a> </div>
                                <div className="snippet-chat ">I’m hungry.</div>
                            </div>
                            <div className="time-chat ">1/10</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat10.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" ">Discussion Group 23 (5)</a> </div>
                                <div className="snippet-chat ">Nissa : Let’s finish the task for tomorrow</div>
                            </div>
                            <div className="time-chat ">22/9</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat11.png " alt="avatar chat "></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> Raisa</a></div>
                                <div className="snippet-chat ">Thanks</div>
                            </div>
                            <div className="time-chat ">21/9</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat12.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" "> dr. Adrian</a></div>
                                <div className="snippet-chat ">See you later!</div>
                            </div>
                            <div className="time-chat ">21/9</div>
                        </div>
                        <div className="group-list d-flex justify-content-between ">
                            <div className="ava-chat ">
                                <a href=" "><img src="../assets/images/ava-chat13.png " alt="avatar chat "/></a>
                            </div>
                            <div className="col main-chat ">
                                <div className="name-chat ">
                                    <a href=" ">Uus</a> </div>
                                <div className="snippet-chat ">Haha Me too</div>
                            </div>
                            <div className="time-chat ">11/8</div>
                        </div>
                    </div>


                </div>
                {/* <!-- End of Message Panel --> */}


                <!-- Msg float -->
                <div className="hidden">
                    <button className="msg-float" type="button"> Messages <i className="far fa-comment-dots"></i></button>
                </div>

            </div>
            </div>
        </div>
    )
}

export default DashboardTemp
