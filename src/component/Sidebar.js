import React, { useState } from 'react';
import '../assets/css/Sidebar.css';
import { Link } from 'react-router-dom';

import Avatar from '../assets/images/avatar.png';

// Import icon nav
import dashboardIcon from '../assets/images/icon-dashboard.png';
import activityIcon from '../assets/images/icon-activity.png';
import settingIcon from '../assets/images/icon-setting.png';
import helpIcon from '../assets/images/icon-help.png';
import logoutIcon from '../assets/images/icon-logout.png';

import dashboardIconActive from '../assets/images/icon-dashboard-active.png';
import activityIconActive from '../assets/images/icon-activity-active.png';

import ExpandNotif from '../component/ExpandNotif';

function Sidebar(props) {
    // Add active class to the activeMenu
    const classNavItem = ['side-nav-item nav-link'];
    const classNavItemActive = ['side-nav-item nav-link', 'active-sidebar'];

    const customProfile = {
        background: 'linear-gradient(180deg, white 60%, #5784BA 60%)',
    };
    const customSpan =
        props.activeMenu === 0
            ? { border: 'white solid 0.14rem' }
            : { border: '#5784BA solid 0.14rem' };

    const [notifFlag, setNotifFlag] = useState(false);

    const clickHandler = () => {
        setNotifFlag(!notifFlag);
    };

    return (
        <>
            <aside
                className='sidebar col-2'
                style={props.activeMenu === 0 ? customProfile : null}
            >
                {/* <!-- Notification --> */}
                <div className='side-notif-section'>
                    <Link to='?' onClick={clickHandler}>
                        <i
                            className='fas fa-bell'
                            style={{
                                color:
                                    props.activeMenu === 0 ? 'black' : 'white',
                            }}
                        ></i>
                    </Link>
                    <span style={customSpan}></span>
                </div>

                {/* <!-- Profile --> */}
                <div className="side-profile-section d-flex flex-column 'active-sidebar'">
                    <div className='side-avatar'>
                        {' '}
                        <img src={Avatar} alt='avatar' />
                    </div>
                    <Link
                        to='/profile'
                        className={
                            props.activeMenu === 0
                                ? 'side-name active-sidebar'
                                : 'side-name'
                        }
                    >
                        {props.name}
                    </Link>
                    <small
                        className={
                            props.activeMenu === 0
                                ? 'side-status active-sidebar'
                                : 'side-status'
                        }
                    >
                        online
                    </small>
                </div>

                {/* Menu section */}
                <nav className='d-flex flex-column'>
                    <Link
                        to='/student/dashboard/all-schedule'
                        className={
                            props.activeMenu === 1
                                ? classNavItemActive.join(' ')
                                : classNavItem.join(' ')
                        }
                    >
                        <img
                            src={
                                props.activeMenu === 1
                                    ? dashboardIconActive
                                    : dashboardIcon
                            }
                            alt='icon dashboard'
                        />
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        to='/student/activity'
                        className={
                            props.activeMenu === 2
                                ? classNavItemActive.join(' ')
                                : classNavItem.join(' ')
                        }
                    >
                        <img
                            src={
                                props.activeMenu === 2
                                    ? activityIconActive
                                    : activityIcon
                            }
                            alt='icon activity'
                        />
                        <span>Activity</span>
                    </Link>
                    <Link
                        to='/profile'
                        className={
                            props.activeMenu === 3
                                ? classNavItemActive.join(' ')
                                : classNavItem.join(' ')
                        }
                    >
                        <img src={settingIcon} alt='icon setting' />
                        <span>Settings</span>
                    </Link>
                    <Link
                        to=''
                        className={
                            props.activeMenu === 4
                                ? classNavItemActive.join(' ')
                                : classNavItem.join(' ')
                        }
                    >
                        <img src={helpIcon} alt='icon help' />
                        <span>Help</span>
                    </Link>
                    <Link
                        to='/'
                        className={
                            props.activeMenu === 5
                                ? classNavItemActive.join(' ')
                                : classNavItem.join(' ')
                        }
                    >
                        <img src={logoutIcon} alt='icon logout' />
                        <span>Logout</span>
                    </Link>
                    <div className='side-nav-item'></div>
                </nav>
            </aside>

            {notifFlag ? (
                <ExpandNotif clc={clickHandler} flg={notifFlag} />
            ) : null}
        </>
    );
}

export default Sidebar;
