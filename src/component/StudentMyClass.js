import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { useHistory } from 'react-router-dom';
import '../assets/css/Activity.css';
import '../assets/css/MyClass.css';
import MyClassItem from '../component/MyClassItem';
import Navbar from '../component/Navbar';

import { connect } from 'react-redux';
import { getDataStudent } from '../redux/ActionCreators/student';

function StudentMyClass(props) {
    const [myClassList, setMyClassList] = useState();
    const [info, setInfo] = useState();
    const { dataStudentReducer, getMyClass } = props;
    let classItems;
    let numPage = [];
    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMyClass('http://localhost:8000/data/student/my-class');
            ref.current = true;
        } else {
            if (dataStudentReducer.isPending) {
                console.log('Loading...');
            } else if (dataStudentReducer.isFulfilled) {
                setMyClassList(dataStudentReducer.result);

                setInfo(dataStudentReducer.info);
                // console.log('info', dataStudentReducer.info);
            } else if (dataStudentReducer.isRejected) {
                console.log('Failed');
            }
        }
    });
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8000/data/student/my-class/6')
    //         .then((res) => {
    //             setMyClassList(res.data.result);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    // Display top 10 My Class list
    if (myClassList) {
        classItems = myClassList.map((cl) => {
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
        // len = myClassList.length;
    }

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
                        getMyClass(
                            i === 0
                                ? 'http://localhost:8000/data/student/my-class'
                                : 'http://localhost:8000/data/student/my-class?pages=' +
                                      (Number(i) + 1)
                        )
                    }
                >
                    {i + 1}
                </span>
            );
        }
        // console.log('iinfo', info);
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
                                    Showing{' '}
                                    {myClassList && info
                                        ? (info.page - 1) * 5 +
                                          1 +
                                          '-' +
                                          Math.floor(
                                              (info.page - 1) * 5 +
                                                  myClassList.length
                                          )
                                        : null}{' '}
                                    out of {info ? info.count : null}
                                </div>
                                <div className='col d-flex justify-content-end align-items-center'>
                                    <span
                                        className='pg'
                                        onClick={
                                            info
                                                ? () => getMyClass(info.prev)
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
                                                ? () => getMyClass(info.next)
                                                : null
                                        }
                                    >
                                        {'>'}
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

const mapStatetoProps = (state) => {
    const { dataStudentReducer } = state;
    return {
        dataStudentReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: (url) => dispatch(getDataStudent(url)),
    };
};

const ConnectedStudentMyClass = connect(
    mapStatetoProps,
    mapDispatchToProps
)(StudentMyClass);
// export default ConnectedStudentActivity;
export default ConnectedStudentMyClass;
