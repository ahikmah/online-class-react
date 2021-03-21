import React from 'react'
import '../assets/css/Sidebar.css'
import { Link } from 'react-router-dom'

// Import icon nav
import dashboardIcon from '../assets/images/icon-dashboard.png'
import activityIcon from '../assets/images/icon-activity.png'
import settingIcon from '../assets/images/icon-setting.png'
import helpIcon from '../assets/images/icon-help.png'
import logoutIcon from '../assets/images/icon-logout.png'

import dashboardIconActive from '../assets/images/icon-dashboard-active.png'
import activityIconActive from '../assets/images/icon-activity-active.png'


function Sidebar(props) {

    // Add active class to the active menu
    const classNavItem = ['side-nav-item nav-link']
    const classNavItemActive =  classNavItem.push('active-sidebar')

    return (
        <div>
            <aside className="sidebar">

                {/* <!-- Notification --> */}
                <div className="side-notif-section">
                    <Link to=""><i className="fas fa-bell" style="color: white;"></i></Link>
                    <span></span>
                </div>
                {/* <!-- End of Notification --> */}

                {/* <!-- Profile --> */}
                <div className="side-profile-section d-flex flex-column">
                    <div className="side-avatar"> <img src="../assets/images/avatar.png" alt=""/></div>
                    <Link to="profile.html" className="side-name">Emir Kharisma</Link>
                    <small className="side-status">online</small>
                </div>
                {/* <!-- End of Profile --> */}

                {/* <!-- Menu --> */}
                <nav className="d-flex flex-column">
                    <Link to="all-schedule.html" className={props.active-menu===1 ? classNavItemActive.join(' '):classNavItem.join(' ')}>
                        <img src={props.active-menu ? dashboardIconActive : dashboardIcon} alt="icon dashboard"/>
                        <span>Dashboard</span></Link>
                    <Link to="activity.html" className={props.active-menu===2 ? classNavItemActive.join(' ') : classNavItem.join(' ')}>
                        <img src={props.active-menu ? activityIconActive : activityIcon} alt="icon activity"/>
                        <span>Activity</span></Link>
                    <Link to="profile.html" className={props.active-menu===3 ? classNavItemActive.join(' ') : classNavItem.join(' ')}>
                        <img src={settingIcon} alt="icon setting"/>
                        <span>Settings</span></Link>
                    <Link to="" className={props.active-menu===4 ? classNavItemActive.join(' ') : classNavItem.join(' ')}>
                        <img src={helpIcon} alt="icon help"/>
                        <span>Help</span></Link>
                    <Link to="/" className={props.active-menu===5 ? classNavItemActive.join(' ') : classNavItem.join(' ')}>
                        <img src={logoutIcon} alt="icon logout"/>
                        <span>Logout</span></Link>
                    <div className="side-nav-item"></div>
                </nav>
                {/* <!-- End of Menu --> */}

            </aside>
        </div>
    )
}

export default Sidebar
