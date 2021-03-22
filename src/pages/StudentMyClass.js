import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/Activity.css'
import '../assets/css/MyClass.css'
import MyClassItem from '../component/MyClassItem'
import MyClassList from '../assets/data/studentmyclass'

function StudentMyClass() {
    // Display top 3 My Class list
    const myclasssize = 10
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
    return (
        <>
            <div className="container-fluid activity">
                <div className="row">
                    <Sidebar activeMenu={2}/>

                    <main className="col-sm-12 content-activity">
                        <section className="container my-class">
                            <section className="label-section">
                                <Link to="student-activity">
                                    <i className="fas fa-chevron-left "></i>
                                    <span style={{marginLeft: "1rem"}}>My Class</span>
                                </Link>
                            </section>

                            <section className="search-group-myclass d-flex justify-content-between align-items-center">
                                    <form className="search-myclass" action="# " style={{paddingLeft: "0"}}>
                                        <div className="form-group">
                                            <label for="search" className="srch search-myclass"><i className="fas fa-search "></i></label>
                                            <input type="text" className="form-control search-myclass" name="search " placeholder="Quick Search"/>
                                        </div>
                                    <button type="submit" className="btn btn-search-myclass">Search</button>
                                    </form>


                                    <form className="sorting-myclass" action=" # ">
                                        <div className="col form-group">
                                            <label for="sorting" className="sorting">Sort by:</label>
                                            <select className="selectpicker sel-sorting">
                                                <option>All Categories</option>
                                                <option>Software</option>
                                                <option>History</option>
                                                <option>Psychology</option>
                                                <option>Finance</option>
                                                <option>Math</option>
                                            </select>

                                        </div>
                                    </form>
                            </section>
                    

                        
                        <div className="row theader tb-myclass">
                            <div className="col col-1 th">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </div>
                            <div className="col th">Class Name</div>
                            <div className="col th">Category</div>
                            <div className="col th">Description</div>
                            <div className="col pr th  d-flex justify-content-center">Progress</div>
                            <div className="col badge-pr th">Status</div>
                            <div className="col col th  d-flex justify-content-center">Score</div>
                            <div className="col col-1 th  d-flex justify-content-center"></div>
                        </div>

                        {classItems}
                        <div className="pagination">
                            <div className="col d-flex justify-content-start align-items-center">Showing 10 out of 64</div>
                            <div className="col d-flex justify-content-end align-items-center">
                                <span className="pg"><Link to="">{'<'}</Link></span> 
                                <span className="pg active-pg"><Link to="">1</Link></span>
                                <span className="pg"><Link to="">2</Link></span>
                                <span className="pg"><Link to="">3</Link></span>
                                <span className=" pg "><Link to=" ">{'>'}</Link></span>
                            </div>
                        </div>
                        </section>


                    </main>
                </div>
            </div>
        </>
    )
}

export default StudentMyClass
