import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/ClassDetail.css'
import '../assets/css/ModalMember.css'
import BannerClass from '../assets/images/banner-class.png'
import ThumbnailClass from '../assets/images/thumbnail-class.png'

import avaAr from '../assets/images/ava-chat1.png'

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
                                {/* {activeMenu === 0 ? <button className="btn btn-register">Register</button>:null} */}

                                {/* {activeMenu === 1? <div id="bn-score">
                                    <div id="score-label">Your score</div>
                                    <div id="score" style={{color: "#51E72B"}}>{props.score}</div>
                                </div> : null} */}

                                <small id="bn-progress">{props.progress}% to complete</small>
                                <div class="progress" style={{height: "0.5rem", width: "55%"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: widthProg }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </section>


                            <section className="body-wrapper">
                                <div id="tab-menu">
                                    <Link to="/fas-class-detail/information" className={activeMenu===0?activeClass:null}>Information</Link>
                                    <Link to="/fas-class-detail/progress" className={activeMenu===1?activeClass:null}>Class Progress</Link>
                                    <Link to="/fas-class-detail/discussion" className={activeMenu===2?activeClass:null}>Class Discusion</Link>
                                    <Link to="/fas-class-detail/member" className={activeMenu===3?activeClass:null}>Member</Link>
                                </div>
                                <hr/>
                                
                                {/* CONTENT BODY HERE */}
                                {props.body}
                                <div class="modal">
                                    {/* <button class="show-modal">&times;</button> */}
                                    <h1 className="tesmodal">HALO WODL</h1>
                                    <img src={avaAr} alt="avatar member" className="ava-member"/>
                                </div>
                                {/* <div class="overlay"></div> */}

                            </section>                            
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ClassDetail
