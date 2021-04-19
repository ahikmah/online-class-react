import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/Activity.css';
import '../assets/css/FasilitatorActivity.css';
import FasMyClassItem from '../component/FasMyClassItem';
import Navbar from '../component/Navbar';
import { connect } from 'react-redux';
import { getMyClass } from '../redux/ActionCreators/user';
import { getCourseCategory } from '../redux/ActionCreators/course';
import ModalComp from '../component/ModalComp';
import axios from 'axios';

function FasilitatorActivity(props) {
    const [myClassList, setMyClassList] = useState();
    const [categoryList, setCategoryList] = useState();
    const [modalShow, setModalShow] = useState(false);

    const [className, setClassName] = useState();
    const [classCategory, setClassCategory] = useState();
    const [classPrice, setClassPrice] = useState();
    const [classSchedule, setClassSchedule] = useState();
    const [classStart, setClassStart] = useState();
    const [classEnd, setClassEnd] = useState();
    const [classIcon, setClassIcon] = useState();
    const [classDescription, setClassDescription] = useState();

    const {
        dataUserReducer,
        getMyClass,
        courseCategoryReducer,
        getCategory,
    } = props;

    let classItems, categoryItems;
    const history = useHistory();

    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getMyClass('http://localhost:8000/data/instructor/my-course');
            getCategory('http://localhost:8000/data/courses/categories');
            ref.current = true;
        } else {
            if (dataUserReducer.isPending && courseCategoryReducer.isPending) {
                console.log('Loading...');
            } else if (
                dataUserReducer.isFulfilled &&
                courseCategoryReducer.isFulfilled
            ) {
                setMyClassList(dataUserReducer.myClass);
                setCategoryList(courseCategoryReducer.result);
            } else if (dataUserReducer.isRejected) {
                console.log('Failed');
            }
        }
    });

    const classNameInput = (e) => {
        setClassName(e.target.value);
    };

    const classCategoryInput = (e) => {
        setClassCategory(e.currentTarget.value);
    };

    const classPriceInput = (e) => {
        setClassPrice(e.target.value);
    };

    const classScheduleInput = (e) => {
        setClassSchedule(e.currentTarget.value);
    };

    const classStartInput = (e) => {
        setClassStart(e.target.value);
    };
    const classEndInput = (e) => {
        setClassEnd(e.target.value);
    };

    const classIconInput = (e) => {
        setClassIcon(e.target.files[0]);
    };

    const classDescriptionInput = (e) => {
        setClassDescription(e.target.value);
    };

    const createCourseHandler = (e) => {
        e.preventDefault();
        const token = localStorage.token;
        let formData = new FormData();
        formData.append('name', className);
        formData.append('category_id', classCategory);
        formData.append('description', classDescription);
        formData.append('price', classPrice);
        formData.append('schedule', classSchedule);
        formData.append('start_time', classStart);
        formData.append('end_time', classEnd);
        formData.append('banner', classIcon);

        axios
            .post('http://localhost:8000/data/courses/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log('Success');
                setModalShow(true);
                setClassName();
                setClassCategory();
                setClassPrice();
                setClassSchedule();
                setClassStart();
                setClassEnd();
                setClassIcon();
                setClassDescription();
                // setModalShow(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (myClassList) {
        const myclasssize = 3;
        classItems = myClassList.slice(0, myclasssize).map((cl) => {
            return (
                <FasMyClassItem
                    key={cl.course_id}
                    idCourse={cl.course_id}
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

    if (categoryList) {
        categoryItems = categoryList.map((item) => {
            return <option value={item.id}>{item.name}</option>;
        });
    }

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
                                    <div className='d-flex'>
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
                                                onChange={classNameInput}
                                            />
                                        </div>

                                        <div
                                            className='col d-flex justify-content-start  form-group cnc pick-pricing'
                                            onChange={classPriceInput}
                                        >
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
                                                value='0'
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
                                                value='10'
                                            />
                                            <label
                                                htmlFor='paid'
                                                className='pricing-radio'
                                            >
                                                Paid
                                            </label>
                                        </div>
                                    </div>

                                    <div className='d-flex'>
                                        <div className='col-5 d-flex form-group cnc'>
                                            <label
                                                htmlFor='className'
                                                className='col col-3'
                                            >
                                                Categories
                                            </label>
                                            <p className='col col-1 tbh'>:</p>
                                            <select
                                                className='selectpicker cnc'
                                                onChange={classCategoryInput}
                                            >
                                                {categoryItems}
                                            </select>
                                        </div>

                                        <div className='col d-flex justify-content-start  form-group cnc sch'>
                                            <label className='col col-2'>
                                                Schedule
                                            </label>
                                            <p className='col col-1 tbh'>:</p>
                                            <input
                                                type='date'
                                                value='2021-05-19'
                                                onChange={classScheduleInput}
                                            />
                                            {/* <select className='selectpicker cnc input-time'>
                                                <option>Sunday</option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                            </select> */}
                                            <input
                                                type='time'
                                                className='input-time'
                                                onChange={classStartInput}
                                            />
                                            -
                                            <input
                                                type='time'
                                                className='input-time'
                                                onChange={classEndInput}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='row d-flex'
                                        style={{ marginBottom: '1rem' }}
                                    >
                                        <label for='banner'>Course Icon</label>
                                        <input
                                            type='file'
                                            className='form-control-file cnc'
                                            id='banner'
                                            onChange={classIconInput}
                                        />
                                    </div>

                                    <div className='row'>
                                        <label htmlFor='description'>
                                            Description
                                        </label>
                                        <textarea
                                            className='form-control cnc'
                                            rows='12'
                                            onChange={classDescriptionInput}
                                        ></textarea>
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <div
                                            className='btn btn-create'
                                            onClick={createCourseHandler}
                                        >
                                            Create
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <ModalComp
                header='Class Created'
                msg='Your new class has been created'
                show={modalShow}
                onHide={() => history.push('/facilitator/my-class')}
                variant='success'
                footermsg='OK'
            />
        </>
    );
}

const mapStatetoProps = (state) => {
    const { dataUserReducer, courseCategoryReducer } = state;
    return {
        dataUserReducer,
        courseCategoryReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: (url) => dispatch(getMyClass(url)),
        getCategory: (url) => dispatch(getCourseCategory(url)),
    };
};

const ConnectedFasilitatorActivity = connect(
    mapStatetoProps,
    mapDispatchToProps
)(FasilitatorActivity);
export default ConnectedFasilitatorActivity;
// export default FasilitatorActivity;
