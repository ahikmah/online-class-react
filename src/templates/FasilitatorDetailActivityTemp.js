import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import '../assets/css/ClassDetail.css';
import ProgressModal from '../component/ProgressPopup';
import BannerClass from '../assets/images/banner-class.png';
import ThumbnailClass from '../assets/images/thumbnail-class.png';
import Navbar from '../component/Navbar';

function ClassDetail(props) {
    const activeMenu = props.menu;
    const activeClass = 'active';
    const widthProg = props.progress + '%';

    const popClass = ['overlay', 'hidden'];
    if (props.user) {
        popClass.pop();
        document.body.style.overflow = 'hidden';
    }

    return (
        <>
            <Navbar activeMenu={2} />
            <div className='container-fluid activity'>
                <div className='row'>
                    <Sidebar activeMenu={2} />
                    <main className='col-sm-12 content-activity'>
                        <section className='container class-detail'>
                            <section className='label-section'>
                                <Link to='/facilitator/activity'>
                                    <i className='fas fa-chevron-left '></i>
                                    <span style={{ marginLeft: '1rem' }}>
                                        {props.name}
                                    </span>
                                </Link>
                            </section>
                            {/* <!-- Banner Section --> */}
                            <section className='banner-wrapper'>
                                <img
                                    id='bn-background'
                                    src={BannerClass}
                                    alt=''
                                />
                                <img
                                    id='bn-thumbnail'
                                    src={ThumbnailClass}
                                    alt=''
                                />
                                <div id='bn-class-name'>{props.name}</div>
                                <div id='bn-class-info'>
                                    <span>Level: {props.level}</span>
                                    <span>Category: {props.category}</span>
                                    <span>Price: {props.price}</span>
                                </div>

                                <small id='bn-progress'>
                                    {props.progress}% to complete
                                </small>
                                <div
                                    className='progress'
                                    style={{ height: '0.5rem', width: '55%' }}
                                >
                                    <div
                                        className='progress-bar'
                                        role='progressbar'
                                        style={{ width: widthProg }}
                                        aria-valuenow='25'
                                        aria-valuemin='0'
                                        aria-valuemax='100'
                                    ></div>
                                </div>
                            </section>

                            <section className='body-wrapper'>
                                <div id='tab-menu'>
                                    <Link
                                        to='/facilitator/class-detail/information'
                                        className={
                                            activeMenu === 0
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Information
                                    </Link>
                                    <Link
                                        to='/facilitator/class-detail/progress'
                                        className={
                                            activeMenu === 1
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Class Progress
                                    </Link>
                                    <Link
                                        to='/facilitator/class-detail/discussion'
                                        className={
                                            activeMenu === 2
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Class Discusion
                                    </Link>
                                    <Link
                                        to='/facilitator/class-detail/member'
                                        className={
                                            activeMenu === 3
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Member
                                    </Link>
                                </div>
                                <hr />

                                {/* CONTENT BODY HERE */}
                                {props.body}

                                <div className={popClass.join(' ')}>
                                    {<ProgressModal i={Number(props.user)} />}
                                </div>
                            </section>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export default ClassDetail;
