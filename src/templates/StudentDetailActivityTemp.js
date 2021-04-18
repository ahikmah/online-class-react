import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import '../assets/css/ClassDetail.css';
import BannerClass from '../assets/images/banner-class.png';
import ThumbnailClass from '../assets/images/thumbnail-class.png';
import Navbar from '../component/Navbar';
// import { connect } from 'react-redux';
// import { getCourseData } from '../redux/ActionCreators/course';

function ClassDetail(props) {
    const activeMenu = props.menu;
    const activeClass = 'active';
    const widthProg = props.progress + '%';

    return (
        <>
            <Navbar activeMenu={2} />
            <div className='container-fluid activity'>
                <div className='row'>
                    <Sidebar activeMenu={2} />
                    <main className='col-sm-12 content-activity'>
                        <section className='container class-detail'>
                            <section className='label-section'>
                                <Link to='/student/activity'>
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

                                {props.score ? (
                                    <div id='bn-score'>
                                        <div id='score-label'>Your score</div>
                                        <div
                                            id='score'
                                            style={{ color: '#51E72B' }}
                                        >
                                            {props.score}
                                        </div>
                                    </div>
                                ) : (
                                    <button className='btn btn-register'>
                                        Register
                                    </button>
                                )}

                                {activeMenu === 1 ? (
                                    <small id='bn-progress'>
                                        {props.progress}% to complete
                                    </small>
                                ) : null}
                                {activeMenu === 1 ? (
                                    <div
                                        className='progress'
                                        style={{
                                            height: '0.5rem',
                                            width: '55%',
                                        }}
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
                                ) : null}
                            </section>

                            <section className='body-wrapper'>
                                <div id='tab-menu'>
                                    <Link
                                        to={
                                            '/student/class-detail/information/' +
                                            props.idCourse
                                        }
                                        className={
                                            activeMenu === 0
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Information
                                    </Link>
                                    <Link
                                        to={
                                            '/student/class-detail/progress/' +
                                            props.idCourse
                                        }
                                        className={
                                            activeMenu === 1
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Class Progress
                                    </Link>
                                    <Link
                                        to={
                                            '/student/class-detail/discussion/' +
                                            props.idCourse
                                        }
                                        className={
                                            activeMenu === 2
                                                ? activeClass
                                                : null
                                        }
                                    >
                                        Class Discusion
                                    </Link>
                                </div>
                                <hr />

                                {/* CONTENT BODY HERE */}
                                {props.body}
                            </section>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

// const mapStatetoProps = (state) => {
//     const { dataCourseReducer } = state;
//     return {
//         dataCourseReducer,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getCourse: (url) => dispatch(getCourseData(url)),
//     };
// };

// const ConnectedClassDetail = connect(
//     mapStatetoProps,
//     mapDispatchToProps
// )(ClassDetail);
// export default ConnectedClassDetail;
export default ClassDetail;
