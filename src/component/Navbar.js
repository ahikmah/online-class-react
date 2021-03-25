import { Link, useHistory } from 'react-router-dom'
import '../assets/css/Navbar.css'

import Avatar from '../assets/images/avatar.png'


// Import icon nav
import dashboardIcon from '../assets/images/icon-dashboard.png'
import activityIcon from '../assets/images/icon-activity.png'
import settingIcon from '../assets/images/icon-setting.png'
import helpIcon from '../assets/images/icon-help.png'
import logoutIcon from '../assets/images/icon-logout.png'

import dashboardIconActive from '../assets/images/icon-dashboard-active.png'
import activityIconActive from '../assets/images/icon-activity-active.png'

import React from 'react'

function Navbar(props) {
     // Add active class to the activeMenu
     const classNavItem = ['side-nav-item nav-link']
     const classNavItemActive =  ['side-nav-item nav-link','active-sidebar']
 
     const customProfile = {background: "linear-gradient(180deg, white 60%, #5784BA 60%)"}
    //  const customSpan = props.activeMenu===0?{border: "white solid 0.14rem"}:{border: "#5784BA solid 0.14rem"};
    return (
        <div>
            <nav className="nav">
                <Link to="/dashboard/all-schedule"><img src={props.activeMenu===1?dashboardIconActive:dashboardIcon} alt=""/></Link>
                <Link to="/student-activity"><img src={props.activeMenu===2?activityIconActive:activityIcon} alt=""/></Link>
                <Link to="/profile"><img src={settingIcon} alt=""/></Link>
                <Link to=""><img src={helpIcon} alt=""/></Link>
                <div className="side-notif-section nav">
                    <Link to=""><i className="fas fa-bell" style={{color: "white"}}></i></Link>
                    <span style={{border: "#5784BA solid 0.14rem"}}></span>
                </div>
                <Link to="/"><img src={logoutIcon} alt=""/></Link>
            </nav>
        </div>
    )
}

export default Navbar
