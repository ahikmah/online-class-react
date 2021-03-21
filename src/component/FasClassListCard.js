import React from 'react'
import studentIcon from '../assets/images/Student Icon.png'
function FasClassListCard(props) {
    return (
        <div className="classlist-item-fas d-flex justify-content-between align-items-center">
            <div className="classlist-time">{props.time}</div>
            <div className="classlist-name">{props.name}</div>
            <div className="classlist-members">{props.member}
                <img src={studentIcon} alt="student icon"></img>
            </div>
        </div>
    )
}

export default FasClassListCard
