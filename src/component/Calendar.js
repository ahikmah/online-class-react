import React from 'react'
import { Link } from 'react-router-dom'
function Calendar(props) {
    return (
        <div className={props.classes}>
            <div className="day">
                <Link to="">{props.dayName}</Link>
            </div>
            <div className="date">
                <Link to="">{props.date}</Link>
            </div>
        </div>
    )
}

export default Calendar
