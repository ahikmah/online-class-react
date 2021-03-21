import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/TimelineDashboard.css'

function TimelineItem(props) {
    return (
        <div>
            <div className="col-6 card className-item ">
                <div className="row d-flex">
                    <div className="col schedule-item">
                        <Link to="">{props.course-title}</Link></div>
                    <div className="col option-menu">
                        <Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
                </div>
                <div className="thumbnail-item"><img src={props.icon} alt="icon item"/></div>
                <div className="duration"><small>{props.duration} minutes</small></div>

            </div>
            
        </div>
    )
}

export default TimelineItem
