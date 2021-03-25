import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'


// Import icon nav
import dashboardIcon from '../assets/images/icon-dashboard.png'
import activityIcon from '../assets/images/icon-activity.png'
import settingIcon from '../assets/images/icon-setting.png'
import helpIcon from '../assets/images/icon-help.png'
import logoutIcon from '../assets/images/icon-logout.png'

import dashboardIconActive from '../assets/images/icon-dashboard-active.png'
import activityIconActive from '../assets/images/icon-activity-active.png'
import ExpandNotif from '../component/ExpandNotif'

import React, {useState} from 'react'

function Navbar(props) {
    const [notifFlag, setNotifFlag] = useState(false)

    const clickHandler=()=>{
        setNotifFlag(!notifFlag)
    }
    if(notifFlag)document.body.style.overflow = 'hidden'
    if(!notifFlag)document.body.style.overflow = 'unset'
    return (
        <>
            <nav className="nav">
                <Link to="/dashboard/all-schedule"><img src={props.activeMenu===1?dashboardIconActive:dashboardIcon} alt=""/></Link>
                <Link to="/student-activity"><img src={props.activeMenu===2?activityIconActive:activityIcon} alt=""/></Link>
                <Link to="/profile"><img src={settingIcon} alt=""/></Link>
                <Link to=""><img src={helpIcon} alt=""/></Link>
                <div className="side-notif-section nav">
                    <Link to="?" onClick={clickHandler} ><i className="fas fa-bell" style={{color: "white"}}></i></Link>
                    <span style={{border: "#5784BA solid 0.14rem"}}></span>
                </div>
                <Link to="/"><img src={logoutIcon} alt=""/></Link>
            </nav>
            {notifFlag?<ExpandNotif clc = {clickHandler} flg={notifFlag}/>:null}
        </>
    )
}

export default Navbar
