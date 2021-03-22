import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/ClassDetail.css'
import BannerClass from '../assets/images/banner-class.png'
import ThumbnailClass from '../assets/images/thumbnail-class.png'

function ClassDetail(props) {
    const activeMenu = props.menu
    const activeClass = 'active'
    const widthProg = props.progress+"%"

    return (
        <>
            <div className="container-fluid activity">
                <div className="row">
                    <Sidebar activeMenu={2}/>
                    <main className="col-sm-12 content-activity">
                        <section className="container class-detail">
                            <section className="label-section">
                                <Link to="student-activity">
                                    <i className="fas fa-chevron-left "></i>
                                    <span style={{marginLeft: "1rem"}}>{props.name}</span>
                                </Link>
                            </section>
                            {/* <!-- Banner Section --> */}
                            <section className="banner-wrapper">
                                <img id="bn-background" src={BannerClass} alt=""/>
                                <img id="bn-thumbnail" src={ThumbnailClass} alt=""/>
                                <div id="bn-class-name">{props.name}</div>
                                <div id="bn-class-info">
                                    <span>Level: {props.level}</span>
                                    <span>Category: {props.category}</span>
                                    <span>Price: {props.price}</span>
                                </div>
                                {activeMenu === 0 ? <button className="btn btn-register">Register</button>:null}

                                {activeMenu === 1? <div id="bn-score">
                                    <div id="score-label">Your score</div>
                                    <div id="score" style={{color: "#51E72B"}}>{props.score}</div>
                                </div> : null}

                                {activeMenu === 1 ? <small id="bn-progress">{props.progress}% to complete</small> : null}
                                {activeMenu === 1 ? <div class="progress" style={{height: "0.5rem", width: "55%"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: widthProg }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> : null}
                            </section>


                            <section className="body-wrapper">
                                <div id="tab-menu">
                                    <a href="/student-class-detail/information" className={activeMenu===0?activeClass:null}>Information</a>
                                    <a href="/student-class-detail/progress" className={activeMenu===1?activeClass:null}>Class Progress</a>
                                    <a href="/student-class-detail/discussion" className={activeMenu===2?activeClass:null}>Class Discusion</a>
                                </div>
                                <hr/>
                                
                                {/* CONTENT BODY HERE */}
                                {props.body}

                            </section>                            
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ClassDetail
