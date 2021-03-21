import React from 'react'
import DashboardTemplate from '../templates/DashboardTemp'
import AllSchedule from '../component/AllSchedule'
import ForYou from '../component/ForYou'
import { useParams } from "react-router-dom";

function Dashboard() {
    let {id} = useParams()
    let content, active

    if (id==="all-schedule") {
        content = <AllSchedule/>
        active = 0
    } else if (id==="for-you"){
        content = <ForYou/>
        active = 1
    }

    return (
        <div>
            <DashboardTemplate
            timeline = {content}
            menu = {active}
            />
        </div>
    )
}

export default Dashboard
