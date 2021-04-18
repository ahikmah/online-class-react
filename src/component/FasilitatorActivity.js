import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import '../assets/css/Activity.css';
import '../assets/css/FasilitatorActivity.css';
import FasMyClassItem from '../component/FasMyClassItem';
import Navbar from '../component/Navbar';
import { connect } from 'react-redux';
import { getDataFacilitator } from '../redux/ActionCreators/facilitator';

function FasilitatorActivity(props) {
    const [myClassList, setMyClassList] = useState();
    const { dataFacilitatorReducer, getMyClass } = props;

    let classItems;

    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMyClass('http://localhost:8000/data/instructor/my-course');
            ref.current = true;
        } else {
            if (dataFacilitatorReducer.isPending) {
                console.log('Loading...');
            } else if (dataFacilitatorReducer.isFulfilled) {
                setMyClassList(dataFacilitatorReducer.result);
            } else if (dataFacilitatorReducer.isRejected) {
                console.log('Failed');
            }
        }
    });
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8000/data/instructor/my-course/1')
    //         .then((res) => {
    //             setMyClassList(res.data.result);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    if (myClassList) {
        // console.log(myClassList);
        const myclasssize = 3;
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
    }

    // Display top 3 My Class list

    return (
        <>
            <Navbar activeMenu={2} />
            <div className='container-fluid activity'>
                <div className='row'>
                    <Sidebar activeMenu={2} name='Aman Ansari' />

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
                                <div className='col th'>Class Name</div>
                                <div className='col th tbh'>Category</div>
                                <div className='col th tbh'>Description</div>
                                <div className='col th d-flex justify-content-center'>
                                    Schedule
                                </div>
                                <div className='col th d-flex justify-content-center'>
                                    Students
                                </div>
                                <div className='col col-1 th d-flex justify-content-center'></div>
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

                        {/* Create New Class Section */}
                        <section className=' container wrapper new-class '>
                            <div className='sub-label '>Create New Class</div>
                            <div className='container new-class'>
                                <form className='create-new-class'>
                                    <div className='row d-flex'>
                                        <div className='col-5 d-flex form-group cnc'>
                                            <label
                                                htmlFor='className'
                                                className='col-3'
                                            >
                                                Class Name
                                            </label>
                                            <p className='col col-1 tbh'>:</p>
                                            <input
                                                type='text'
                                                className='col class-name-input'
                                            />
                                        </div>

                                        <div className='col d-flex justify-content-start  form-group cnc pick-pricing'>
                                            <label
                                                htmlFor='pricing'
                                                className='col col-2'
                                            >
                                                Pricing
                                            </label>
                                            <p className='col col-1 tbh'>:</p>
                                            <input
                                                type='radio'
                                                className='form-check-input'
                                                id='free'
                                                name='pricing'
                                                value='free'
                                            />
                                            <label
                                                htmlFor='free'
                                                className='pricing-radio'
                                            >
                                                Free
                                            </label>
                                            <input
                                                type='radio'
                                                className='form-check-input'
                                                id='paid'
                                                name='pricing'
                                                value='paid'
                                            />
                                            <label
                                                htmlFor='paid'
                                                className='pricing-radio'
                                            >
                                                Paid
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row d-flex'>
                                        <div className='col-5 d-flex form-group cnc'>
                                            <label
                                                htmlFor='className'
                                                className='col col-3'
                                            >
                                                Categories
                                            </label>
                                            <p className='col col-1 tbh'>:</p>
                                            <select className='selectpicker cnc'>
                                                <option>Software</option>
                                                <option>History</option>
                                                <option>Psychology</option>
                                                <option>Finance</option>
                                                <option>Math</option>
                                            </select>
                                        </div>

                                        <div className='col d-flex justify-content-start  form-group cnc sch'>
                                            <label
                                                htmlFor='className'
                                                className='col col-2'
                                            >
                                                Schedule
                                            </label>
                                            <p className='col col-1 tbh'>:</p>
                                            <select className='selectpicker cnc input-time'>
                                                <option>Sunday</option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                            </select>
                                            <input
                                                type='time'
                                                className='input-time'
                                            />
                                            -
                                            <input
                                                type='time'
                                                className='input-time'
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <label htmlFor='description'>
                                            Description
                                        </label>
                                        <textarea
                                            className='form-control cnc'
                                            rows='12'
                                        ></textarea>
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <Link to='#'>
                                            <div className='btn btn-create'>
                                                Create
                                            </div>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

const mapStatetoProps = (state) => {
    const { dataFacilitatorReducer } = state;
    return {
        dataFacilitatorReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: (url) => dispatch(getDataFacilitator(url)),
    };
};

const ConnectedFasilitatorActivity = connect(
    mapStatetoProps,
    mapDispatchToProps
)(FasilitatorActivity);
export default ConnectedFasilitatorActivity;
// export default FasilitatorActivity;
