import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import '../assets/css/Activity.css';
import MyClassItem from '../component/MyClassItem';
import NewClassItem from '../component/NewClassItem';
import Navbar from '../component/Navbar';
import axios from 'axios';

function StudentActivity() {
    const [myClassList, setMyClassList] = useState();
    const [newClassList, setNewClassList] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:8000/data/student/myclass/6')
            .then((res) => {
                setMyClassList(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get('http://localhost:8000/data/courses')
            .then((res) => {
                setNewClassList(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    let classItems, newClassItems, newClassFilter;

    if (myClassList && newClassList) {
        const myclasssize = 3;
        classItems = myClassList.slice(0, myclasssize).map((cl, index) => {
            return (
                <MyClassItem
                    key={index}
                    name={cl.course_name}
                    category={cl.category}
                    desc={cl.description}
                    progress={cl.progress_in_percent}
                    status={cl.status}
                    score={cl.score}
                />
            );
        });
        newClassFilter = newClassList.filter((el) => {
            return myClassList.every((f) => {
                return f.course_name !== el.name;
            });
        });

        const newclasssize = 10;
        newClassItems = newClassFilter
            .slice(0, newclasssize)
            .map((nc, index) => {
                return (
                    <NewClassItem
                        key={index}
                        name={nc.name}
                        category={nc.category}
                        desc={nc.description}
                        level={nc.level}
                        pricing={nc.price}
                    />
                );
            });
        console.log('myclass', myClassList);
        console.log('newclass', newClassList);

        console.log('filter', newClassFilter);
    }

    return (
        <>
            <Navbar activeMenu={2} />
            <div className='container-fluid activity'>
                <div className='row'>
                    <Sidebar
                        name={myClassList ? myClassList[0].student_name : null}
                        activeMenu={2}
                    />

                    <main className='col-sm-12 content-activity'>
                        {/* <!-- My Class Section --> */}
                        <section className='container my-class'>
                            <div className='label-section'>Activity</div>
                            <div className='sub-label'>My class</div>
                            <div className='row theader tb-myclass'>
                                <div className='col col-1 th'>
                                    <input type='checkbox' />
                                    <span className='checkmark'></span>
                                </div>
                                <div className='col col-2  th'>Class Name</div>
                                <div className='col  th tbh'>Category</div>
                                <div className='col col-3 th tbh'>
                                    Description
                                </div>
                                <div className='col  pr th d-flex justify-content-center'>
                                    Progress
                                </div>
                                <div className='col badge-pr th tbh'>
                                    Status
                                </div>
                                <div className='col  th d-flex justify-content-center'>
                                    Score
                                </div>
                                <div className='col col-1 th tbh'></div>
                            </div>
                            {classItems}
                            <small className='d-flex justify-content-center'>
                                <Link to='/student-myclass'>
                                    view all{' >'}
                                </Link>
                            </small>
                        </section>
                        {/* <!-- End of My Class --> */}

                        {/* <!-- New Class Section --> */}
                        <section className=' container wrapper new-class '>
                            <div className='container new-class'>
                                <div className='sub-label '>New Class</div>

                                {/* <!-- Search bar --> */}
                                <div className='row'>
                                    <form
                                        action='# '
                                        style={{ padding: '0' }}
                                        className='search-activity'
                                    >
                                        <div className='col form-group btn-group search-bar-activity'>
                                            <label htmlFor='search'>
                                                <i className='fas fa-search '></i>
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control search-activity '
                                                name='search '
                                                placeholder='Quick Search'
                                            />
                                            <button className='btn btn-search-activity'>
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* <!-- Filter Group --> */}
                                <div className='filter-group d-flex'>
                                    <select className='selectpicker sel-filter'>
                                        <option>Categories</option>
                                        <option>Software</option>
                                        <option>History</option>
                                        <option>Psychology</option>
                                        <option>Finance</option>
                                        <option>Math</option>
                                    </select>
                                    <select
                                        className='selectpicker sel-filter'
                                        style={{ width: '3.5rem' }}
                                    >
                                        <option>Level</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advance</option>
                                    </select>
                                    <select
                                        className='selectpicker sel-filter'
                                        style={{ width: '4.2rem' }}
                                    >
                                        <option>Pricing</option>
                                        <option>Free</option>
                                        <option>{'<'} $10</option>
                                        <option> $10 - $20</option>
                                        <option>$20 - $50</option>
                                        <option> {'>'}$50</option>
                                    </select>
                                </div>

                                {/* <!-- New Class List --> */}
                                <div className='row theader2'>
                                    <div className='col nm th'>Class Name</div>
                                    <div
                                        className='col th tbh
                                '
                                    >
                                        Category
                                    </div>
                                    <div
                                        className='col th tbh
                                '
                                    >
                                        Description
                                    </div>
                                    <div className='col th'>Level</div>
                                    <div className='col th'>Pricing</div>
                                    <div className='col th'></div>
                                    <div
                                        className='col col-1 ls th tbh
                                '
                                    ></div>
                                </div>
                                {newClassItems}

                                <div className='pagination'>
                                    <div className='col d-flex justify-content-start align-items-center'>
                                        Showing 10 out of 64
                                    </div>
                                    <div className='col d-flex justify-content-end align-items-center'>
                                        <span className='pg'>
                                            <Link to=''>{'<'}</Link>
                                        </span>
                                        <span className='pg active-pg'>
                                            <Link to=''>1</Link>
                                        </span>
                                        <span className='pg'>
                                            <Link to=''>2</Link>
                                        </span>
                                        <span
                                            className='pg 
                                    '
                                        >
                                            <Link to=''>3</Link>
                                        </span>
                                        <span
                                            className='pg 
                                    '
                                        >
                                            <Link to=''>4</Link>
                                        </span>
                                        <span
                                            className='pg 
                                    '
                                        >
                                            <Link to=''>5</Link>
                                        </span>
                                        <span style={{ paddingTop: '0.3rem' }}>
                                            <Link to=' '>...</Link>
                                        </span>
                                        <span className=' pg '>
                                            <Link to=' '>{'>'}</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export default StudentActivity;
