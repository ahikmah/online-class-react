import React from 'react'
import { Link } from 'react-router-dom'

function TimelineItem(props) {
    return (
        <div className="col-6 card class-item ">
            <div className="d-flex">
                <div className="col schedule-item">
                    <Link to="">{props.name}</Link></div>
                <div className="col-1 option-menu">
                    <Link to="#"><i className="fas fa-ellipsis-h"></i></Link></div>
            </div>
            <div className="thumbnail-item"><img src={props.thumbnail} alt=""/></div>
            <div className="duration"><small>{props.duration} minutes</small></div>

        </div>
    )
}

export default TimelineItem
