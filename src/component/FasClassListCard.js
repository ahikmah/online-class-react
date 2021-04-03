import React from 'react';
import studentIcon from '../assets/images/Student Icon.png';
function FasClassListCard(props) {
    const time = `${props.start.slice(0, 5)} - ${props.end.slice(0, 5)}`;
    return (
        <div className='classlist-item-fas d-flex justify-content-between align-items-center'>
            <div className='classlist-time'>{time}</div>
            <div className='classlist-name'>{props.name}</div>
            <div className='classlist-members'>
                {props.member}
                <img src={studentIcon} alt='student icon'></img>
            </div>
        </div>
    );
}

export default FasClassListCard;
