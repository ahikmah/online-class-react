import { Link, useHistory } from 'react-router-dom';
import '../assets/css/Navbar.css';

// Import icon nav
import dashboardIcon from '../assets/images/icon-dashboard.png';
import activityIcon from '../assets/images/icon-activity.png';
import settingIcon from '../assets/images/icon-setting.png';
import helpIcon from '../assets/images/icon-help.png';
import logoutIcon from '../assets/images/icon-logout.png';

import dashboardIconActive from '../assets/images/icon-dashboard-active.png';
import activityIconActive from '../assets/images/icon-activity-active.png';
import ExpandNotif from '../component/ExpandNotif';

import React, { useState, useEffect } from 'react';

function Navbar(props) {
    const [notifFlag, setNotifFlag] = useState(false);

    const clickHandler = () => {
        setNotifFlag(!notifFlag);
    };
    useEffect(() => {
        if (notifFlag) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [notifFlag]);

    const history = useHistory();
    const roleFlag = history.location.pathname.includes('student');
    return (
        <>
            <nav className='nav'>
                <Link
                    to={
                        roleFlag
                            ? '/student/dashboard/all-schedule'
                            : '/facilitator/dashboard/'
                    }
                >
                    <img
                        src={
                            props.activeMenu === 1
                                ? dashboardIconActive
                                : dashboardIcon
                        }
                        alt=''
                    />
                </Link>
                <Link
                    to={
                        roleFlag ? '/student/activity' : '/facilitator/activity'
                    }
                >
                    <img
                        src={
                            props.activeMenu === 2
                                ? activityIconActive
                                : activityIcon
                        }
                        alt=''
                    />
                </Link>
                <Link
                    to={roleFlag ? '/student/profile' : '/facilitator/profile'}
                >
                    <img src={settingIcon} alt='' />
                </Link>
                <Link to='#'>
                    <img src={helpIcon} alt='' />
                </Link>
                <div className='side-notif-section nav'>
                    <Link to='#' onClick={clickHandler}>
                        <i
                            className='fas fa-bell'
                            style={{ color: 'white' }}
                        ></i>
                    </Link>
                    <span style={{ border: '#5784BA solid 0.14rem' }}></span>
                </div>
                <Link to='/'>
                    <img src={logoutIcon} alt='' />
                </Link>
            </nav>
            {notifFlag ? (
                <ExpandNotif clc={clickHandler} flg={notifFlag} />
            ) : null}
        </>
    );
}

export default Navbar;
