import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar'
import { Link } from 'react-router-dom'
import '../assets/css/Activity.css'
import iconList from '../assets/images/icon-list.png'
function StudentActivity() {
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
                                <div className="col pr th">Progress</div>
                                <div className="col badge-pr th">Status</div>
                                <div className="col col th">Score</div>
                                <div className="col col-1 th"></div>
                            </div>

                            <div className="row tdata tb-myclass">
                                <div className="col col-1"><input type="checkbox"/><span className="checkmark"></span></div>
                                <div className="col">
                                    <Link to="class-progress.html"> Front-end fundamentals</Link></div>
                                <div className="col">
                                    <Link to=""> Software</Link></div>
                                <div className="col ds">Learn the fundamentals of front end...</div>
                                <div className="col pr">
                                    <div className="c100 p80 small">
                                        <span>80%</span>
                                        <div className="slice">
                                            <div className="bar"></div>
                                            <div className="fill"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col badge-pr"><span>Ongoing</span></div>
                                <div className="col"><span className="scr" style={{color: "#51E72B"}}>86</span></div>
                                <div className="col col-1">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata tb-myclass">
                                <div className="col col-1"><input type="checkbox"/><span className="checkmark"></span></div>
                                <div className="col">
                                    <Link to="">HTML for Beginners</Link></div>
                                <div className="col">
                                    <Link to="">Software</Link></div>
                                <div className="col ds">HTML from scratch</div>
                                <div className="col pr">
                                    <div className="c100 p25 small">
                                        <span>25%</span>
                                        <div className="slice">
                                            <div className="bar"></div>
                                            <div className="fill"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col badge-pr"><span>Ongoing</span></div>
                                <div className="col"><span className="scr" style={{color: "#51E72B"}}>71</span></div>
                                <div className="col col-1">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata tb-myclass">
                                <div className="col col-1"><input type="checkbox"/><span className="checkmark"></span></div>
                                <div className="col">
                                    <Link to="">History of Europe</Link></div>
                                <div className="col">
                                    <Link to="">History</Link></div>
                                <div className="col ds">The history of Europe concerns itself...</div>
                                <div className="col pr">
                                    <div className="c100 p69 small">
                                        <span>69%</span>
                                        <div className="slice">
                                            <div className="bar"></div>
                                            <div className="fill"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col badge-pr"><span>Ongoing</span></div>
                                <div className="col"><span className="scr" style={{color: "#CCE72B"}}>62</span></div>
                                <div className="col col-1">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>

                            <small className="d-flex justify-content-center"><Link to="my-className.html">view all ></Link></small>
                        </section>
                        {/* <!-- End of My Class --> */}

                        {/* <!-- New Class Section --> */}
                        <div className=" container wrapper new-class ">
                        <div className="container new-class">
                            <div className="sub-label ">New Class</div>

                            {/* <!-- Search bar --> */}
                            <div className="row">
                                <form action="# " style={{padding: "0"}} className="search-activity">
                                    <div className="col form-group btn-group search-bar-activity">
                                        <label for="search"><i className="fas fa-search "></i></label>
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
                                    <option> $10</option> 
                                    <option> $10 - $20</option>
                                    <option>$20 - $50</option>
                                    <option> $50</option>
                                </select>
                            </div>

                            {/* <!-- New Class List --> */}
                            <div className="row theader2">
                                <div className="col nm th">Class Name</div>
                                <div className="col th 
                                ">Category</div>
                                <div className="col th 
                                ">Description</div>
                                <div className="col th">Level</div>
                                <div className="col th">Pricing</div>
                                <div className="col th"></div>
                                <div className="col col-1 ls th 
                                "></div>
                            </div>

                            <div className="row tdata2">
                                <div className="col nm "><Link to="className-detail.html"> Know more Java script</Link></div>
                                <div className="col 
                                "><Link to=""> Software </Link></div>
                                <div className="col 
                                ">Javascript from the basic for...</div>
                                <div className="col">Beginner</div>
                                <div className="col">Free</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">HTML and CSS to code</Link></div>
                                <div className="col 
                                "><Link to=""> Software </Link></div>
                                <div className="col 
                                ">Start combining HTML and CSS to...</div>
                                <div className="col">Intermediate</div>
                                <div className="col">$10</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Indonesian war history</Link></div>
                                <div className="col 
                                "><Link to="">History</Link></div>
                                <div className="col 
                                ">From the first colonialization until...</div>
                                <div className="col">Advance</div>
                                <div className="col">$50</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Buddhism and Modern Psychology</Link></div>
                                <div className="col 
                                "><Link to="">Psychology</Link></div>
                                <div className="col 
                                ">Buddhism and science are deeply...</div>
                                <div className="col">Beginner</div>
                                <div className="col">Free</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Financial markets</Link></div>
                                <div className="col 
                                "><Link to="">Finance</Link></div>
                                <div className="col 
                                ">An overview of the ideas, methods...</div>
                                <div className="col">Intermediate</div>
                                <div className="col">$10</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Corporate finance</Link></div>
                                <div className="col 
                                "><Link to="">Finance</Link></div>
                                <div className="col 
                                ">Introduction to the fundamentals...</div>
                                <div className="col ">Advance</div>
                                <div className="col">$50</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Algorithm specialization</Link></div>
                                <div className="col 
                                "><Link to="">Math</Link></div>
                                <div className="col 
                                ">Learn to think like Link computer...</div>
                                <div className="col">Advance</div>
                                <div className="col">$50</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to=""> Business and Financial Modeling</Link></div>
                                <div className="col 
                                "><Link to=""> Software </Link></div>
                                <div className="col 
                                ">Designed to help you make...</div>
                                <div className="col">Beginner</div>
                                <div className="col">Free</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Marketing in Link Digital World</Link></div>
                                <div className="col 
                                "><Link to=""> Software </Link></div>
                                <div className="col 
                                ">This className examines how digital...</div>
                                <div className="col">Intermediate</div>
                                <div className="col">$10</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>
                            <div className="row tdata2">
                                <div className="col nm"><Link to="">Social Psychology</Link></div>
                                <div className="col 
                                "><Link to="">Psychology</Link></div>
                                <div className="col 
                                ">This className offers some answers...</div>
                                <div className="col">Advance</div>
                                <div className="col">$50</div>
                                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                                <div className="col col-1 ls 
                                ">
                                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                                </div>
                            </div>

                            <div className="pagination">
                                <div className="col d-flex justify-content-start align-items-center">Showing 10 out of 64</div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <span className="pg"><Link to="">0</Link></span> 
                                    <span className="pg active-pg"><Link to="">1</Link></span>
                                    <span className="pg"><Link to="">2</Link></span>
                                    <span className="pg 
                                    "><Link to="">3</Link></span>
                                    <span className="pg 
                                    "><Link to="">4</Link></span>
                                    <span className="pg 
                                    "><Link to="">5</Link></span>
                                    <span style={{paddingTop: "0.3rem"}}><Link to=" ">...</Link></span>
                                    <span className=" pg "><Link to=" ">100</Link></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    </main>

                </div>
            </div>
        </>
    )
}

export default StudentActivity
