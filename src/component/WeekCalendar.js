import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from './Calendar'

import calendarIcon from '../assets/images/Calendar Icon.png'

function WeekCalendar() {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let curr = new Date()

    let monthName = monthNames[curr.getMonth()]
    // let dayName = dayNames[curr.getDay()]
    // let d = curr.getDay()
    let dt = curr.getDate()

    let weekDayName = []
    let weekDate = []
    let day;

    for (let i = 0; i < 7; i++) {
        let first = curr.getDate() - curr.getDay() + i 
        day = new Date(curr.setDate(first)).toISOString().slice(8, 10)
        weekDayName.push(dayNames[i].slice(0,2))
        weekDate.push(day)
    }
    // console.log(weekDayName);
    // console.log(weekDate);
    // console.log(weekDate[0]);
    // console.log(day);
    // console.log(dt);
    // console.log(d);

    let classCalGroup= 'cal-group'
    let classCalGroupActive= ['cal-group', 'active-cal']

    let items=[];
    
    for (let i =0; i < 7; i++) {
        items.push(<Calendar key={i} classes={dt === Number(weekDate[i])? classCalGroupActive.join(' '):classCalGroup} dayName = {weekDayName[i]} date= {weekDate[i]}/>)
    }


    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="sub-label">Today, {monthName} {dt}</div>
                <div className="calendar-icon">
                    <Link to=""><img src={calendarIcon} alt="calendar icon"/></Link>
                </div>
            </div> <br/>

            <div id="calendar" className="container d-flex flex-row justify-content-between text-center">
                {items}
            </div>

        </div>
    )
}

export default WeekCalendar