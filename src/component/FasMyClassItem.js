import React from 'react';
import iconList from '../assets/images/icon-list.png';
import { Link } from 'react-router-dom';
import studentIcon from '../assets/images/Student Icon.png';

function MyClassItem(props) {
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
                    <Link to='/student/class-detail/information'>
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
                    <Link to=''>
                        <img src={iconList} alt='icon list' />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MyClassItem;
