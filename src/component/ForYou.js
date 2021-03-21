import React from 'react'
import TimelineItem from './TimelineItem'
import FinanceIcon from '../assets/images/Finance Icon.png'
import HistoryIcon from '../assets/images/History Icon.png'

function AllSchedule() {
    return (
        <>
            <span className="timeline">8:00</span>
                <div className="item-group container d-flex flex-row justify-content-between ">
                    <TimelineItem name= "Introduction to Banking Finace" duration="100" thumbnail={FinanceIcon}/>
                    <TimelineItem name= "Trigonometry" duration="50" thumbnail={FinanceIcon}/>
                </div>

                <span className="timeline">11:00</span>
                <div className="item-group container d-flex flex-row justify-content-between ">
                    <TimelineItem name= "History of Europe" duration="100" thumbnail={HistoryIcon}/>
                </div>

            <span className="timeline">Finish</span>
        </>
    )
}

export default AllSchedule
