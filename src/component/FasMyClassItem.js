import React, { useState } from 'react';
import iconList from '../assets/images/icon-list.png';
import { Link, useHistory } from 'react-router-dom';
import studentIcon from '../assets/images/Student Icon.png';
import ModalComp from '../component/ModalComp';
import axios from 'axios';

function MyClassItem(props) {
    const [modalShow, setModalShow] = useState(false);
    const history = useHistory();
    const confirmation = () => {
        setModalShow(true);
    };

    const deleteCourseHandler = (e) => {
        const token = localStorage.token;
        axios
            .delete('http://localhost:8000/data/courses/' + props.idCourse, {
                headers: { 'x-access-token': `Bearer ${token}` },
            })
            .then((res) => {
                console.log('Success', res);
                setModalShow(false);
                history.go(0);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const schedule = `${props.day}, ${props.start.slice(
        0,
        5
    )}-${props.end.slice(0, 5)}`;
    return (
        <>
            <div className='row tdata tb-myclass'>
                <div className='col col-1'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                </div>
                <div className='col overflow-hidden'>
                    <Link
                        to={
                            '/facilitator/class-detail/information/' +
                            props.idCourse
                        }
                    >
                        {props.name}
                    </Link>
                </div>
                <div className='col tbh'>
                    <Link to=''>{props.category}</Link>
                </div>
                <div className='col ds tbh'>
                    {props.desc.split(' ').splice(0, 7).join(' ') + '...'}
                </div>
                <div className='col d-flex justify-content-center'>
                    {schedule}
                </div>
                <div className='col d-flex justify-content-center'>
                    {props.students}
                    <img src={studentIcon} alt='Student Icon' />
                </div>
                <div className='col col-1  d-flex justify-content-center'>
                    <img
                        style={{ cursor: 'pointer' }}
                        src={iconList}
                        alt='icon list'
                        onClick={confirmation}
                    />
                </div>
            </div>
            <ModalComp
                header='Delete Confirmation'
                msg='Are you sure you want to delete this class?'
                show={modalShow}
                onHide={() => setModalShow(false)}
                onConfirmation={() => deleteCourseHandler()}
                variant='danger'
                footermsg='Cancel'
                variant2='primary'
                footermsg2='Delete'
            />
        </>
    );
}

export default MyClassItem;
