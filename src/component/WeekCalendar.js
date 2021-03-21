import React from 'react'
import '../assets/css/Sidebar.css'
import { Link } from 'react-router-dom'

import calendarIcon from '../assets/images/Calendar Icon.png'

function WeekCalendar() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday, Monday, Tuesday, Wednesday", "Thursday", "Friday", "Saturday"]
    let curr = new Date

    let monthName = monthNames[curr.getMonth()]
    let dayName = dayNames[curr.getDay()]
    let d = curr.getDay()

    let weekDayName = []
    let weekDay = []

    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i 
        let day = new Date(curr.setDate(first)).toISOString().slice(8, 10)
        weekDayName.push(dayNames[first].slice[0, 2])
        weekDate.push(day)
    }

    let classCalGroup= 'cal-group'
    let classCalGroupActive= ['cal-group', 'active']

    const printCal = () => {
        for (let i =0; i < 6; i++) {
            <div className={ d === Number(day.slice[1, 2]) ? classCalGroupActive : classCalGroup}>
                <div className="day">
                    <Link to="">{weekDayName[i]}</Link></div>
                <div className="date">
                    <Link to="">{weekDate[i]}</Link></div>
            </div>
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="sub-label">{dayName}, {monthName} {d}</div>
                <div id="calendar-icon">
                    <Link to=""><img src={calendarIcon} alt="calendar icon"/></Link>
                </div>
            </div> <br/>



            <div id="calendar" className="container d-flex flex-row justify-content-between text-center">
                {printCal()}
            </div>

        </div>
    )
}

export default WeekCalendar
