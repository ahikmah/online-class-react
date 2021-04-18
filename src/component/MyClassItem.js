import React from 'react';

import iconList from '../assets/images/icon-list.png';
import { Link } from 'react-router-dom';

function MyClassItem(props) {
    const ProgressClass = ['c100', 'small'];
    ProgressClass.push('p' + props.progress);

    let scoreColor;
    if (Number(props.score) > 90) {
        scoreColor = '#2BE6AE';
    } else if (Number(props.score) > 70) {
        scoreColor = '#51E72B';
    } else if (Number(props.score) > 50) {
        scoreColor = '#CCE72B';
    } else if (Number(props.score) > 30) {
        scoreColor = '#E7852B';
    } else {
        scoreColor = '#E6422B';
    }

    return (
        <>
            <div className='row tdata tb-myclass'>
                <div className='col col-1'>
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                </div>
                <div className='col col-2 overflow-hidden'>
                    <Link
                        to={
                            '/student/class-detail/information/' +
                            props.idCourse
                        }
                    >
                        {props.name}
                    </Link>
                </div>
                <div className='col tbh'>
                    <Link to=''>{props.category}</Link>
                </div>
                <div className='col col-3 ds tbh'>
                    {props.desc.split(' ').splice(0, 7).join(' ') + '...'}
                </div>
                <div className='col pr d-flex justify-content-center'>
                    <div className={ProgressClass.join(' ')}>
                        <span>{props.progress}%</span>
                        <div className='slice'>
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                </div>
                <div className='col badge-pr tbh'>
                    <span>{props.status}</span>
                </div>
                <div className='col d-flex justify-content-center'>
                    <span className='scr' style={{ color: scoreColor }}>
                        {props.score}
                    </span>
                </div>
                <div className='col col-1 tbh'>
                    <Link to=''>
                        <img src={iconList} alt='icon list' />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MyClassItem;
