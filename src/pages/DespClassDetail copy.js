import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/ClassDetail.css'
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
                                <button className="btn btn-register">Register</button>
                            </section>


                            <section className="body-wrapper">
                                <div id="tab-menu">
                                    <a href="class-detail.html" class="active">Information</a>
                                    <a href="class-progress.html">Class Progress</a>
                                    <a href="">Class Discusion</a>
                                </div>
                                <hr/>
                                <div class="desc-title">Description</div>
                                <div class="desc-body">Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with
                                    dynamic styling; with animation, etc. This class helps you get started with JavaScript and furthers your understanding of what is possible.</div>
                                <div class="desc-title ">What will I learn?</div>
                                <div class="desc-body">
                                    <li>Build 5 beautiful real-world projects for your portfolio! In these projects, you will learn how to plan and architect your applications using flowcharts and common JavaScript patterns </li>
                                    <li>Master the JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, and more </li>
                                    <li>Learn modern JavaScript (ES6+) from the beginning: arrow functions, destructuring, spread operator, default arguments, optional chaining (ES2020), and more </li>
                                    <li>How JavaScript works behind the scenes: engines, the call stack, hoisting, scoping, the 'this' keyword, reference values, and more.</li>
                                    <li>Deep dive into functions: arrow functions, first-class and higher-order functions, bind, and closures.</li>
                                    <li>Deep dive into object-oriented programming: prototypal inheritance, constructor functions (ES5), classes (ES6), encapsulation, abstraction, inheritance, and polymorphism.
                                    </li>
                                </div>
                                <div class="desc-title ">Requirements</div>
                                <div class="desc-body">
                                    <li>No coding experience is necessary to take this course! I take you from beginner to expert!
                                    </li>
                                    <li>Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.</li>
                                    <li>A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course. </li>
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
