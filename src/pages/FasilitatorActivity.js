import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/Activity.css'
import '../assets/css/FasilitatorActivity.css'
import FasMyClassItem from '../component/FasMyClassItem'
import MyClassList from '../assets/data/fasmyclass'
// import NewClassList from '../assets/data/newclass'

function FasilitatorActivity() {
    // Display top 3 My Class list
    const myclasssize = 3
    const classItems = MyClassList.slice(0, myclasssize).map((cl)=>{
        return <FasMyClassItem
            key={cl.id}
            name={cl.name}
            category={cl.category}
            desc={cl.description}
            schedule={cl.schedule}
            students={cl.students}/>
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
                                <div className="col th">Category</div>
                                <div className="col th">Description</div>
                                <div className="col th d-flex justify-content-center">Schedule</div>
                                <div className="col th d-flex justify-content-center">Students</div>
                                <div className="col col-1 th d-flex justify-content-center"></div>
                            </div>
                            {classItems}
                            <small className="d-flex justify-content-center"><Link to="/student-myclass">view all{' >'}</Link></small>
                        </section>
                        {/* <!-- End of My Class --> */}

<<<<<<< HEAD
                        {/* <!-- Create New Class Section --> */}
=======
                        {/* <!-- New Class Section --> */}
>>>>>>> 18c1effd60e1a767d08d571288eea855ca790e19
                        <section className=" container wrapper new-class ">
                        <div className="sub-label ">Create New Class</div>
                        <div className="container new-class">
                            <form className="create-new-class">
                                <div className="row d-flex">
                                    <div className="col-5 d-flex form-group cnc">
                                        <label htmlFor="className" className="col-3">Class Name</label>
                                        <p className="col col-1">:</p>
                                        <input type="text" className="col class-name-input"/>
                                    </div>


                                    <div className="col d-flex justify-content-start  form-group cnc pick-pricing">
                                        <label htmlFor="pricing" className="col col-2">Pricing</label>
                                        <p className="col col-1">:</p>
                                        <input type="radio" className="form-check-input" id="free" name="pricing" value="free"/>
                                            <label htmlFor="free" className="pricing-radio">Free</label>
                                        <input type="radio" className="form-check-input" id="paid" name="pricing" value="paid"/>
                                            <label htmlFor="paid" className="pricing-radio">Paid</label>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="row d-flex">

                                    <div className="col-5 d-flex form-group cnc">
                                        <label htmlFor="className" className="col col-3">Categories</label>
                                        <p className="col col-1">:</p>
                                        <select className="selectpicker cnc">
                                                <option>Software</option>
                                                <option>History</option>
                                                <option>Psychology</option>
                                                <option>Finance</option>
                                                <option>Math</option>
                                        </select>
                                        
                                    </div>


                                    <div className="col d-flex justify-content-start  form-group cnc">
                                        <label htmlFor="className" className="col col-2">Schedule</label>
                                        <p className="col col-1">:</p>
                                        <select className="selectpicker cnc input-time">
                                                <option>Sunday</option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                        </select>
                                        <input type="time" className="input-time"/>-
                                        <input type="time" className="input-time"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <label htmlFor="descriptio">Description</label>
                                    <textarea class="form-control cnc" rows="12"></textarea>
                                    
                                </div>

                                <div className="d-flex justify-content-end">
                                <Link to="#"><div className="btn btn-create">Create</div></Link>
                                </div>
                            </form>
                        </div>
                        </section>
                    </main>

                </div>
            </div>
        </>
    )
}

export default FasilitatorActivity
