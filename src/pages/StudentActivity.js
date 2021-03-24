import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/Activity.css'
import MyClassItem from '../component/MyClassItem'
import NewClassItem from '../component/NewClassItem'
import MyClassList from '../assets/data/studentmyclass'
import NewClassList from '../assets/data/newclass'

function StudentActivity() {
    // Display top 3 My Class list
    const myclasssize = 3
    const classItems = MyClassList.slice(0, myclasssize).map((cl)=>{
        return <MyClassItem
            key={cl.id}
            name={cl.name}
            category={cl.category}
            desc={cl.description}
            progress={cl.progress}
            status={cl.status}
            score={cl.score}/>
    })

    const newclasssize = 10
    const newClassItems = NewClassList.slice(0, newclasssize).map((nc)=>{
        return <NewClassItem
        key = {nc.id}
        name = {nc.name}
        category = {nc.category}
        desc = {nc.description}
        level = {nc.level}
        pricing = {nc.pricing}
        />
    })


    return (
        <>
            <div className="container-fluid activity">
                <div className="row">
                    <Sidebar activeMenu={2}/>

                    <main className="col-sm-12 content-activity">
                        {/* <!-- My Class Section --> */}
                        <section className="container my-class">
                            <div className="label-section">
                                Activity
                            </div>
                            <div className="sub-label">My class</div>
                            <div className="row theader tb-myclass">
                                <div className="col col-1 th">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </div>
                                <div className="col th">Class Name</div>
                                <div className="col th tbh">Category</div>
                                <div className="col th tbh">Description</div>
                                <div className="col  pr th d-flex justify-content-center">Progress</div>
                                <div className="col badge-pr th tbh">Status</div>
                                <div className="col th d-flex justify-content-center">Score</div>
                                <div className="col col-1 th tbh"></div>
                            </div>
                            {classItems}
                            <small className="d-flex justify-content-center"><Link to="/student-myclass">view all{' >'}</Link></small>
                        </section>
                        {/* <!-- End of My Class --> */}

                        {/* <!-- New Class Section --> */}
                        <section className=" container wrapper new-class ">
                        <div className="container new-class">
                            <div className="sub-label ">New Class</div>

                            {/* <!-- Search bar --> */}
                            <div className="row">
                                <form action="# " style={{padding: "0"}} className="search-activity">
                                    <div className="col form-group btn-group search-bar-activity">
                                        <label htmlFor="search"><i className="fas fa-search "></i></label>
                                        <input type="text" className="form-control search-activity " name="search " placeholder="Quick Search"/>
                                        <button className="btn btn-search-activity">Search</button>
                                    </div>
                                </form>
                            </div>

                            {/* <!-- Filter Group --> */}
                            <div className="filter-group d-flex">
                                <select className="selectpicker sel-filter">
                                    <option>Categories</option>
                                    <option>Software</option>
                                    <option>History</option>
                                    <option>Psychology</option>
                                    <option>Finance</option>
                                    <option>Math</option>
                                </select>
                                <select className="selectpicker sel-filter" style={{width: "3.5rem"}}>
                                    <option>Level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advance</option>
                                </select>
                                <select className="selectpicker sel-filter" style={{width: "4.2rem"}}>
                                    <option>Pricing</option>
                                    <option>Free</option>
                                    <option>{'<'} $10</option> 
                                    <option> $10 - $20</option>
                                    <option>$20 - $50</option>
                                    <option> {'>'}$50</option>
                                </select>
                            </div>

                            {/* <!-- New Class List --> */}
                            <div className="row theader2">
                                <div className="col nm th">Class Name</div>
                                <div className="col th tbh
                                ">Category</div>
                                <div className="col th tbh
                                ">Description</div>
                                <div className="col th">Level</div>
                                <div className="col th">Pricing</div>
                                <div className="col th"></div>
                                <div className="col col-1 ls th tbh
                                "></div>
                            </div>
                            {newClassItems}

                            <div className="pagination">
                                <div className="col d-flex justify-content-start align-items-center">Showing 10 out of 64</div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <span className="pg"><Link to="">{'<'}</Link></span> 
                                    <span className="pg active-pg"><Link to="">1</Link></span>
                                    <span className="pg"><Link to="">2</Link></span>
                                    <span className="pg 
                                    "><Link to="">3</Link></span>
                                    <span className="pg 
                                    "><Link to="">4</Link></span>
                                    <span className="pg 
                                    "><Link to="">5</Link></span>
                                    <span style={{paddingTop: "0.3rem"}}><Link to=" ">...</Link></span>
                                    <span className=" pg "><Link to=" ">{'>'}</Link></span>
                                </div>
                            </div>
                        </div>

                    </section>
                        
                    </main>

                </div>
            </div>
        </>
    )
}

export default StudentActivity
