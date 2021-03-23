import React from 'react'
import '../assets/css/AllNotif.css'
import {Link} from 'react-router-dom'
import CloseIcon from '../assets/images/Close-Icon.png'
import ListNotif1 from '../assets/images/listnotif1.png'
import ListNotif2 from '../assets/images/listnotif2.png'
import ListNotif3 from '../assets/images/listnotif3.png'
import ListNotif4 from '../assets/images/listnotif4.png'
import ListNotif5 from '../assets/images/listnotif5.png'
import ListNotif6 from '../assets/images/listnotif6.png'
import ListNotif7 from '../assets/images/listnotif7.png'
import ListNotifClass from '../assets/images/listnotifclass.png'

function ExpandNotif() {
    
    return (
        <>
            <main className="all-notif">
                    <Link to="" className="close-btn-notif">
                        <img src={CloseIcon} alt="close icon"/>
                    </Link>
                    <h3 className="notif-title text-center">Notification</h3>
                    
                    <section className="today-group-notif">
                        <div className="head-timeline">Today</div>
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif1} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                            There are 10 news update for today. Don’t miss it!
                            </div>

                            <div className="col-1 list-notif-time">
                                2 min
                            </div>
                        </div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif2} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                            Nissa Sabyan sent you a message
                            </div>

                            <div className="col-1 list-notif-time">
                                1 hr
                            </div>
                        </div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif3} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                                Rio Dewanto sent you a message
                            </div>

                            <div className="col-1 list-notif-time">
                                2 hr
                            </div>
                        </div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif4} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                                6 new messages from Discussion Group 21
                            </div>

                            <div className="col-1 list-notif-time">
                                10 hr
                            </div>
                        </div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotifClass} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                                You have 2 classes today.
                            </div>

                            <div className="col-1 list-notif-time">
                                15 hr
                            </div>
                        </div>
                        
                    </section>

                    <section className="today-group-notif">
                        <div className="head-timeline">Yesterday</div>
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif1} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                            There are 4 news update for today. Don’t miss it!
                            </div>

                            <div className="col-1 list-notif-time">
                                Yesterday
                            </div>
                        </div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif5} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                            Isyana Sarasvati sent you a message
                            </div>

                            <div className="col-1 list-notif-time">
                                Yesterday
                            </div>
                        </div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif6} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                                Tompi sent you a message
                            </div>

                            <div className="col-1 list-notif-time">
                                Yesterday
                            </div>
                        </div>

                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotifClass} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                                You have 2 classes today.
                            </div>

                            <div className="col-1 list-notif-time">
                                Yesterday
                            </div>
                        </div>
                        
                    </section>
               
                    <section className="today-group-notif">
                        <div className="head-timeline">This Week</div>
                        
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotifClass} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                                You have 2 classes today.
                            </div>

                            <div className="col-1 list-notif-time">
                                8/10
                            </div>
                        </div>
                        <div className="list-notif d-flex justify-content-between align-items-center">
                            <div className="col-1 list-notif-icon">
                                <img src={ListNotif7} alt="notif list icon"/>
                            </div>
                            
                            <div className="col list-notif-content">
                            6 new messages from multi-person chat
                            </div>

                            <div className="col-1 list-notif-time">
                                8/10
                            </div>
                        </div>
                        
                    </section>
               
                </main>
        </>
    )
}

export default ExpandNotif
