import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/Activity.css';
import MyClassItem from './MyClassItem';
import NewClassItem from './NewClassItem';
import Navbar from './Navbar';
import axios from 'axios';

import { connect } from 'react-redux';
import { getMyClass } from '../redux/ActionCreators/user';
import { getCourseData } from '../redux/ActionCreators/course';

function StudentActivity(props) {
    const [myClassList, setMyClassList] = useState();
    const [newClassList, setNewClassList] = useState();
    const [info, setInfo] = useState();
    const [searchCourse, setSearchCourse] = useState();
    const [filterCategory, setFilterCategory] = useState();
    const [filterLevel, setFilterLevel] = useState();
    const [filterPrice, setFilterPrice] = useState();
    const [sorting, setSorting] = useState();

    const history = useHistory();

    let classItems, newClassItems;
    const {
        dataUserReducer,
        dataCourseReducer,
        getMyClass,
        getAllClass,
    } = props;
    let numPage = [];
    const ref = useRef();

    const currentUrl = props.location.pathname;

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMyClass();
            getAllClass('http://localhost:8000/data/courses');

            ref.current = true;
        } else {
            if (dataUserReducer.isPending && dataCourseReducer.isPending) {
                console.log('Loading...');
            } else if (
                dataUserReducer.isFulfilled &&
                dataCourseReducer.isFulfilled
            ) {
                setMyClassList(dataUserReducer.myClass);

                setNewClassList(dataCourseReducer.result);
                setInfo(dataCourseReducer.info);
                // console.log('info', dataCourseReducer.info);
            } else if (
                dataUserReducer.isRejected &&
                dataCourseReducer.isRejected
            ) {
                console.log('Failed');
            }
        }
    });

    console.log(props);

    if (myClassList) {
        const myclasssize = 3;
        classItems = myClassList.slice(0, myclasssize).map((cl) => {
            return (
                <MyClassItem
                    key={cl.id}
                    idCourse={cl.id}
                    name={cl.course_name}
                    category={cl.category}
                    desc={cl.description}
                    progress={cl.progress_in_percent}
                    status={cl.status}
                    score={cl.score}
                />
            );
        });
    }

    if (newClassList) {
        // newClassFilter = newClassList.filter((el) => {
        //     return myClassList.every((f) => {
        //         return f.course_name !== el.name;
        //     });
        // });

        // const newclasssize = 5;
        newClassItems = newClassList.map((nc) => {
            return (
                <NewClassItem
                    key={nc.id}
                    idCourse={nc.id}
                    name={nc.name}
                    category={nc.category}
                    desc={nc.description}
                    level={nc.level}
                    pricing={nc.price}
                />
            );
        });
    }

    const pageHandler = (url) => {
        getAllClass(url);
    };

    if (info) {
        for (let i = 0; i < info.totalPage; i++) {
            numPage.push(
                <span
                    style={{
                        color: info.page === i + 1 ? 'white' : 'black',
                    }}
                    key={i}
                    className={info.page === i + 1 ? 'pg active-pg' : 'pg'}
                    onClick={() =>
                        pageHandler(
                            i === 0
                                ? 'http://localhost:8000/data/courses'
                                : 'http://localhost:8000/data/courses?pages=' +
                                      (Number(i) + 1)
                        )
                    }
                >
                    {i + 1}
                </span>
            );
        }
    }

    const searchValue = (e) => {
        setSearchCourse(e.target.value);
        history.replace(currentUrl + `?q=${e.target.value}`);
    };

    const filterHandler = (e) => {
        e.preventDefault();
        if (searchCourse && !filterCategory && !filterLevel && !filterPrice) {
            getAllClass(
                'http://localhost:8000/data/courses/?q=' + searchCourse
            );
        } else if (
            !searchCourse &&
            filterCategory &&
            !filterLevel &&
            !filterPrice &&
            !sorting
        ) {
            getAllClass(
                'http://localhost:8000/data/courses/?category=' + filterCategory
            );
            history.replace(currentUrl + `?category=${filterCategory}`);
        } else if (
            !searchCourse &&
            !filterCategory &&
            filterLevel &&
            !filterPrice &&
            !sorting
        ) {
            getAllClass(
                'http://localhost:8000/data/courses/?level=' + filterLevel
            );
            history.replace(currentUrl + `?level=${filterLevel}`);
        } else if (
            !searchCourse &&
            !filterCategory &&
            !filterLevel &&
            filterPrice &&
            !sorting
        ) {
            getAllClass(
                'http://localhost:8000/data/courses/?price=' + filterPrice
            );
            history.replace(currentUrl + `?price=${filterPrice}`);
        } else if (
            !searchCourse &&
            !filterCategory &&
            !filterLevel &&
            !filterPrice &&
            sorting
        ) {
            getAllClass('http://localhost:8000/data/courses/?sort=' + sorting);
            history.replace(currentUrl + `?sort=${sorting}`);
        } else if (
            !searchCourse &&
            filterCategory &&
            filterLevel &&
            !filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?category=' +
                        filterCategory +
                        '&level=' +
                        filterLevel
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            !searchCourse &&
            filterCategory &&
            !filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?category=' +
                        filterCategory +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            !searchCourse &&
            !filterCategory &&
            filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?level=' +
                        filterLevel +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            !searchCourse &&
            filterCategory &&
            filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?category=' +
                        filterCategory +
                        '&level=' +
                        filterLevel +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            filterCategory &&
            !filterLevel &&
            !filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&category=' +
                        filterCategory
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            !filterCategory &&
            filterLevel &&
            !filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&level=' +
                        filterLevel
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            !filterCategory &&
            !filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            filterCategory &&
            filterLevel &&
            !filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&category=' +
                        filterCategory +
                        '&level=' +
                        filterLevel
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            filterCategory &&
            !filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&category=' +
                        filterCategory +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            !filterCategory &&
            filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&level=' +
                        filterLevel +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            searchCourse &&
            filterCategory &&
            filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get(
                    'http://localhost:8000/data/courses/filter?q=' +
                        searchCourse +
                        '&category=' +
                        filterCategory +
                        '&level=' +
                        filterLevel +
                        '&price=' +
                        filterPrice
                )
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (
            !searchCourse &&
            filterCategory &&
            filterLevel &&
            filterPrice &&
            !sorting
        ) {
            axios
                .get('http://localhost:8000/data/courses/filter')
                .then((res) => {
                    setNewClassList(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            getAllClass('http://localhost:8000/data/courses');
            history.replace(currentUrl);
            setSearchCourse();
            setFilterCategory();
            setFilterLevel();
            setFilterPrice();
        }
    };
    const categoryHandler = (e) => {
        setFilterCategory(e.currentTarget.value);
    };
    const levelHandler = (e) => {
        setFilterLevel(e.currentTarget.value);
    };
    const priceHandler = (e) => {
        setFilterPrice(e.currentTarget.value);
    };
    const sortingHandler = (e) => {
        setSorting(e.currentTarget.value);
    };

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
                                {classItems ? (
                                    <Link to='/my-class'>view all{' >'}</Link>
                                ) : (
                                    'Welcome to the void. There is nothing here.'
                                )}
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
                                                onChange={searchValue}
                                            />
                                            <button
                                                className='btn btn-search-activity'
                                                onClick={filterHandler}
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* <!-- Filter Group --> */}
                                <div className='filter-group d-flex'>
                                    <select
                                        className='selectpicker sel-filter'
                                        onChange={categoryHandler}
                                        onClick={filterHandler}
                                    >
                                        <option value=''>Categories</option>
                                        <option value='software'>
                                            Software
                                        </option>
                                        <option value='history'>History</option>
                                        <option value='psychology'>
                                            Psychology
                                        </option>
                                        <option value='finance'>Finance</option>
                                        <option value='math'>Math</option>
                                        <option value='science'>Science</option>
                                    </select>
                                    <select
                                        className='selectpicker sel-filter'
                                        style={{ width: '3.5rem' }}
                                        onClick={filterHandler}
                                        onChange={levelHandler}
                                    >
                                        <option value=''>Level</option>
                                        <option value={1}>Beginner</option>
                                        <option value={2}>Intermediate</option>
                                        <option value={3}>Advance</option>
                                    </select>
                                    <select
                                        className='selectpicker sel-filter'
                                        style={{ width: '4.2rem' }}
                                        onClick={filterHandler}
                                        onChange={priceHandler}
                                    >
                                        <option value=''>Pricing</option>
                                        <option value='free'>Free</option>
                                        <option value='paid'>Paid</option>
                                    </select>
                                    <select
                                        className='selectpicker sel-filter'
                                        style={{ width: '4.2rem' }}
                                        onClick={filterHandler}
                                        onChange={sortingHandler}
                                    >
                                        <option value=''>Sort</option>
                                        <option value='price-AZ'>
                                            Price A-Z
                                        </option>
                                        <option value='price-ZA'>
                                            Price Z-A
                                        </option>
                                        <option value='category-AZ'>
                                            Category A-Z
                                        </option>
                                        <option value='category-ZA'>
                                            Category Z-A
                                        </option>
                                        <option value='level-AZ'>
                                            Level A-Z
                                        </option>
                                        <option value='level-ZA'>
                                            Level Z-A
                                        </option>
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

                                <div className='info'>
                                    <div className='col d-flex justify-content-start align-items-center'>
                                        Showing{' '}
                                        {newClassList && info
                                            ? (info.page - 1) * 5 +
                                              1 +
                                              '-' +
                                              Math.floor(
                                                  (info.page - 1) * 5 +
                                                      newClassList.length
                                              )
                                            : null}{' '}
                                        out of {info ? info.count : null}
                                    </div>
                                    <div className='col d-flex justify-content-end align-items-center'>
                                        <span
                                            className='pg'
                                            onClick={
                                                info
                                                    ? () =>
                                                          getAllClass(info.prev)
                                                    : null
                                            }
                                        >
                                            {'<'}
                                        </span>
                                        {numPage}
                                        <span
                                            className='pg'
                                            onClick={
                                                info
                                                    ? () =>
                                                          getAllClass(info.next)
                                                    : null
                                            }
                                        >
                                            {'>'}
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
const mapStatetoProps = (state) => {
    const { dataUserReducer, dataCourseReducer } = state;
    return {
        dataUserReducer,
        dataCourseReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: () =>
            dispatch(getMyClass('http://localhost:8000/data/student/my-class')),
        getAllClass: (url) => dispatch(getCourseData(url)),
    };
};

const ConnectedStudentActivity = connect(
    mapStatetoProps,
    mapDispatchToProps
)(StudentActivity);
export default ConnectedStudentActivity;
