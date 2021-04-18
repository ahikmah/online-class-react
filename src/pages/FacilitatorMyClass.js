import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/Activity.css';
import '../assets/css/MyClass.css';
import FasMyClassItem from '../component/FasMyClassItem';
import Navbar from '../component/Navbar';
import axios from 'axios';

function FacilitatorMyClass() {
    const [myClassList, setMyClassList] = useState();
    let classItems, len;
    useEffect(() => {
        axios
            .get('http://localhost:8000/data/instructor/my-course/1')
            .then((res) => {
                setMyClassList(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // Display top 10 My Class list
    if (myClassList) {
        const myclasssize = 10;
        classItems = myClassList.slice(0, myclasssize).map((cl) => {
            return (
                <FasMyClassItem
                    key={cl.course_id}
                    name={cl.course_name}
                    category={cl.category}
                    desc={cl.description}
                    day={cl.day}
                    start={cl.start_time}
                    end={cl.end_time}
                    students={cl.num_of_student}
                />
            );
        });
        len = myClassList.length;
    }

    const history = useHistory();
    const goBackHandler = () => {
        history.goBack();
    };
    return (
        <>
            <Navbar activeMenu={2} />
            <div className='container-fluid activity'>
                <div className='row'>
                    <Sidebar activeMenu={2} />

                    <main className='col-sm-12 content-activity'>
                        <section className='container my-class'>
                            <section className='label-section'>
                                <i className='fas fa-chevron-left '></i>
                                <span
                                    style={{ marginLeft: '1rem' }}
                                    onClick={goBackHandler}
                                >
                                    My Class
                                </span>
                            </section>

                            <section className='search-group-myclass d-flex justify-content-between align-items-center'>
                                <form
                                    className='search-myclass'
                                    action='# '
                                    style={{ paddingLeft: '0' }}
                                >
                                    <div className='form-group my-class'>
                                        <label
                                            htmlFor='search'
                                            className='srch search-myclass'
                                        >
                                            <i className='fas fa-search '></i>
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control search-myclass'
                                            name='search '
                                            placeholder='Quick Search'
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='btn btn-search-myclass'
                                    >
                                        Search
                                    </button>
                                </form>

                                <form className='sorting-myclass' action=' # '>
                                    <div className='col form-group my-class'>
                                        <label
                                            htmlFor='sorting'
                                            className='sorting'
                                        >
                                            Sort by:
                                        </label>
                                        <select className='selectpicker sel-sorting'>
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

                            <div className='row theader tb-myclass'>
                                <div className='col col-1 th'>
                                    <input type='checkbox' />
                                    <span className='checkmark'></span>
                                </div>
                                <div className='col th'>Class Name</div>
                                <div className='col th tbh'>Category</div>
                                <div className='col th tbh'>Description</div>
                                <div className='col pr th d-flex justify-content-center'>
                                    Progress
                                </div>
                                <div className='col badge-pr th tbh'>
                                    Status
                                </div>
                                <div className='col th  d-flex justify-content-center'>
                                    Score
                                </div>
                                <div className='col col-1 th  tbh'></div>
                            </div>

                            {classItems}
                            <div className='pagination'>
                                <div className='col d-flex justify-content-start align-items-center'>
                                    Showing {len > 10 ? 10 : len} out of {len}
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
                                    <span className='pg'>
                                        <Link to=''>3</Link>
                                    </span>
                                    <span className=' pg '>
                                        <Link to=' '>{'>'}</Link>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export default FacilitatorMyClass;
