import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/ClassProgress.css'
import BannerClass from '../assets/images/banner-class.png'
import ThumbnailClass from '../assets/images/thumbnail-class.png'

function ClassDetail() {
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
                                    <span style={{marginLeft: "1rem"}}>Know More Javascript</span>
                                </Link>
                            </section>
                            {/* <!-- Banner Section --> */}
                            <section className="banner-wrapper">
                                <img id="bn-background" src={BannerClass} alt=""/>
                                <img id="bn-thumbnail" src={ThumbnailClass} alt=""/>
                                <div id="bn-class-name">Know More Javascript</div>
                                <div id="bn-class-info">
                                    <span>Level: Beginner</span>
                                    <span>Category: Software</span>
                                    <span>Price: Free</span>
                                </div>
                                <div id="bn-score">
                                    <div id="score-label">Your score</div>
                                    <div id="score" style={{color: "#51E72B"}}>86</div>
                                </div>
                                <small id="bn-progress">80% to complete</small>
                                <div class="progress" style={{height: "0.5rem", width: "55%"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                            </section>


                            <section className="body-wrapper">
                                <div id="tab-menu">
                                    <a href="class-detail.html" class="active">Information</a>
                                    <a href="class-progress.html">Class Progress</a>
                                    <a href="">Class Discusion</a>
                                </div>
                                <hr/>
                                <div class="row tdata tb-myclass">
                                    <div class="col-1"><input type="checkbox" checked="true" disabled="disabled"/><span class="checkmark"></span></div>
                                    <div class="col">
                                        <a href=" "> HTML Essential Training</a></div>
                                    <div class="col completed">
                                        You have completed this topic
                                    </div>
                                    <div class="col-2 text-center"><span class="scr " style={{color: "#2BE7D0"}}>100</span></div>
                                </div>
                                <div class="row tdata tb-myclass">
                                    <div class="col-1"><input type="checkbox" checked="true"  disabled="disabled"/><span class="checkmark"></span></div>
                                    <div class="col">
                                        <a href=" ">CSS Essential Training</a></div>
                                    <div class="col completed">
                                        You have completed this topic
                                    </div>
                                    <div class="col-2 text-center"><span class="scr" style={{color: "#E7852B"}}>42</span></div>
                                </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" checked="true"  disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" ">Javascript Essential Training</a></div>
                            <div class="col completed">
                                You have completed this topic
                            </div>
                            <div class="col-2 text-center"><span class="scr " style={{color: "#E6422B"}}>21</span></div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" checked="true"  disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" ">Responsive Layout</a></div>
                            <div class="col completed">
                                You have completed this topic
                            </div>
                            <div class="col-2 text-center"><span class="scr " style={{color: "#2BE6AE"}}>98</span></div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" checked="true" disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" ">Mid-term Exam</a></div>
                            <div class="col completed">
                                You have completed this topic
                            </div>
                            <div class="col-2 text-center"><span class="scr " style={{color: "#51E72B"}}>86</span></div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" checked="true" disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" ">Bootstrap4 Essential Training</a></div>
                            <div class="col completed">
                                You have completed this topic
                            </div>
                            <div class="col-2 text-center"><span class="scr " style={{color: "#7EE72B"}}>72</span></div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" "> HTML Essential Training</a></div>
                            <div class="col">
                                Friday, 6 November 2020 <br/> 08.00 - 09.40
                            </div>
                            <div class="col-2 badge-unfinished text-center">
                                {/* <!-- <span>Unfinished</span> --> */}
                            </div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" "> HTML Essential Training</a></div>
                            <div class="col">
                                Friday, 6 November 2020 <br/> 08.00 - 09.40
                            </div>
                            <div class="col-2 badge-unfinished text-center">
                                <span>Unfinished</span>
                            </div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" "> HTML Essential Training</a></div>
                            <div class="col">
                                Friday, 6 November 2020 <br/> 08.00 - 09.40
                            </div>
                            <div class="col-2 badge-unfinished text-center">
                                <span>Unfinished</span>
                            </div>
                        </div>
                        <div class="row tdata tb-myclass">
                            <div class="col-1"><input type="checkbox" disabled="disabled"/><span class="checkmark"></span></div>
                            <div class="col">
                                <a href=" "> HTML Essential Training</a></div>
                            <div class="col">
                                Friday, 6 November 2020 <br/> 08.00 - 09.40
                            </div>
                            <div class="col-2 badge-unfinished text-center">
                                <span>Unfinished</span>
                            </div>
                        </div>
 
                            </section>                            
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ClassDetail
