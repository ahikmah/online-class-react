import React, { useState } from 'react';
import iconList from '../assets/images/icon-list.png';
import { Link, useHistory } from 'react-router-dom';
import ModalComp from '../component/ModalComp';
import axios from 'axios';

function NewClassItem(props) {
    const [modalShow, setModalShow] = useState(false);
    const history = useHistory();
    const confirmation = () => {
        setModalShow(true);
    };
    const registerHandler = () => {
        const token = localStorage.token;
        axios
            .post(
                'http://localhost:8000/data/courses/register',
                { course_id: props.idCourse },
                {
                    headers: { 'x-access-token': `Bearer ${token}` },
                }
            )
            .then((res) => {
                console.log('Success', res);
                setModalShow(false);
                history.go(0);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div className='row tdata2'>
                <div className='col nm '>
                    <Link
                        to={
                            '/student/class-detail/information/' +
                            props.idCourse
                        }
                    >
                        {props.name}
                    </Link>
                </div>
                <div
                    className='col tbh
                '
                >
                    <Link to=''>{props.category}</Link>
                </div>
                <div
                    className='col tbh
                '
                >
                    {props.desc.split(' ').splice(0, 4).join(' ') + '...'}
                </div>
                <div className='col'>{props.level}</div>
                <div className='col'>{props.pricing}</div>
                <div className='col badge-rg' onClick={confirmation}>
                    <span>Register</span>
                </div>
                <div className='col col-1 ls tbh'>
                    <Link to=''>
                        <img src={iconList} alt='icon list' />
                    </Link>
                </div>
            </div>

            <ModalComp
                header='Register Confirmation'
                msg='Are you sure you want to register?'
                show={modalShow}
                onHide={() => setModalShow(false)}
                onConfirmation={() => registerHandler()}
                variant='danger'
                footermsg='Cancel'
                variant2='success'
                footermsg2='Register Now'
            />
        </>
    );
}

export default NewClassItem;
