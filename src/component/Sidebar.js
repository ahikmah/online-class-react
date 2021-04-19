import React, { useState, useEffect } from 'react';
import '../assets/css/Sidebar.css';
import { Link, useHistory } from 'react-router-dom';

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

import { connect } from 'react-redux';
import { logoutUser } from '../redux/ActionCreators/auth';

function Sidebar(props) {
    const [notifFlag, setNotifFlag] = useState(false);
    useEffect(() => {
        if (notifFlag) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [notifFlag]);

    const history = useHistory();
    // const roleFlag = history.location.pathname.includes('student');
    const classNavItem = ['side-nav-item nav-link'];
    const classNavItemActive = ['side-nav-item nav-link', 'active-sidebar'];
    const customProfile = {
        background: 'linear-gradient(180deg, white 60%, #5784BA 60%)',
    };
    const customSpan =
        props.activeMenu === 0
            ? { border: 'white solid 0.14rem' }
            : { border: '#5784BA solid 0.14rem' };

    const clickHandler = () => {
        setNotifFlag(!notifFlag);
    };

    const { userLogout } = props;

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('full_name');
        localStorage.removeItem('avatar');
        userLogout();
        history.push('/');
    };

    return (
        <>
            <aside
                className='sidebar col-2'
                style={props.activeMenu === 0 ? customProfile : null}
            >
                {/* <!-- Notification --> */}
                <div className='side-notif-section'>
                    <Link to='#' onClick={clickHandler}>
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
                        <img
                            src={
                                localStorage.avatar
                                    ? 'http://localhost:8000' +
                                      localStorage.avatar
                                    : Avatar
                            }
                            alt='avatar'
                        />
                    </div>
                    <Link
                        to='/profile'
                        className={
                            props.activeMenu === 0
                                ? 'side-name active-sidebar'
                                : 'side-name'
                        }
                    >
                        {/* {getDataUserReducer.currentUser.full_name} */}
                        {localStorage.full_name}
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
                        to='/dashboard'
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
                        to='/activity'
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
                        onClick={logoutHandler}
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

const mapStateToProps = (state) => {
    const { getDataUserReducer } = state;
    return {
        getDataUserReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(logoutUser()),
    };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
